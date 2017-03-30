/**
 * Created by mpbil on 3/27/2017.
 */


let getAllMeetingTimesForDay = function (day, meetingTimes) {
    let toReturn=null;
    meetingTimes.forEach((mt)=>{
        if(mt.day===day)
            toReturn = mt;
    });
    return toReturn;
};
module.exports=getAllMeetingTimesForDay;