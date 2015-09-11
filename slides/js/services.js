'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [
    {
        hero: 'this slide semi-intentionally left blank',
        cls: 'inverted'
    },{
        imgUrl: 'soup.gif',
        hero: 'Opening Your Data: a Goldilocks Problem',
        cls: 'bg-img'
    },{
        hero: 'introduction',
        imgUrl: 'bears-waving.gif',
        cls: 'bg-img inverted'
    },{
        bullets: ['1. csv', '2. static api', '3. "real" api'],
        cls: 'bg-img inverted'
    },{
        hero: 'csv',
        imgUrl: 'csv.png',
        cls: 'bg-img inverted'
    },{
        hero: 'static api',
        imgUrl: 'static-api.png',
        cls: 'bg-img inverted'
    },{
        hero: 'real api',
        imgUrl: 'api.png',
        cls: 'bg-img inverted'
    },{
        marquee: 'the end',
        imgUrl: 'funvader.gif',
        cls: 'bg-img inverted'
    }];

    return slides;
}])

;
