let React = require('react');
let Layout = require('./layout');


class AreaConvention extends React.Component{
    render(){
        let aditionalScripts=["/javascripts/convention-clock.js"];
        let additionalStyles =["/stylesheets/timer.css"];
        return (
            <Layout title={this.props.title} meetingLinks={this.props.meetingLinks} activeLink={this.props.activeLink} additionalScripts={aditionalScripts} additionalStyles={additionalStyles}>
                <div className="jumbotron">
                    <div className="well">
                        <h2>SCTA Area Convention</h2>
                        <h2>October 6<sup>th</sup> - 8<sup>th</sup> 2017</h2>

                        <h2><a href="https://www.google.com/maps/place/Y.O.+Ranch+Hotel/%4030.0656969,-99.1188923,17z/data=!3m1!4b1!4m5!3m4!1s0x865be37169e2861b:0x7e642eeafd36f3c1!8m2!3d30.0656969!4d-99.1167036">Y.O. Ranch Hotel Kerrville, TX 78028</a></h2>
                        <h2><a href="https://reservations.travelclick.com/12007?groupID=1748960">Reserve a room online</a></h2>
                        <p>Or call 877-967-3767 toll free and ask for SCTA - COCAINE ANONYMOUS</p>
                    </div>
                    <p>
                        More Information to come!
                    </p>
                    <div className="center" id="clockdiv">
                        <div>
                            <span className="days" />
                            <div className="smalltext">Days</div>
                        </div>
                        <div>
                            <span className="hours" />
                            <div className="smalltext">Hours</div>
                        </div>
                        <div>
                            <span className="minutes" />
                            <div className="smalltext">Minutes</div>
                        </div>
                        <div>
                            <span className="seconds" />
                            <div className="smalltext">Seconds</div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports=AreaConvention;