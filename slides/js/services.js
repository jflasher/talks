'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [{
        hero: 'introduction',
        imgUrl: 'bears-waving.gif',
        cls: 'bg-img inverted'
    },{
        hero: 'our projects',
        cls: 'bg-img inverted'
    },{
        hero: 'NDI',
        imgUrl: 'ndi.png',
        cls: 'bg-img inverted'
    },{
        hero: 'Afghanistan Open Data',
        imgUrl: 'afg-data-project.png',
        cls: 'bg-img inverted'
    },{
        hero: 'Internews',
        imgUrl: 'internews.png',
        cls: 'bg-img inverted'
    },{
        hero: 'for fun',
        imgUrl: 'our-analysis.png',
        cls: 'bg-img inverted'
    },{
        hero: 'our tools',
        cls: 'bg-img inverted'
    },{
        hero: 'open by default',
        imgUrl: 'cat-opens-door-for-dog.gif',
        cls: 'bg-img inverted'
    },{
        title: 'github',
        smallImgUrl: 'octocat.png',
        cls: 'bg-img inverted'
    },{
        hero: 'R',
        imgUrl: 'R.png',
        cls: 'bg-img inverted'
    },{
        hero: 'Google Refine',
        imgUrl: 'google-refine.png',
        cls: 'bg-img inverted'
    },{
        hero: 'tabula',
        imgUrl: 'tabula.jpg',
        cls: 'bg-img inverted'
    },{
        hero: 'Python',
        imgUrl: 'python.png',
        cls: 'bg-img inverted'
    },{
        hero: 'the command line? (seriously)',
        imgUrl: 'command-line.png',
        cls: 'bg-img inverted'
    },{
        hero: 'avoid excel...',
        imgUrl: 'excel-error.gif',
        cls: 'bg-img inverted'
    },{
        hero: '...but not always',
        imgUrl: 'googledocs.png',
        cls: 'bg-img inverted'
    },{
        hero: 'but i\'m a journalist?!',
        imgUrl: 'dog-typing.gif',
        cls: 'bg-img inverted'
    },{
        hero: 'dirty data and the role of journalism',
        imgUrl: 'baby-elephant-mud.gif',
        cls: 'bg-img inverted'
    },{
        hero: 'what kind of storytelling',
        imgUrl: 'plotly.png',
        cls: 'bg-img inverted'
    },{
        marquee: 'the end',
        imgUrl: 'funvader.gif',
        cls: 'bg-img inverted'
    }];

    return slides;
}])

;
