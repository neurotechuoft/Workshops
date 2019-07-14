# Intro to Neurotech: 2019 Summer
Make artwork representing your brain with the Muse EEG headband, and learn about neurotech in the process!

## Format
Lecturing is boring! Instead, we want pairs of students to work towards the final brain-art project. Pairs will go through each week's notebook, and fill in the code and run it. If it doesn't work, no worries! We'll have mentors floating around to help pairs debug or understand concepts better.

This is going to be a cross of our workshops from 2017-2018 and our initial Prezi workshops, but with less emphasis on hardware and more emphasis on sofware techniques and the brain.

**NOTE**: This course is kind of crazy! We're teaching a lot of stuff, and really advanced stuff ... so if you feel a bit lost, don't worry! Just come to HackTernoons or office hours and we'll learn it together :)

**NOTE 2**: We're trying to cram a lot of crazy things in the span of a semester! This means we really have to rely on readings to prep you for each week's workshop. **Please make sure to do the mandatory readings** and any **mandatory prep noted** before you come to the workshop, as it will make understanding the material infinitely easier :)

### (To sync this version of workshops with your version, follow the instructions in this link!)
https://www.sitepoint.com/quick-tip-sync-your-fork-with-the-original-without-the-cli/

## Milestones
Milestone 1: Make an app printing out raw data from the Muse in real-time

Milestone 2: Filter data from the Muse in your app in real-time

Milestone 3: Design, implement, and verify EEG interpretation algorithm on pre-collected data in Python

Milestone 4: Implement and verify real-time EEG interpretation algorithm in Angular

## Syllabus:
*(For details, scroll down to "Weekly Details")*

### Week 1: (June 16) Intro to Python
Absolute basics of programming

### Week 2 (June 23): Intro to Neuroscience
History, how neurons work (brief intro), neuroanatomy review, Rall's cable theory, membrane potential (Nernst, GHK, HH equations)

### Week 3 (June 30): Loading and Graphing Data, Noise Filtering
How to load data from CSVs (or FIFs), graphing data with MatPlotLib, filtering noise, and an introduction to the Fast Fourier Transform

### Week 4: (July 7) Intro to Angular, MuseJs, Milestone 1
Front-end programming with Angular, signal acquisition from the Muse using MuseJs, BrainArt architecture, complete BrainArt Milestone 1

### Week 5: (July 14): Convolution, Fourier Transform
Implement convolution, Discrete Fourier Transform

### Week 6: (July 21) Digital Signal Processing I
Convolution, impulse responses, signal types, continuous vs discrete, aliasing, Nyquist's Theorem, FIR vs IIR, different types of filters, filter
order

### Week 7: (July 28) Digital Signal Processing II, Milestone 2
Scenario-based practice of DSP I concepts, complete BrainArt Milestone 2

### Week 8: (August 4) Uncovering Oscillatory Processes in EEG
What exactly is EEG, physics of EEG, oscillatory processes vs ERPs, power spectral analysis for EEG power bands

### Week 9: (August 11) Advanced Git, BrainArt working session, Milestone 3
How to use GitHub to code as a team, dev session for BrainArt (offline data), complete BrainArt Milestone 3

### Week 10: (August 18) BrainArt working session, Milestone 4
Dev session for BrainArt (online with Muse), complete BrainArt Milestone 4

### Week 11: (August 25) Present brain art!
Present brain art piece to NeurotechUofT faculty advisors, prizes, and fun!!

## Weekly Details

### Week 1: (June 16) Intro to Python
Absolute basics of programming

Materials:
- learn Python! http://bit.ly/ntuoft-workshop-2

### Week 2 (June 23): Intro to Neuroscience
History, how neurons work (brief intro), neuroanatomy review, Rall's cable theory, membrane potential (Nernst, GHK, HH equations)

Preparation:
- [Wait But Why: Neuralink - The Human Colossus](https://waitbutwhy.com/2017/04/neuralink.html#part1)
- [Wait But Why: Neuralink - The Brain](https://waitbutwhy.com/2017/04/neuralink.html#part2)
- Practice Python (30 mins per day): https://codecombat.com/

Materials:
- A scientific history of neuroscience discoveries: https://prezi.com/view/RdfcOLXBP5OGB31zeFbt
- Neuroanatomy: https://prezi.com/view/x5Wa2d2EKLPrAFFkhRNt

### Week 3 (June 30): Loading and Graphing Data, Noise Filtering
How to load data from CSVs (or FIFs), graphing data with MatPlotLib, filtering noise in Python, and an introduction to the Fast Fourier Transform

Preparation:
- Learn how to use Git: `./worshop_2018_2019/git_workshop.md`
    - For a deeper understanding of Git:
    - A teeny more in-depth: https://www.emaze.com/@AOOQLWZRZ/git-tutorial
    
- Get started with Conda: `./workshop_2018_2019/Conda_setup.md`
- Virtual environments in Python:
https://towardsdatascience.com/getting-started-with-python-environments-using-conda-32e9f2779307

Materials:

- start graphing our first signals! (just the Week 2 notebooks) `./workshop_2018_2019/notebooks/exercises/`

### Week 4: (July 7) Intro to Angular, MuseJs
Front-end programming with Angular, signal acquisition from the Muse using MuseJs, BrainArt architecture

Milestone: Make an app printing out raw data from the Muse in real-time

Preparation: 
- Get started with Angular: `./workshop_2018_2019/angular_readings.md`

Materials:
- Muse Intro Exercise `./workshop_2018_2019/muse-intro.md`

### Week 5: (July 14) Convolution, Fourier Transform
Implement convolution, Fourier Transform

Materials: TBD

Preparation:
- [ANTSD Chapter 10: The Dot Product and Convolution](./workshop_2018_2019/readings/wk2-cohen2014-chap10.pdf)
- [ANTSD Chapter 11: The Discrete Time Fourier Transform, the FFT, and the Convolution Theorem](./workshop_2018_2019/readings/wk2-cohen2014-chap11.pdf)

### Week 6: (July 21) Digital Signal Processing I
Convolution, impulse responses, signal types, continuous vs discrete, aliasing, Nyquist's Theorem, FIR vs IIR, different types of filters, filter
order

Materials: TBD

Prepraration:
- [Introduction to Filters: FIR versus IIR](https://community.plm.automation.siemens.com/t5/Testing-Knowledge-Base/Introduction-to-Filters-FIR-versus-IIR/ta-p/520959)

### Week 7: (July 28) Digital Signal Processing II, Filtering Noise in Angular
Scenario-based practice of DSP I concepts, Filtering noise in Angular

Milestone: Filter data from the Muse in your app in real-time

Preparation:
- Review Week 6 material

Materials: TBD

### Week 8: (August 4) Uncovering Oscillatory Processes in EEG
What exactly is EEG, physics of EEG, oscillatory processes vs ERPs, power spectral analysis for EEG power bands

Preparation:
- Review Week 2, Week 6
- [Wait But Why: Neuralink - Brain-Machine Interfaces](https://waitbutwhy.com/2017/04/neuralink.html#part3)

Materials: TBD

### Week 9: (August 11) Advanced Git, BrainArt working session
How to use GitHub to code as a team, dev session for BrainArt (offline data)

Milestone

Preparation:
- Practicing Git branches: https://learngitbranching.js.org/

Materials: TBD

### Week 10: (August 18) BrainArt working session
Dev session for BrainArt (online with Muse)

Milestone

Preparation: TBD

Materials: TBD

### Week 11: (August 25) Present brain art!
Present brain art piece to NeurotechUofT faculty advisors, prizes, and fun!!
