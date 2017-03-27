/**
 * Created by mpbil on 3/26/2017.
 */
let makeMeetingModule = require('./makeMeeting');
let dayOfWeekEnum=makeMeetingModule.dayOfWeekEnum;
let dayOfWeekEnumToString  = makeMeetingModule.dayOfWeekEnumToString;
let makeMeeting = makeMeetingModule.makeMeeting;
let makeMeetingType = makeMeetingModule.makeMeetingType;
let makeMeetingTime=makeMeetingModule.makeMeetingTime;
let makeAddress = makeMeetingModule.makeAddress;

let bbt = makeMeetingType("Big Book Topic","BBT");
let tx = "TX";

let makeCedarParkMeetings = function () {
    let ca183 = makeAddress("120 Commercial Parkway",null,null,"Cedar Park","TX","78613","CA 183","The Yellow House","https://maps.google.com/?q=120%20Commercial%20Parkway%20,%20Cedar%20Park,%20TX,%2078613");
    let ca183Meeting = makeMeeting(
        "CA 183",
        ca183,
        [
            makeMeetingTime(dayOfWeekEnum.monday,"7:30 p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.wednesday,"7:30 p",[bbt])
        ]);
    return [ca183Meeting];
};
let makeCorpusMeetings = function () {
    let corpus = "Corpus Christi";
    let studentsOfLife = makeMeeting(
        "Students of Life",
        makeAddress("3026 S Staplkes St",null,null,corpus,tx,"78404",null,null,"https://maps.google.com/?q=3026%20S%20Staples%20St%20,%20Corpus%20Christi,%20TX,%2078404"),
        [
            makeMeetingTime(dayOfWeekEnum.sunday,"12:00 p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.saturday,"1:00 p",[bbt])
        ]);
    let newFoundFreedom=makeMeeting(
        "New Found Freedom",
        makeAddress("6629 Wooldridge Rd",null,null,corpus,tx,"78414",null,null,"https://maps.google.com/?q=6629%20Wooldridge%20Rd%20,%20Corpus%20Christi,%20TX,%2078414"),
        [
            makeMeetingTime(dayOfWeekEnum.monday,"8:00 p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.thursday,"8:00 p",[bbt])
        ]
    );
    let brainOfFire = makeMeeting(
        "Brain Of Fire",
        makeAddress("3126 Rodd Field Rd",null,null,corpus,tx,"78414",null,null,"https://maps.google.com/?q=3126+Rodd+Field+Rd+Corpus+Christi+78414"),
        [
            makeMeetingTime(dayOfWeekEnum.wednesday,"8:00 p",[bbt])
        ]

    );
    return [studentsOfLife,newFoundFreedom,brainOfFire];


};
let makeFredericksburgMeetings = function () {
    let rockHounds = makeMeeting(
        "Rock Hounds",
        makeAddress("111 S Washington St",null,null,"Fredericksburg",tx,"78624",null,"At Twisted Sister Bakery","https://maps.google.com/?q=111%20S%20Washington%20St%20,%20Fredericksburg,%20TX,%2078624"),
        [
            makeMeetingTime(dayOfWeekEnum.tuesday,"11:00 a",[bbt])
        ]
    );
    return [rockHounds];
};

let makeKerrvilleMeetings=function () {
    let everythingOrNothing = makeMeeting(
        "Everything or Nothing",
        makeAddress("980 Barnette",null,null,"Kerrville",tx,"78028","720 Club",null,"https://maps.google.com/?q=980%20Barnette%20,%20Kerrville,%20TX,%2078028"),
        [
            
        ]
    )
}