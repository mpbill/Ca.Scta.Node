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
    let m = moment(timeString,"h:m a");
    return m.toDate();
};
let dayOfWeekEnumToString=function (e) {
    switch(e) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            throw "Invalid Format";
    }

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
module.exports={
    makeMeeting,
    makeMeetingTime,
    makeMeetingType,
    makeAddress,
    dayOfWeekEnum,
    dayOfWeekEnumToString,
    makeTime
};