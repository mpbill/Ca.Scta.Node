/**
 * Created by mpbil on 3/25/2017.
 */
let numberToLinkNumber=(n)=>{
    return "tel:+1" + n.areaCode + n.exchangeCode + n.subscriberNumber;
};
module.exports=numberToLinkNumber;