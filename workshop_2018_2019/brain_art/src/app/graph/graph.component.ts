import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';

import { Observable } from 'rxjs';
import { Papa } from 'ngx-papaparse';
import { HttpClient } from '@angular/common/http';

import { node_data } from './data';

import * as bcijs from 'bcijs/browser.js';
import { EEGSample, MuseClient, zipSamples } from 'muse-js';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class GraphComponent implements OnInit {

  // declare muse connection variables
  private muse = new MuseClient();

  data: Observable<EEGSample> | null;

  cur_data = new Array<number>();
  cur_wave: number;
  wave_color: number;

  abp_color: any;
  abp = new Array<number>();
  first_abp = new Array<number>();
  started_flag: any;
  opacity: any;

  front_circles: any;
  front_texts: any;
  back_circles: any;

  svg: any;
  margin: any;
  front: any;
  back: any;
  width: any;
  height: any;


  constructor(private papa: Papa, private http: HttpClient) {
  }

  ngOnInit() {

    this.createModel();
  }

  createModel() {

    this.svg = d3.select('svg');
    this.width = +this.svg.attr('width');
    this.height = +this.svg.attr('height');
    this.margin = {top: 20, right: 20, bottom: 20, left: 20};

    this.abp_color = ['#4193c6', '#cc4fb1', '#46bc3e', '#833fc1', '#e28009'];
    this.started_flag = 0;
    this.cur_wave = 0;
    this.wave_color = 0;
    this.opacity = 0.5;

    this.back = this.svg.append('g');

    this.back_circles = this.back.selectAll('circles')
      .data(node_data['front_nodes'])
      .enter()
      .append('circle')
      .attr('class', 'back_circle')
      .attr('r', 23)
      .attr('cx', (d) => d['x'])
      .attr('cy', (d) => d['y'])
      .style('fill', 'white')
      .style('stroke', 'white')
      .style('stroke-width', 1.5);

    this.front = this.svg.append('g');

    this.front_circles = this.front.selectAll('circles')
      .data(node_data['front_nodes'])
      .enter()
      .append('circle')
      .attr('class', 'muse_circle')
      .attr('r', 23)
      .attr('cx', (d) => d['x'])
      .attr('cy', (d) => d['y'])
      .style('fill', 'white')
      .style('stroke', 'white')
      .style('stroke-width', 1.5);

    this.front_texts = this.front.selectAll('text')
      .data(node_data['front_nodes'])
      .enter()
      .append('text')
      .attr('x', (d) => d['x'] - 20)
      .attr('y', (d) => d['y'] + 7)
      .text((d) => d['id'])
      .attr('font-family', 'sans-serif')
      .attr('font-size', '18px')
      .attr('align', 'center')
      .attr('fill', 'black');

  }

  setAlpha() {
    this.cur_wave = 0;
    this.wave_color = 0;

    console.log('current wave: ' + this.cur_wave);
  }

  setBeta() {
    this.cur_wave = 1;
    this.wave_color = 1;

    console.log('current wave: ' + this.cur_wave);
  }

  setTheta() {
    this.cur_wave = 2;
    this.wave_color = 2;

    console.log('current wave: ' + this.cur_wave);
  }

  setDelta() {
    this.cur_wave = 3;
    this.wave_color = 3;

    console.log('current wave: ' + this.cur_wave);
  }

  setGamma() {
    this.cur_wave = 4;
    this.wave_color = 4;

    console.log('current wave: ' + this.cur_wave);
  }

  update_wave() {

    if (this.started_flag === 0) {

      console.log('first detected');

      this.first_abp = this.abp;

      d3.selectAll('.muse_circle')
        .style('fill', this.abp_color[this.wave_color])
        .attr('fill-opacity', this.opacity)
        .merge(this.front_circles);

      this.started_flag = 1;

    } else {

      // changed = ((this.abp[this.cur_wave] - this.first_abp[this.cur_wave]) / this.abp[this.cur_wave]) / 2;
      if (this.abp[this.cur_wave] > this.first_abp[this.cur_wave]) {
        this.opacity += 0.02;

        if (this.opacity > 1) {
          this.opacity = 1;
        }

      } else if (this.abp[this.cur_wave] < this.first_abp[this.cur_wave]) {
        this.opacity -= 0.02;

        if (this.opacity < 0) {
          this.opacity = 0;
        }
      }

      d3.selectAll('.muse_circle')
        .style('fill', this.abp_color[this.wave_color])
        .attr('fill-opacity', this.opacity)
        .merge(this.front_circles);

      this.first_abp = this.abp;

      console.log(this.opacity);
    }
  }

  offLine() {

    this.http.get('./assets/stare_blink.csv', {responseType: 'text'})
      .subscribe(data => this.papa.parse(data, {
        complete: (result) => {

          const arr = Array<Array<Number>>();

          for (let i = 1; i < result.data.length / 2; i++) {
            arr.push(result.data[i * 2]);
          }

          const abp_data = Array<Array<Number>>();

          for (let i = 0; i < arr.length - 1; i++) {

            setTimeout(() => {

              abp_data.push(arr[i].slice(0, 4).map(Number));

              if (i > 255) {

                abp_data.shift();

                this.abp = bcijs.averageBandPowers(abp_data, 256, ['alpha', 'beta', 'theta', 'delta', 'gamma']);
                console.log(this.abp);

                // this.update_brain();
                this.update_wave();
              }

            });
          }
      }
    }));
  }

  async connectMuse() {
    await this.muse.connect();
    await this.muse.start();

    this.data = zipSamples(this.muse.eegReadings);

    this.stream();
  }

  stream() {

    const data_array = new Array<Array<number>>();
    let nxt_idx = 0;

    this.data.subscribe((sample) => {

      this.cur_data = sample.data.slice(0, 4).map(Number);

      for (let i = 0; i < 4; i++) {

        if (isNaN(this.cur_data[i])) {
          this.cur_data[i] = 0;
        }
      }

      data_array.push(this.cur_data);

      nxt_idx += 1;

      if (nxt_idx >= 255) {

        this.abp = bcijs.averageBandPowers(data_array, 256, ['alpha', 'beta', 'theta', 'delta', 'gamma']);

        console.log(this.abp);

        this.update_wave();

        data_array.shift();
      }

    });
  }


}
