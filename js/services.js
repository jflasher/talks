'use strict';

angular.module('talkyApp.services', [])
.service('slideData', [function() {

    var slides = [
    {
        hero: 'this slide semi-intentionally left blank',
        cls: 'inverted'
    },{
        imgUrl: 'oil-bars.png',
        hero: 'make data look good, make people care',
        cls: 'bg-img'
    },{
        hero: 'introduction',
        imgUrl: 'america.gif',
        cls: 'bg-img inverted'
    },{
        hero: 'introduction (part 2)',
        imgUrl: 'bears-waving.gif',
        cls: 'bg-img inverted'
    },{
        quote: 'Good design is actually a lot harder to notice than poor design, in part because good design fits our needs so well that the design is invisible, serving us without drawing attention to itself. Bad design, on the other hand, screams out its inadequacies, making itself very noticable.',
        cite: '-Don Norman, "The Design of Everyday Things"',
        cls: 'bg-img inverted'
    },{
        hero: 'not covered',
        cls: 'inverted'
    },{
        imgUrl: 'viral.png'
    },{
        hero: 'the process',
        imgUrl: 'process.gif',
        cls: 'bg-img inverted'
    },{
        hero: 'goals',
        imgUrl: 'mls-goal-crop.gif',
        cls: 'bg-img inverted'
    },{
        hero: 'narrative',
        cls: 'inverted'
    },{
        imgUrl: 'code-for-dc.png'
    },{
        imgUrl: 'chicago-points.png',
        cls: 'bg-img'
    },{
        imgUrl: 'chicago-points-fit.png',
        cls: 'bg-img'
    },{
        hero: 'audience',
        imgUrl: 'audience.gif',
        cls: 'bg-img inverted'
    },{
        hero: 'delivery',
        cls: 'inverted'
    },{
        imgUrl: 'broken-mobile.png',
        cls: 'bg-img'
    },{
        decks: ['desktop vs. mobile',
          'static vs. interactive',
          'print vs. online',
          'video vs. gif vs. graphic'],
        smallImgUrl: 'devices.png',
        cls: 'bg-img'
    },{
        imgUrl: 'middle-east.png'
    },{
        imgUrl: 'middle-east-highlight.png'
    },{
        hero: 'tools',
        imgUrl: 'chart-builder.png',
        cls: 'bg-img inverted'
    },{
        hero: 'visualization',
        smallImgUrl: 'plotly-smaller.png',
        cls: 'bg-img'
    },{
        hero: 'types',
        cls: 'inverted'
    },{
        imgUrl: 'd3-examples.png'
    },{
        hero: 'perception',
        cls: 'inverted'
    },{
        decks: ['shape','size','position','color','pattern','other?'],
        imgUrl: 'rain-bros-crop.gif',
        cls: 'bg-img inverted'
    },{
        hero: 'think about colors: aesthetics, function, accesibility',
        imgUrl: 'colors.png',
        cls: 'bg-img inverted'
    },{
        hero: 'drew\'s rules #1: simple can be powerful',
        cls: 'inverted'
    },{
        smallImgUrl: 'simple-powerful-small.png'
    },{
        hero: '#2: use animation to help understanding (but not otherwise)',
        cls: 'inverted texty'
    },{
        smallImgUrl: 'stacked-to-grouped.gif'
    },{
        hero: '#3: rules are silly, prioritize your goals and narrative',
        cls: 'inverted'
    },{
        imgUrl: 'pie-chart.png'
    },{
        hero: 'maps...',
        imgUrl: 'desert.png',
        cls: 'bg-img inverted'
    },{
        hero: '...beautiful...',
        imgUrl: 'guinea-bissau.png',
        cls: 'bg-img inverted'
    },{
        hero: '...data dense...',
        imgUrl: 'data-dense-map.png',
        cls: 'bg-img inverted'
    },{
        hero: '...interactive...',
        imgUrl: 'con-datos.png',
        cls: 'bg-img inverted'
    },{
        hero: '...all three?',
        imgUrl: 'mapping-the-future.png',
        cls: 'bg-img inverted'
    },{
        imgUrl: 'nyt-maps.png'
    },{
        imgUrl: 'nyt-map-ebola.png'
    },{
        hero: 'mini-case study (and free idea)',
        cls: 'inverted'
    },{
        smallImgUrl: 'bad-choro-small.png'
    },{
        imgUrl: 'grid-wide.png'
    },{
        hero: 'case-study',
        imgUrl: 'our-analysis.png',
        cls: 'bg-img inverted'
    },{
        hero: 'now you try',
        imgUrl: 'bricks.gif',
        cls: 'bg-img inverted'
    },{
        hero: 'goals? audience? delivery?',
        marquee: 'you\'re all awesome',
        cls: 'inverted encourage'
    },{
        decks: ['d3 + bl.ocks.org/mbostock, mapbox.com',
        'plotly, dr geiger, millersville university',
        'NASA imagery (Landsat 8, MODIS)',
        'chartbuilder + atlas (by Quartz)',
        'buzzfeed, don norman, daniel savage',
        'development seed, code for dc',
        'stackexchange.com, nytimes',
        'informationisbeautiful.net/'],
        cls: 'inverted'
    },{
        hero: '@drewbo19 drew@developmentseed.org',
        imgUrl: 'cat-hat.gif',
        cls: 'bg-img inverted'
    },{
        marquee: 'the end',
        imgUrl: 'funvader.gif',
        cls: 'bg-img inverted'
    }];

    return slides;
}])

;
