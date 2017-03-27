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
let makeMeetingGroup = makeMeetingModule.makeMeetingGroup;

let bbt = makeMeetingType("Big Book Topic","BBT");
let bbs = makeMeetingType("Big Book Study","BBS");
let span = makeMeetingType("Spanish / Español","SPAN");
let wm = makeMeetingType("Women's Meeting","WM");
let spar = makeMeetingType("Speaker/Participation","SPAR");
let bm = makeMeetingType("Beginner's Meeting","BM");
let tx = "TX";

let makeCedarParkMeetings = function () {
    let name = "Cedar Park";
    let ca183 = makeAddress("120 Commercial Parkway",null,null,"Cedar Park","TX","78613","CA 183","The Yellow House","https://maps.google.com/?q=120%20Commercial%20Parkway%20,%20Cedar%20Park,%20TX,%2078613");
    let ca183Meeting = makeMeeting(
        "CA 183",
        ca183,
        [
            makeMeetingTime(dayOfWeekEnum.monday,"7:30p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.wednesday,"7:30p",[bbt])
        ]);
    let meetings =  [ca183Meeting];
    return makeMeetingGroup(name,meetings);
};
let makeCorpusMeetings = function () {
    let corpus = "Corpus Christi";
    let studentsOfLife = makeMeeting(
        "Students of Life",
        makeAddress("3026 S Staplkes St",null,null,corpus,tx,"78404",null,null,"https://maps.google.com/?q=3026%20S%20Staples%20St%20,%20Corpus%20Christi,%20TX,%2078404"),
        [
            makeMeetingTime(dayOfWeekEnum.sunday,"12:00p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.saturday,"1:00p",[bbt])
        ]);
    let newFoundFreedom=makeMeeting(
        "New Found Freedom",
        makeAddress("6629 Wooldridge Rd",null,null,corpus,tx,"78414",null,null,"https://maps.google.com/?q=6629%20Wooldridge%20Rd%20,%20Corpus%20Christi,%20TX,%2078414"),
        [
            makeMeetingTime(dayOfWeekEnum.monday,"8:00p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.thursday,"8:00p",[bbt])
        ]
    );
    let brainOfFire = makeMeeting(
        "Brain Of Fire",
        makeAddress("3126 Rodd Field Rd",null,null,corpus,tx,"78414",null,null,"https://maps.google.com/?q=3126+Rodd+Field+Rd+Corpus+Christi+78414"),
        [
            makeMeetingTime(dayOfWeekEnum.wednesday,"8:00p",[bbt])
        ]

    );
    let meetings = [studentsOfLife,newFoundFreedom,brainOfFire];
    let name=corpus;
    return makeMeetingGroup(name,meetings);


};
let makeFredericksburgMeetings = function () {
    let rockHounds = makeMeeting(
        "Rock Hounds",
        makeAddress("111 S Washington St",null,null,"Fredericksburg",tx,"78624",null,"At Twisted Sister Bakery","https://maps.google.com/?q=111%20S%20Washington%20St%20,%20Fredericksburg,%20TX,%2078624"),
        [
            makeMeetingTime(dayOfWeekEnum.tuesday,"11:00a",[bbt])
        ]
    );
    let name = "Fredericksburg";
    let meetings = [rockHounds];
    return makeMeetingGroup(name,meetings);
};
let makeKerrvilleMeetings=function () {
    let everythingOrNothing = makeMeeting(
        "Everything or Nothing",
        makeAddress("980 Barnette",null,null,"Kerrville",tx,"78028","720 Club",null,"https://maps.google.com/?q=980%20Barnette%20,%20Kerrville,%20TX,%2078028"),
        [
            makeMeetingTime(dayOfWeekEnum.tuesday,"9:30p",[bbs]),
            makeMeetingTime(dayOfWeekEnum.saturday,"9:30p",[bbt])
        ]
    );
    let meetings= [everythingOrNothing];
    let name="Kerrville";
    return makeMeetingGroup(name,meetings);
};
let makeLaredoMeetings=function(){
    let primaryPurposeGroup=makeMeeting(
        "The Primary Purpose Group",
        makeAddress("6103 Mcpherson Rd",null,null,"Laredo",tx,"78041",null,null,"https://maps.google.com/?q=6103%20Mcpherson%20Rd%20,%20Laredo,%20TX,%2078041"),
        [
            makeMeetingTime(dayOfWeekEnum.monday,"7:00p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.tuesday,"7:00p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.thursday,"7:00p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.friday,"7:00p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.saturday,"7:00p",[bbt])
        ]
    );
    let meetings = [primaryPurposeGroup];
    let name="Laredo";
    return makeMeetingGroup(name,meetings);
};
let makeMcAllenMeetings=function(){
    let librePorVida = makeMeeting(
        "Libre Por Vida",
        makeAddress("103 E Canales St",null,null,"Rio Grande City",tx,"78582",null,"The Immaculate Conception Church","https://maps.google.com/?q=103%20E%20Canales%20St%20,%20Rio%20Grande%20City,%20TX,%2078582"),
        [
            makeMeetingTime(dayOfWeekEnum.thursday,"5:00p",[span,bbt])
        ]
    )
    let readyAndWilling = makeMeeting(
        "Ready and Willing",
        makeAddress("1001 Highland Park Ave",null,null,"Mission",tx,"78572",null,null,"https://maps.google.com/?q=1001%20Highland%20Park%20Ave%20,%20Mission,%20TX,%2078572"),
        [
            makeMeetingTime(dayOfWeekEnum.tuesday,"7:30p",[bbt])
        ]
    )
    let harlingenHelp = makeMeeting(
        "Harlingen Help",
        makeAddress("514 S E St",null,null,"Harlingen",tx,"78550",null,null,"https://maps.google.com/?q=514%20S%20E%20St%20,%20Harlingen,%20TX,%2078550"),
        [
            makeMeetingTime(dayOfWeekEnum.tuesday,"6:30p",[bbt])
        ]
    );
    let meetings = [librePorVida,readyAndWilling,harlingenHelp];
    let name = "McAllen";
    return makeMeetingGroup(name,meetings);   
};
let makePharrMeetings=function(){
    let fourthDimension = makeMeeting(
        "4th Dimension Group",
        makeAddress("210 W Caffery Ave",null,null,"Pharr",tx,"78577",null,null,"https://maps.google.com/?q=210%20W%20Caffery%20Ave%20,%20Pharr,%20TX,%2078577"),
        [
            makeMeetingTime(dayOfWeekEnum.monday,"7:00p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.friday,"7:00p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.saturday,"7:00p",[bbt])
        ]
    );
    let meetings = [fourthDimension];
    let name = "Pharr";
    return makeMeetingGroup(name,meetings);
};
let makeNorthAustinMeetings=function(){
    let club101 = makeAddress("7517 Cameron Rd. #124",null,null,"Austin",tx,"78752","Club 101",null,"https://maps.google.com/?q=7517%20Cameron%20Rd.%20#124 , Austin, TX, 78752");
    let keepItSimple = makeMeeting(
        "Keep It Simple",
        club101,
        [
            makeMeetingTime(dayOfWeekEnum.monday,"12:15p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.tuesday,"12:15p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.wednesday,"12:15p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.thursday,"12:15p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.friday,"12:15p",[bbt]),
        ]
    );
    let stepSisters = makeMeeting(
        "Step Sisters",
        club101,
        [
            makeMeetingTime(dayOfWeekEnum.friday,"7:30p",[wm,bbt])
        ]
    );
    let happyHour = makeMeeting(
        "Happy Hour",
        club101,
        [
            makeMeetingTime(dayOfWeekEnum.friday,"6:10p",[bbt])
        ]
    );
    let theTruth = makeMeeting(
        "The Truth, The Light, and the Way II",
        club101,
        [
            makeMeetingTime(dayOfWeekEnum.sunday,"12:00p",[spar])
        ]
    );
    let aVisionForYou = makeMeeting(
        "A Vision For You",
        club101,
        [
            makeMeetingTime(dayOfWeekEnum.monday,"7:30p",[bbs])
        ]
    );
    let stepBrothersAndStepSisters=makeMeeting(
        "Step Brothers & Step Sisters",
        club101,
        [
            makeMeetingTime(dayOfWeekEnum.tuesday,"7:30p",[bbt,bm])
        ]
    );
    let primaryPurpose=makeMeeting(
        "Primary Purpose",
        club101,
        [
            makeMeetingTime(dayOfWeekEnum.wednesday,"7:30p",[bbt])
        ]
    );
    let recoveryText=makeMeeting(
        "Recovery Text",
        club101,
        [
            makeMeetingTime(dayOfWeekEnum.thursday,"7:30p",[bbt])
        ]
    );
    let solutionSeekers=makeMeeting(
        "Solution Seekers",
        club101,
        [
            makeMeetingTime(dayOfWeekEnum.saturday,"7:30p",[bbt])
        ]
    )
    let boiled=makeMeeting(
        "Boiled As An Owl",
        makeAddress("4110 Guadalupe #635",null,null,"Austin",tx,"78751","Austin State Hospital","On ASH Campus","https://www.google.com/maps/place/Austin+State+Hospital/@30.3075558,-97.7392488,17z/data=!3m1!4b1!4m5!3m4!1s0x8644ca7b5e08765d:0x9fc9d8f4f87a0167!8m2!3d30.3075558!4d-97.7370548"),
        [
            makeMeetingTime(dayOfWeekEnum.friday,"7:30p",[bbt])
        ]
    );
    let desperatelyDivine=makeMeeting(
        "Desperately Devine",
        makeAddress("1818 E 12th St",null,null,"Austin",tx,"78702",null,null,"https://www.google.com/maps/place/1818+E+12th+St,+Austin,+TX+78702"),
        [
            makeMeetingTime(dayOfWeekEnum.tuesday,"7:00p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.thursday,"7:00p",[bbt]),
        ]
    );
    let dropKickRocks=makeMeeting(
        "Drop Kick Rocks",
        makeAddress("1000 Prairie Trail",null,null,"Austin",tx,"78758",null,null,""),
        [
            makeMeetingTime(dayOfWeekEnum.sunday,"10:00a",[bbt])
        ]
    );
    let meetings = [
        keepItSimple,
        stepSisters,
        happyHour,
        theTruth,
        aVisionForYou,
        stepBrothersAndStepSisters,
        primaryPurpose,
        recoveryText,
        solutionSeekers,
        boiled,
        desperatelyDivine,
        dropKickRocks
    ];
    let name = "North Austin";
    return makeMeetingGroup(name,meetings);
};
let makeSouthAustinMeetings=function(){
    let austin = "Austin";
    let cAndT = makeMeeting(
        "Circle & Triangle",
        makeAddress("4430 Manchaca Rd",null,null,austin,tx,"78745",null,null,"https://maps.google.com/?q=4430%20Manchaca%20Rd%20,%20Austin,%20TX,%2078745"),
        [
            makeMeetingTime(dayOfWeekEnum.monday,"7:30p",[bm]),
            makeMeetingTime(dayOfWeekEnum.friday,"7:30p",[bm])
        ]
    );
    let heartAndSoulSisters = makeMeeting(
        "Heart & Soul Sisters",
        makeAddress("4600 Manchaca Rd",null,null,austin,tx,"78745",null,null,"https://maps.google.com/?q=4600%20Manchaca%20Rd%20,%20Austin,%20TX,%2078745"),
        [
            makeMeetingTime(dayOfWeekEnum.wednesday,"6:15p",[wm,bbt])
        ]
    );
    let basicInstincts = makeMeeting(
        "Basic Instincts",
        makeAddress("4430 Manchaca Rd",null,null,austin,tx,"78745",null,null,"https://maps.google.com/?q=4430%20Manchaca%20Rd%20,%20Austin,%20TX,%2078745"),
        [
            makeMeetingTime(dayOfWeekEnum.wednesday,"7:00p",[bbt])
        ]
    );
    let squarePegs = makeMeeting(
        "Square Pegs",
        makeAddress("4430 Manchaca Rd",null,null,austin,tx,"78745",null,null,"https://maps.google.com/?q=4430%20Manchaca%20Rd%20,%20Austin,%20TX,%2078745"),
        [
            makeMeetingTime(dayOfWeekEnum.thursday,"7:30p",[bbt])
        ]
    );
    let meetings= [
        cAndT,
        heartAndSoulSisters,
        basicInstincts,
        squarePegs
    ];
    let name="South Austin";
    return makeMeetingGroup(name,meetings);
}
let makeRoundRockMeetings=function(){
    let ageOfMiracles=makeMeeting(
        "Age Of Miracles",
        makeAddress("4010 Sam Bass Road",null,null,"Round Rock",tx,"78681",null,null,"https://maps.google.com/?q=4010%20Sam%20Bass%20Road%20,%20Round%20Rock,%20TX,%2078681"),
        [
            makeMeetingTime(dayOfWeekEnum.saturday,"6:00p",[bbt])
        ]
    );
    let meetings = [
        ageOfMiracles
    ];
    let name = "Round Rock";
    return makeMeetingGroup(name,meetings);
};
let makeSanAntonioMeetings=function(){
    let sanAntonio="San Antonio";
    let fourthDimension=makeMeeting(
        "Fourth Dimension Group",
        makeAddress("7400 Blanco Road",null,null,sanAntonio,tx,"78216",null,null,"https://www.google.com/maps/place/7400+Blanco+Rd,+San+Antonio,+TX+78216/data=!4m2!3m1!1s0x865c600d67b667df:0x539fe58c679fe2d7?sa=X&ved=0ahUKEwifh73YzLPPAhUp74MKHScCC8IQ8gEIIjAB"),
        [
            makeMeetingTime(dayOfWeekEnum.sunday,"5:30p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.monday,"5:30p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.tuesday,"5:30p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.wednesday,"5:30p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.thursday,"5:30p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.saturday,"5:30p",[bbt])
        ]
    );
    let caDowntown=makeMeeting(
        "CA Downtown",
        makeAddress("319 Camden Street",null,null,sanAntonio,tx,"78215",null,null,"https://www.google.com/maps/place/319+Camden+St,+San+Antonio,+TX+78215/@9.4350192,-98.4940697,17z/data=!3m1!4b1!4m5!3m4!1s0x865c5f50f2102ad1:0xdfa228eec89a3007!8m2!3d29.4350192!4d-98.491881"),
        [
            makeMeetingTime(dayOfWeekEnum.monday,"7:00p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.wednesday,"7:00p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.thursday,"7:00p",[bbt]),
            makeMeetingTime(dayOfWeekEnum.friday,"7:00p",[bbt])
        ]
    );
    let courageToChange=makeMeeting(
        "Courage To Change",
        makeAddress("1 Haven for Hope Way",null,null,sanAntonio,tx,"78207",null,null,"https://www.google.com/maps/place/1+Haven+for+Hope+Way,+San+Antonio,+TX+78207/@29.432937,-98.5083549,17z/data=!3m1!4b1!4m5!3m4!1s0x865c5f49d5524f4b:0x770880b041651b82!8m2!3d29.432937!4d-98.5061662"),
        [
            makeMeetingTime(dayOfWeekEnum.monday,"6:15p",[bbt])
        ]
    );
    let meetings= [
        fourthDimension,
        caDowntown,
        courageToChange
    ];
    let name=sanAntonio;
    return makeMeetingGroup(name,meetings);
};
let makeUniversalCityMeetings=function(){
    let newFreedomGroup=makeMeeting(
        "New Freedom Group",
        makeAddress("1129 Pat Booker Rd",null,null,"Universal City",tx,"78148",null,"In The Church","https://maps.google.com/?q=1129%20Pat%20Booker%20Rd%20,%20Universal%20City,%20TX,%2078148"),
        [
            makeMeetingTime(dayOfWeekEnum.monday,"6:00p",[bbt])
        ]
    );
    let meetings = [newFreedomGroup];
    let name="Universal City";
    return makeMeetingGroup(name,meetings);
};

let makeMeetingFunctions=[
    makeCedarParkMeetings,
    makeCorpusMeetings,
    makeFredericksburgMeetings,
    makeKerrvilleMeetings,
    makeLaredoMeetings,
    makeMcAllenMeetings,
    makePharrMeetings,
    makeNorthAustinMeetings,
    makeSouthAustinMeetings,
    makeRoundRockMeetings,
    makeSanAntonioMeetings,
    makeUniversalCityMeetings
];
let allMeetingGroupNames=[];
let allMeetingGroups={};
makeMeetingFunctions.forEach(function(value){
    let meetingGroup = value();
    allMeetingGroups[meetingGroup.name]=meetingGroup;
    allMeetingGroupNames.push({id:meetingGroup.id,name:meetingGroup.name});
});

let getMeetingGroupByName=function(name){    
    let group = allMeetingGroups[name];    
    return group;
}
let getAllMeetingGroupNames=function(){
    return allMeetingGroupNames;
}
module.exports={
    getMeetingGroupByName,
    getAllMeetingGroupNames
};
