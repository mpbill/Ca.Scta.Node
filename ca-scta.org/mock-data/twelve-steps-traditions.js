
let i=0;
let makeStepTradItem=function (sOrT,n,text) {
    i++;
    return {
        text:text,
        number:n,
        id:i,
        sOrT:sOrT
    }
};
const sOrT = {
    step:0,
    tradition:1,
    concept:2
};

const twelveSteps ={
    title:'The Twelve Steps Of Cocaine Anonymous',
    items:[
        makeStepTradItem(sOrT.step,1,"We admitted we were powerless over cocaine and all other mind altering substances and that our lives had become unmanageable."),
        makeStepTradItem(sOrT.step,2,"Came to believe that a Power greater than ourselves could restore us to sanity."),
        makeStepTradItem(sOrT.step,3,"Made a decision to turn our will and our lives over to the care of God, <em>as we understood him.</em>"),
        makeStepTradItem(sOrT.step,4,"Made a searching and fearless moral inventory of ourselves."),
        makeStepTradItem(sOrT.step,5,"Admitted to God, to ourselves, and to another human being the exact nature of our wrongs."),
        makeStepTradItem(sOrT.step,6,"Were entirely ready to have God remove all these defects of character."),
        makeStepTradItem(sOrT.step,7,"Humbly asked Him to remove our shortcomings."),
        makeStepTradItem(sOrT.step,8,"Made a list of all persons we had harmed, and became willing to make amends to them all."),
        makeStepTradItem(sOrT.step,9,"Made direct amends to such people wherever possible, except when to do so would injure them or others."),
        makeStepTradItem(sOrT.step,10,"Continued to take personal inventory and when we were wrong promptly admitted it."),
        makeStepTradItem(sOrT.step,11,"Sought through prayer and meditation to improve our conscious contact with God <em>as we understood him</em>, praying only for knowledge of His will for us and the power to carry that out."),
        makeStepTradItem(sOrT.step,12,"Having had a spiritual awakening as the result of these steps, we tried to carry this message to addicts, and to practice these principles in all our affairs")
    ]
};
const twelveTraditions= {
    title:"The Twelve Traditions Of Cocaine Anonymous",
    items:[
       makeStepTradItem(sOrT.tradition,1,"Our common welfare should come first; personal recovery depends upon C.A. unity."),
       makeStepTradItem(sOrT.tradition,2,"For our group purpose there is but one ultimate authority, a loving God as He may express Himself in our group conscience. Our leaders are but trusted servants; they do not govern."),
       makeStepTradItem(sOrT.tradition,3,"The only requirement for C.A. membership is a desire to stop using cocaine and all other mind-altering substances."),
       makeStepTradItem(sOrT.tradition,4,"Each group should be autonomous except in matters affecting other groups or C.A. as a whole."),
       makeStepTradItem(sOrT.tradition,5,"Each group has but one primary purpose, to carry its message to the addict who still suffers."),
       makeStepTradItem(sOrT.tradition,6,"A C.A. group ought never endorse, finance, or lend the C.A. name to any related facility or outside enterprise, lest problems of money, property and prestige divert us from our primary purpose."),
       makeStepTradItem(sOrT.tradition,7,"Every C.A. group ought to be fully self-supporting, declining outside contributions."),
       makeStepTradItem(sOrT.tradition,8,"Cocaine Anonymous should remain forever non-professional, but our service centers may employ special workers."),
       makeStepTradItem(sOrT.tradition,9,"C.A., as such, ought never be organized; but we may create service boards or committees directly responsible to those they serve."),
       makeStepTradItem(sOrT.tradition,10,"Cocaine Anonymous has no opinion on outside issues; hence the C.A. name ought never be drawn into public controversy."),
       makeStepTradItem(sOrT.tradition,11,"Our public relations policy is based on attraction rather than promotion; we need always maintain personal anonymity at the level of press, radio, television and films."),
       makeStepTradItem(sOrT.tradition,12,"Anonymity is the spiritual foundation of all our Traditions, ever reminding us to place principles before personalities.")
    ]
};
module.exports={
    twelveSteps:twelveSteps,
    twelveTraditions:twelveTraditions
};