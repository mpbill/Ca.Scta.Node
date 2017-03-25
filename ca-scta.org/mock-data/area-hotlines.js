/**
 * Created by mpbil on 3/25/2017.
 */
function areaHotlineConstructor(areaCode,exchangeCode,subscriberNumber,name) {
    return {
        areaCode,
        exchangeCode,
        subscriberNumber,
        name
    }
}

let areaHotlines = [
    areaHotlineConstructor("512","339","4357","Austin"),
    areaHotlineConstructor("210","232","6382","San Antonio"),
    areaHotlineConstructor("830","624","9467","Kerrville"),
    areaHotlineConstructor("956","255","2576","Valley")
];
module.exports=areaHotlines;