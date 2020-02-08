# Intro to Neurotech: 2019/2020
Make artwork representing your brain with the Muse EEG headband, and learn about neurotech in the process!

## Format
Lecturing is boring! Instead, we want pairs of students to work towards the final brain-art project. Pairs will go through each week's notebook, and fill in the code and run it. Mentors will be available to help the pairs debug or understand the overall concepts better.

This is going to be a cross of our workshops from 2017-2018 and our initial Prezi workshops, but with less emphasis on hardware and more emphasis on sofware techniques and the brain.

**NOTE**: This course is extensive! We're teaching a lot of material, and some can be quite advanced... But we are here to guide you throughout the entire process, so if you feel lost at any point don't worry! Just come to HackTernoons or office hours and we'll learn it together :)

**NOTE 2**: We're trying to introduce you to a lot of crazy things in the span of 2 semesters! This means we have to rely on readings to prep you for each week's workshop. **Please make sure to do the mandatory readings** and any **mandatory prep noted** before you come to the workshop, as it will make understanding the material infinitely easier :)


## Textbook
There is no official textbook for this course; however Week 10 will rely on ***Analyzing Neural Time Series Data*** by Mike Cohen. You can find the book through [the UofT Library system](http://cognet.mit.edu.myaccess.library.utoronto.ca/book/analyzing-neural-time-series-data).

### (To sync this version of workshops with your version, follow the instructions in this link!)
https://www.sitepoint.com/quick-tip-sync-your-fork-with-the-original-without-the-cli/

## Milestones
As you go through the workshop, you'll essentially be working on a mini-project and these milestones will give you a way to judge how far along you've come:

Milestone 1: Make an app printing out raw data from the Muse in real-time

Milestone 2: Filter data from the Muse in your app in real-time

Milestone 3: Design, implement, and verify EEG interpretation algorithm on pre-collected data in Python

Milestone 4: Implement and verify real-time EEG interpretation algorithm in Angular

## Syllabus:
*(For details, scroll down to "Weekly Details")*

### Week 1: (September 30) Intro to Python
Absolute basics of programming

### Week 2: (October 7) Problem Solving with Code
Some programming, problem solving practice

### Week 3: (October 21) Conda, Git, Terminal - Jun Wei, Nizar

### Week 4: (October 27) Loading and Graphing Data, Noise Filtering
How to load data from CSVs (or FIFs), graphing data with MatPlotLib, filtering noise, and an introduction to the Fast Fourier Transform.

### NOVEMBER 4-8: Reading Week

### Week 5: (November 11) CONNEXION

### Week 6: (November 18) Noise Filtering (continued)
Finishing up exercise 2 on noise filtering from Week 4.

### Week 7: (November 25) Intro to Angular

### DECEMBER 2-JANUARY 6: EXAM BREAK

### Week 8: (January 6) Intro to Neuroscience
History, how neurons work (brief intro), neuroanatomy review, Rall's cable theory, membrane potential (Nernst, GHK, HH equations).

### Week 9: (January 13) Intro to MuseJs, Milestone 1
Front-end programming with Angular, signal acquisition from the Muse using MuseJs, BrainArt architecture, complete BrainArt Milestone 1.

### Week 10: (January 20) Convolution, Fourier Transform
Lecture about convolution, Discrete Fourier Transform.

### Week 11: (January 27) Digital Signal Processing I
Convolution, impulse responses, signal types, continuous vs discrete, aliasing, Nyquist's Theorem, FIR vs IIR, different types of filters, filter order.

### Week 12: (February 3) Digital Signal Processing II, Milestone 2
Scenario-based practice of DSP I concepts, complete BrainArt Milestone 2.

### Week 13: (February 10) Uncovering Oscillatory Processes in EEG
What exactly is EEG, physics of EEG, oscillatory processes vs ERPs, power spectral analysis for EEG power bands.

### FEBRUARY 17-21: READING WEEK

### Week 14: (Febuary 24) BrainArt working session
Dev session for BrainArt (offline data), complete BrainArt Milestone 3.

### Week 15: (March 2) BrainArt working session, Milestone 3

### MARCH 16: BREAK

### Week 16: (March 23) BrainArt working session, Milestone 4
Dev session for BrainArt (online with Muse), complete BrainArt Milestone 4.

### Week 17: (March 30) Present brain art!
Present brain art piece to NeurotechUofT faculty advisors, prizes, and fun!!


## Weekly Details
### Week 1: (September 30) Intro to Python
Absolute basics of programming

Materials:
- learn Python! http://bit.ly/ntuoft-workshop-2

### Week 2: (October 7) Problem Solving with Code
Some programming, problem solving practice

Preparation:
- [Wait But Why: Neuralink - The Human Colossus](https://waitbutwhy.com/2017/04/neuralink.html#part1)
- Practice Python (30 mins per day): https://codecombat.com/

Materials:
- Practice Python problems: https://leetcode.com/problemset/all/

### Week 3: (October 21) Git, Conda, Terminal

Getting Set Up:
- [Git](https://github.com/neurotechuoft/Workshops/blob/master/workshop_2018_2019/git_workshop.md)
- [Conda](https://github.com/neurotechuoft/Workshops/blob/master/workshop_2018_2019/Conda_setup.md)

### Week 4: (October 28) Intro to Graphing
Importing and visualizing EEG data

Complete [Exercise 1](https://github.com/neurotechuoft/Workshops/blob/master/workshop_2018_2019/notebooks/exercises/wk2a_data_collection.ipynb)

### Week 6: (November 18) Intro to Noise Filtering
A continuation of Week 4, filtering EEG data for noise reduction

Complete [Exercise 2](https://github.com/neurotechuoft/Workshops/blob/master/workshop_2018_2019/notebooks/exercises/wk2b_intro_to_signal_processing.ipynb)

### Week 7: (November 25) Intro to Angular
Learning to make a simple web app

Preparation:
- [Set up Angular](https://github.com/neurotechuoft/Workshops/blob/master/workshop_2018_2019/angular_readings.md)
- Go through [SoloLearn's JavaScript tutorial](https://www.sololearn.com/play/javascript) up to Conditionals & Loops and Functions: If you already know the material up to this point, then "Take a Shortcut" and complete Objects and Core Objects
- Go through [SoloLearn's HTML tutorial](https://www.sololearn.com/play/html) until you have completed HTML Basics. Already know HTML? Test your knowledge by selecting "Take a Shortcut" and go back to any sections you missed questions on

Materials:
- [Video tutorial](https://youtube.com/watch?v=_TLhUCjY9iA)
- [Text tutorial](https://coursetro.com/posts/code/174/Angular-8-Tutorial-&-Crash-Course)

Cheatsheets:
- [HTML](https://htmlcheatsheet.com)
- [CSS](https://htmlcheatsheet.com/css)
- [JavaScript](https://htmlcheatsheet.com/js)
- [TypeScript](https://www.sitepen.com/blog/typescript-cheat-sheet)

### Week 8: (January 6) Intro to Neuroscience
Including neuronatomy and history

Preparation:
- Read about the concept of the [Human Colossus](https://waitbutwhy.com/2017/04/neuralink.html#part1) — as explained through a series of comics! (I promise, it's an entertaining read)
- Read this [introduction to the brain](https://waitbutwhy.com/2017/04/neuralink.html#part2) (up until "Part 3", exclusive) — a continuation of the above reading

Materials:
- [History of Neuroscience](https://prezi.com/view/RdfcOLXBP5OGB31zeFbt)
- [Neuroanatomy](https://prezi.com/view/x5Wa2d2EKLPrAFFkhRNt)

### Week 9: (January 13) Intro to MuseJs
Using our skills in Angular to make an app that prints out data acquired from a Muse headset in real-time

Preparation:
- Review [Week 7](https://github.com/neurotechuoft/Workshops#week-7-november-25-intro-to-angular-1)

Materials: 
- [Intro to MuseJs](https://github.com/neurotechuoft/Workshops/blob/master/workshop_2018_2019/muse-intro.md)

### Week 10: (January 20) Convolution, Fourier Transform

Preparation:
- Chapters 10 and 11 of <i> Analyzing Neural Time Series Data </i> (available through [UofT Library System](http://cognet.mit.edu.myaccess.library.utoronto.ca/book/analyzing-neural-time-series-data))
    - [Chapter 10: The Dot Product and Convolution](http://cognet.mit.edu.myaccess.library.utoronto.ca/pdfviewer/book/9780262319553/chap10)
    - [Chapter 11: The Discrete Time Fourier Transform, the FFT, and the Convolution Theorem](http://cognet.mit.edu.myaccess.library.utoronto.ca/pdfviewer/book/9780262319553/chap11)

### Week 11: (January 27) Digital Signal Processing I
Convolution, impulse responses, signal types, continuous vs discrete, aliasing, Nyquist's Theorem, FIR vs IIR, different types of filters, filter order.

Prepraration:
- [Introduction to Filters: FIR versus IIR](https://community.plm.automation.siemens.com/t5/Testing-Knowledge-Base/Introduction-to-Filters-FIR-versus-IIR/ta-p/520959)
- Review [Week 10](https://github.com/neurotechuoft/Workshops#week-10-january-20-convolution-fourier-transform-1)

Materials: 
- [Lecture](https://github.com/neurotechuoft/Workshops/blob/master/workshop_2018_2019/notes/Workshop6.pdf)

### Week 12: (February 3) Digital Signal Processing II
Scenario-based practice of DSP I concepts, complete BrainArt Milestone 2

Preparation:
- Review [Week 10](https://github.com/neurotechuoft/Workshops#week-10-january-20-convolution-fourier-transform-1) & [Week 11](https://github.com/neurotechuoft/Workshops#week-11-january-27-digital-signal-processing-i-1)

Materials:
- [Lecture](https://github.com/neurotechuoft/Workshops/blob/master/workshop_2018_2019/notes/Workshop6.pdf)

### Week 13: (February 10) Uncovering Oscillatory Processes in EEG
What exactly is EEG, physics of EEG, oscillatory processes vs ERPs, power spectral analysis for EEG power bands.

Preparation:
- [Wait But Why: Neuralink - Brain-Machine Interfaces](https://waitbutwhy.com/2017/04/neuralink.html#part3)
- Review [Week 8](https://github.com/neurotechuoft/Workshops#week-8-january-6-intro-to-neuroscience-1) and [Week 11](https://github.com/neurotechuoft/Workshops#week-11-january-27-digital-signal-processing-i-1)

Materials:
- [Lecture](https://github.com/neurotechuoft/Workshops/blob/master/workshop_2018_2019/notes/Workshop8.pdf)