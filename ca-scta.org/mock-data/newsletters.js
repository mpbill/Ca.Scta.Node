/**
 * Created by mpbil on 3/25/2017.
 */
let i=0;
let makeNewsletter = function (name,link) {
    i++;
    return {
        name:name,
        link:link,
        id:i
    }
};

let newsletters=[
    makeNewsletter("Spring 2016","http://content.ca-scta.org/Newsletter/The%20PiplineNov2015-Feb2016.pdf"),
    makeNewsletter("Fall 2015","http://content.ca-scta.org/Newsletter/ThePipelineAugust2015.pdf"),
    makeNewsletter("Summer 2015","http://content.ca-scta.org/Newsletter/The%20Pipeline%20(March%202015).pdf"),
    makeNewsletter("Winter 2014","http://content.ca-scta.org/Newsletter/The%20PipelineFlyerWinter2014.pdf"),
    makeNewsletter("Summer 2014","http://content.ca-scta.org/Newsletter/The%20PipelineFlyerSummer2014.pdf"),
    makeNewsletter("Winter 2013","http://content.ca-scta.org/Newsletter/ThePipelineFlyerwinter2013.pdf"),
    makeNewsletter("Fall 2012","http://content.ca-scta.org/Newsletter/FallPipelineNewsletter2012.pdf"),
    makeNewsletter("Summer 2012","http://content.ca-scta.org/Newsletter/Summer2012PipelineNewsletter.pdf"),
    makeNewsletter("Spring 2012","http://content.ca-scta.org/Newsletter/Spring%202012%20CA%20Newsletter.pdf"),
    makeNewsletter("Summer 2010","http://content.ca-scta.org/Newsletter/Summer%20Newsletter.pdf"),
    makeNewsletter("April 2010","http://content.ca-scta.org/Newsletter/CA%20apr%202010%20NEWSLETTER.pdf"),
    makeNewsletter("Febuary 2010","http://content.ca-scta.org/Newsletter/CA%20FEB%202010%20NEWSLETTER.pdf"),
    makeNewsletter("November 2008","http://content.ca-scta.org/Newsletter/Newsletter-11-08.pdf"),
    makeNewsletter("September 2008","http://content.ca-scta.org/Newsletter/Newsletter_0908.pdf"),
    makeNewsletter("November 2007","http://content.ca-scta.org/Newsletter/The_Pipeline_1107.pdf"),
    makeNewsletter("September 2005","http://content.ca-scta.org/Newsletter/2005-09-Newsletter.pdf"),
    makeNewsletter("April 2005","http://content.ca-scta.org/Newsletter/2005-04-Newsletter.pdf"),
    makeNewsletter("November 2004","http://content.ca-scta.org/Newsletter/2004-11-Newsletter.pdf"),
    makeNewsletter("July 2004","http://content.ca-scta.org/Newsletter/2004-07-Newsletter.pdf")
];
module.exports=newsletters;