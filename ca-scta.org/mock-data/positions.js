/**
 * Created by mpbil on 3/25/2017.
 */

let i=0;
function makePosition(positionName,volunteerName,positionEmail) {
    i++;
    return {
        id:i,
        positionName,
        volunteerName,
        positionEmail
    };
}


const positions = [
    makePosition("Chair","Cindy C.","chair@ca-scta.org"),
    makePosition("Vice-Chair","Lori P.","vice-chair@ca-scta.org"),
    makePosition("Secretary","Tammy L.","secretary@ca-scta.org"),
    makePosition("Treasurer","Jane B.","treasurer@ca-scta.org"),
    makePosition("Delegate A","Debbi S.","delegate-a@ca-scta.org"),
    makePosition("Delegate B","Jessi G.","delegate-b@ca-scta.org"),
    makePosition("Delegate C","Natalie L.","delegate-c@ca-scta.org"),
    makePosition("Alternate Delegate","Zach A.","delegate-alt@ca-scta.org"),
    makePosition("Literature Chair","Patti.","chipsandlit@ca-scta.org"),
    makePosition("SCTA Convention Chair","Bea B.","convention@ca-scta.org"),
    makePosition("Hospitals & Institutions Chair","Travis D.","handi@ca-scta.org"),
    makePosition("Hotline Chair","Vacant","hotline@ca-scta.org"),
    makePosition("Internet Chair","Michael B.","internet@ca-scta.org"),
    makePosition("Newsletter Chair","Vacant","newsletter@ca-scta.org"),
    makePosition("Public Information Chair","Alex Z.","public-info@ca-scta.org"),
    makePosition("Structures and Bylaws Chair","Kiersten A.","structures@ca-scta.org"),
    makePosition("Unity Chair","Stacie B.","unity@ca-scta.org"),
    makePosition("Archives Chair","Liz T.","archives@ca-scta.org")
];
module.exports = positions;