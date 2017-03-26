/**
 * Created by mpbil on 3/25/2017.
 */
let numberToPrettyNumber=(n)=>{
    return "(" + n.areaCode + ")" + " " + n.exchangeCode + "-" + n.subscriberNumber;
};
module.exports=numberToPrettyNumber;