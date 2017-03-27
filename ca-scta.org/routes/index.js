let express = require('express');
let router = express.Router();
let meetingLinks = require('../mock-data/meeting-pages');
let areaHotlines = require('../mock-data/area-hotlines');
let nextAreaMeeting = require('../mock-data/next-area-meeting');
let twelveStepsTraditions = require('../mock-data/twelve-steps-traditions');
let twelveTraditions = twelveStepsTraditions.twelveTraditions;
let twelveSteps = twelveStepsTraditions.twelveSteps;
let positions = require('../mock-data/positions');
let newsletters = require('../mock-data/newsletters');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CA-SCTA',meetingLinks:meetingLinks,areaHotlines:areaHotlines,nextAreaMeeting:nextAreaMeeting });
});
router.get('/contact',function (req,res,next) {
    console.log(req.url);
    res.render('contact',{title:'Contact',meetingLinks:meetingLinks,nextAreaMeeting:nextAreaMeeting,activeLink:req.url,positions:positions,hotlines:areaHotlines});
});
router.get('/twelveTraditions',function (req,res,next) {
    res.render('twelveList',{title:'12 Traditions',meetingLinks:meetingLinks,activeLink:req.url,twelveList:twelveTraditions});
});
router.get('/twelveSteps',function (req,res,next) {
    res.render('twelveList',{title:'12 Steps',meetingLinks:meetingLinks,activeLink:req.url,twelveList:twelveSteps});
});
router.get('/areaConvention',function (req,res,next) {
    res.render('areaConvention',{title:'Area Convention',meetingLinks:meetingLinks,activeLink:req.url});
});
router.get('/worldConvention',function (req,res,next) {
    res.render('worldConvention',{title:'World Convention',meetingLinks:meetingLinks,activeLink:req.url});
});
router.get('/flyers',function (req,res,next) {
    res.render('flyers',{title:'Flyers',meetingLinks:meetingLinks,activeLink:req.url});
});
router.get('/events',function (req,res,next) {
    res.render('events',{title:'Events',meetingLinks:meetingLinks,nextAreaMeeting:nextAreaMeeting,activeLink:req.url});
});
router.get('/areaResources',function (req,res,next) {
    res.render('areaResources',{title:'Area Resources',meetingLinks:meetingLinks,nextAreaMeeting:nextAreaMeeting,activeLink:req.url});
});
router.get('/hospitalsAndInstitutions',function (req,res,next) {
    res.render('hospitalsAndInstitutions',{title:'H&I',meetingLinks:meetingLinks,nextAreaMeeting:nextAreaMeeting,activeLink:req.url});
});
router.get('/newsletter',function (req,res,next) {
    res.render('newsletter',{title:'Newsletter',meetingLinks:meetingLinks,nextAreaMeeting:nextAreaMeeting,activeLink:req.url,newsletters:newsletters});
});
router.get('/meetings/:name',function (req, res, next) {
    res.render('meetings',{title:req.params.name,meetingLinks:meetingLinks,nextAreaMeeting:nextAreaMeeting,activeLink:req.url});
});
module.exports = router;
