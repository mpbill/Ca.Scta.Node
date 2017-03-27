let React = require('react');
let Layout = require('./layout');
let moment = require('moment');
let numberToLinkNumber = require('./helpers/numberToLinkNumber');
let numberToPrettyNumber = require('./helpers/numberToPrettyNumber');

let hotlineMapper = (h)=>{
    return (
        <div className="col-sm-6 col-lg-3">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3>{h.name }<span className="pull-right"><span className="glyphicon glyphicon-phone" /></span></h3>
                </div>
                <div className="panel-body">
                    <h3><a className="link" href={numberToLinkNumber(h)}>{numberToPrettyNumber(h)}</a></h3>
                </div>
            </div>
        </div>
    );
};

class Index extends React.Component {
        render() {
        let d = moment(this.props.nextAreaMeeting.meetingTime);
        let hotlineCards = this.props.areaHotlines.map(hotlineMapper);
        return (
            <Layout title={this.props.title} meetingGroupNames={this.props.meetingGroupNames}>
                <div className="row">
                {hotlineCards}
                    <div className="row">
                        <h2>The South Central Texas Area of Cocaine Anonymous</h2>

                        <div className="ca-description-short">
                            <p>
                                <strong>Cocaine Anonymous</strong> is a fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others to recover from their addiction...
                                <a href="/Home/About">Read More</a>
                            </p>

                        </div>
                        <div className="next-area-meeting">
                            <h3>The Next Area Meeting</h3>
                            <p>
                                {d.format("dddd MMMM d, YYYY \\a\\t H:mm a")}
                            </p>
                            <address>
                                {this.props.nextAreaMeeting.address.name}<br/>
                                {this.props.nextAreaMeeting.address.street1}<br/>
                                {this.props.nextAreaMeeting.address.city}, {this.props.nextAreaMeeting.address.state} {this.props.nextAreaMeeting.address.zipCode}<br/>
                            </address>

                            <div className="text-center">
                                <a href={this.props.nextAreaMeeting.address.mapLink} className="btn btn-info">Map Link</a>
                            </div>
                        </div>
                        <div className="center-text-wrapper">
                            <h3>The following area positions are up for nomination in November:</h3>
                            <p>(Elections will be held in January)</p>
                            <table className="table table-condensed">
                                <thead>
                                <tr className="weekday-header">
                                    <th>Position</th>
                                    <th>Sobriety Required</th>
                                    <th>Term Length</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Hotline Chair</td>
                                    <td>1 Year</td>
                                    <td>Interim</td>
                                </tr>

                                <tr>
                                    <td>Internet</td>
                                    <td>1 Year</td>
                                    <td>1 Year</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

Index.propTypes = {
    title: React.PropTypes.string
};

module.exports = Index;