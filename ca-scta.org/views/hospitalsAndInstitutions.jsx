let React = require('react');
let Layout = require('./layout');


class HospitalsAndInstitutions extends React.Component{
    render(){
        return (
            <Layout title={this.props.title} meetingGroupNames={this.props.meetingGroupNames} activeLink={this.props.activeLink}>
                <h2>Hospitals & Institutions</h2>
                <p><i>Opportunities to be of service by carrying the message to the addict who still suffers</i></p>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Committee Meeting</h2>
                        <p>The Austin H&I Committee meets at 12:00pm on the 2nd Saturday of each month at Genuine Joes Coffee House. The address is: </p>
                        <p><b>2001 West Anderson Lane,<br/> Austin, TX 78757.</b></p>
                        <p><a href="https://www.google.com/maps/place/Genuine+Joe+Coffeehouse/&#64;30.354463,-97.7234332,15z/data=!4m2!3m1!1s0x8644cbb1030f7d31:0xff1d8120b027b9cc"><b>Google Maps Link</b></a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>H&I Calendar</h2>
                        <p>A Current H&I Calendar that contains a listing and schedule for Austin Area Service opportunities can be downloaded here: </p>
                        <p><a href="http://content.ca-scta.org/Documents/HandI_Calendar01.12.17.pdf"><b>H&I Calendar</b></a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Please do not:</h2>
                        <p> contact the facilities directly, for more information, please contact members of the Austin H&I Committee or the Service Commitment Facilitator. Contact information for Committee members and Facilitators can be found on the H&I Calendar.</p>

                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports=HospitalsAndInstitutions;