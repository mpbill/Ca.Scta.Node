/**
 * Created by mpbil on 3/26/2017.
 */
let meetingId=0;
let addressId=0;
let meetingTimeId=0;
let meetingTypeId=0;
let moment = require('moment');
const dayOfWeekEnum={
    sunday:0,
    monday:1,
    tuesday:2,
    wednesday:3,
    thursday:4,
    friday:5,
    saturday:6
};
let makeTime = function (timeString) {
    let m = moment(timeString,"h:mma");
    return m.toDate();
};
let makeAddress=function(street1,street2,street3,city,state,zip,name,description,mapLink){
    addressId++;
    return {
        id:addressId,
        street1:street1,
        street2:street2,
        street3:street3,
        city:city,
        state:state,
        zipCode:zip,
        name:name,
        description:description,
        mapLink:mapLink
    }
};
let makeMeetingType=function (name,abbreviation) {
    meetingTypeId++;
    return {
        id:meetingTypeId,
        name:name,
        abbreviation:abbreviation
    }
};
let makeMeetingTime=function (day,time,meetingTypes) {
    meetingTimeId++;
    return {
        day:day,
        time:makeTime(time),
        meetingTypes:meetingTypes
    }
};
let makeMeeting=function (name,address,meetingTimes) {
    meetingId++;
    return {
        id:meetingId,
        name:name,
        address:address,
        meetingTimes:meetingTimes
    }
};
let meetingGroupId=0;
let makeMeetingGroup=function(name,meetings){
    meetingGroupId++;
    return {
        id:meetingGroupId,
        name:name,
        meetings:meetings
    }
}
module.exports={
    makeMeeting,
    makeMeetingTime,
    makeMeetingType,
    makeAddress,
    dayOfWeekEnum,
    makeTime,
    makeMeetingGroup
};