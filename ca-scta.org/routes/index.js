let express = require('express');
let router = express.Router();
let areaHotlines = require('../mock-data/area-hotlines');
let nextAreaMeeting = require('../mock-data/next-area-meeting');
let twelveStepsTraditions = require('../mock-data/twelve-steps-traditions');
let twelveTraditions = twelveStepsTraditions.twelveTraditions;
let twelveSteps = twelveStepsTraditions.twelveSteps;
let meetingsModule = require('../mock-data/meetings/meetings');
let positions = require('../mock-data/positions');
let newsletters = require('../mock-data/newsletters');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CA-SCTA',areaHotlines:areaHotlines,nextAreaMeeting:nextAreaMeeting,meetingGroupNames:meetingsModule.getAllMeetingGroupNames()});
});
router.get('/contact',function (req,res,next) {
    console.log(req.url);
    res.render('contact',{title:'Contact',nextAreaMeeting:nextAreaMeeting,activeLink:req.url,positions:positions,hotlines:areaHotlines,meetingGroupNames:meetingsModule.getAllMeetingGroupNames()});
});
router.get('/twelveTraditions',function (req,res,next) {
    res.render('twelveList',{title:'12 Traditions',activeLink:req.url,twelveList:twelveTraditions,meetingGroupNames:meetingsModule.getAllMeetingGroupNames()});
});
router.get('/twelveSteps',function (req,res,next) {
    res.render('twelveList',{title:'12 Steps',activeLink:req.url,twelveList:twelveSteps,meetingGroupNames:meetingsModule.getAllMeetingGroupNames()});
});
router.get('/areaConvention',function (req,res,next) {
    res.render('areaConvention',{title:'Area Convention',activeLink:req.url,meetingGroupNames:meetingsModule.getAllMeetingGroupNames()});
});
router.get('/worldConvention',function (req,res,next) {
    res.render('worldConvention',{title:'World Convention',activeLink:req.url,meetingGroupNames:meetingsModule.getAllMeetingGroupNames()});
});
router.get('/flyers',function (req,res,next) {
    res.render('flyers',{title:'Flyers',activeLink:req.url});
});
router.get('/events',function (req,res,next) {
    res.render('events',{title:'Events',nextAreaMeeting:nextAreaMeeting,activeLink:req.url,meetingGroupNames:meetingsModule.getAllMeetingGroupNames()});
});
router.get('/areaResources',function (req,res,next) {
    res.render('areaResources',{title:'Area Resources',nextAreaMeeting:nextAreaMeeting,activeLink:req.url,meetingGroupNames:meetingsModule.getAllMeetingGroupNames()});
});
router.get('/hospitalsAndInstitutions',function (req,res,next) {
    res.render('hospitalsAndInstitutions',{title:'H&I',nextAreaMeeting:nextAreaMeeting,activeLink:req.url,meetingGroupNames:meetingsModule.getAllMeetingGroupNames()});
});
router.get('/newsletter',function (req,res,next) {
    res.render('newsletter',{title:'Newsletter',nextAreaMeeting:nextAreaMeeting,activeLink:req.url,newsletters:newsletters,meetingGroupNames:meetingsModule.getAllMeetingGroupNames()});
});
router.get('/meetings/:name',function (req, res, next) {
    res.render('meetings',{title:req.params.name,nextAreaMeeting:nextAreaMeeting,activeLink:req.url,meetingGroupNames:meetingsModule.getAllMeetingGroupNames(),meetingGroup:meetingsModule.getMeetingGroupByName(req.params.name)});
});
module.exports = router;
