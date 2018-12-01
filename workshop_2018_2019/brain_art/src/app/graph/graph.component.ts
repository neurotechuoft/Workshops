import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import * as d3 from 'd3';

import { node_data } from './data';

import { channelNames, EEGSample, MuseClient, zipSamples } from 'muse-js';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class GraphComponent implements OnInit {

  // declare muse connection variables
  private muse = new MuseClient();

  readonly channels = 4;
  readonly channelNames = channelNames.slice(0, this.channels);

  channel_ind = 0;
  ch1 = new Array<number>(256);
  ch2 = new Array<number>(256);
  ch3 = new Array<number>(256);
  ch4 = new Array<number>(256);

  data: Observable<EEGSample> | null;

  // declare image variables
  front_circles: any;
  front_texts: any;
  back_circles: any;
  back_texts: any;

  svg: any;
  back: any;
  front: any;
  animation: any;

  width: any;
  height: any;
  color: any;

  back_circle: any;
  inner_circle: any;
  hor_line: any;
  ver_line: any;

  node_names: any;
  receive = true;


  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {

    this.createModel();
  }

  createModel() {

    // initialize d3 svg
    this.svg = d3.select('svg');
    this.width = +this.svg.attr('width');
    this.height = +this.svg.attr('height');
    this.color = d3.scaleOrdinal(d3.schemePaired);

    const c_radius = 250;
    const i_radius = 210;
    const c_x = this.width / 2;
    const c_y = this.height / 2;
    const left_x = c_x - c_radius;
    const right_x = c_x + c_radius;
    const top_y = c_y - c_radius;
    const bottom_y = c_y + c_radius;

    /* draws the ten-tenty system to the background */

    // the outer circle
    this.back_circle = this.svg.append('circle')
      .attr('r', c_radius)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('cx', c_x)
      .attr('cy', c_y);

    // the inner dashed circle
    this.inner_circle = this.svg.append('circle')
      .attr('r', i_radius)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('cx', c_x)
      .attr('cy', c_y)
      .style('stroke-dasharray', ('6, 6'));

    // the dashed horizontal line
    this.hor_line = this.svg.append('line')
      .attr('x1', left_x)
      .attr('y1', c_y)
      .attr('x2', right_x)
      .attr('y2', c_y)
      .style('stroke', 'black')
      .style('stroke-dasharray', ('6, 6'));

    // the dashed vertical line
    this.ver_line = this.svg.append('line')
      .attr('x1', c_x)
      .attr('y1', top_y)
      .attr('x2', c_x)
      .attr('y2', bottom_y)
      .style('stroke', 'black')
      .style('stroke-dasharray', ('6, 6'));

    // this.node_names = nodes.map(a => a['id']);

    // a container for the static electrodes drawn in the back
    this.back = this.svg.append('g');

    // the electrodes the Muse does not receive signal from
    this.back_circles = this.back.selectAll('circles')
      .data(node_data['back_nodes'])
      .enter()
      .append('circle')
      .attr('r', 23)
      .attr('cx', (d) => d['x'])
      .attr('cy', (d) => d['y'])
      .style('fill', 'white')
      .style('stroke', 'grey');

    // the name of the electrodes in text
    this.back_texts = this.back.selectAll('text')
      .data(node_data['back_nodes'])
      .enter()
      .append('text')
      .attr('x', (d) => { return d['x'] - 13; })
      .attr('y', (d) => { return d['y'] + 7; })
      .text((d) => d['id'])
      .attr('font-family', 'sans-serif')
      .attr('font-size', '18px')
      .attr('align', 'center')
      .attr('fill', 'grey');

    // container for the four dynamic electrodes that Muse receive signal from
    this.front = this.svg.append('g');

    this.front_circles = this.front.selectAll('circles')
      .data(node_data['front_nodes'])
      .enter()
      .append('circle')
      .attr('r', 23)
      .attr('cx', (d) => d['x'])
      .attr('cy', (d) => d['y'])
      .style('fill', 'white')
      .style('stroke', 'black')
      .style('stroke-width', 1.5);

    this.front_texts = this.front.selectAll('text')
      .data(node_data['front_nodes'])
      .enter()
      .append('text')
      .attr('x', (d) => { return d['x'] - 20; })
      .attr('y', (d) => { return d['y'] + 7; })
      .text((d) => d['id'])
      .attr('font-family', 'sans-serif')
      .attr('font-size', '18px')
      .attr('align', 'center')
      .attr('fill', 'black');
  }

  /* stop receiving input (right now just stops animation) */
  endReceive() {

    this.receive = false;
    this.svg.selectAll('.anime').remove();

  }

  /* start to receive input (right now starts random animation) */
  startReceive() {

    this.receive = true;

    // a container for the animation (color change) work on the electrodes
    this.animation = this.svg.append('g');

    const colors = [0, 2, 4, 8];

    // draws another layer of colored nodes on the four active nodes
    const nodes = this.animation.selectAll('circles')
      .data(node_data['front_nodes'])
      .enter()
      .append('circle')
      .attr('class', 'anime')
      .attr('r', 22)
      .attr('fill', 'none')
      .attr('stroke', 'none')
      .attr('cx', (d) => d['x'])
      .attr('cy', (d) => d['y'])
      .transition()
      // .attr('fill', 'none')
      // .attr('stroke', 'none')
      .delay((d) => { return d['delay'] * 1000; })
      .on('start', function repeat() {

        d3.active(this)
          .duration(1500)
          .attr('r', 35)
          .attr('fill', d3.schemePaired[colors[Math.floor(Math.random() * 4)]])
          .transition()
          .duration(1500)
          .attr('r', 22)
          .attr('fill', 'white')
          .transition()
          // .duration(2000)
          .attr('r', 22)
          .attr('fill', 'none')
          .transition()
          .on('start', repeat);
      });
  }

  /* connects to the muse device */
  async connectMuse() {
    await this.muse.connect();
    await this.muse.start();

    this.data = zipSamples(this.muse.eegReadings);

    this.stream();
  }

  /* logs the data raw data received from Muse to the console */
  stream() {
    // this.muse.eegReadings
    //   .subscribe(eeg => console.log(eeg.slice(0, this.channels)));
    this.data.subscribe(sample => {
      console.log(sample.data.slice(0, this.channels));

      // sample.data.slice(0, this.channels).forEach((electrode, index) => {
      //   this.updateChannel(electrode, index);
      // });
    });
  }

  // updateChannel(amplitude: number, index: number) {
  //
  // }




}
