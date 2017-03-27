let React = require('react');
let Layout = require('./layout');

let numberToLinkNumber = require('./helpers/numberToLinkNumber');
let numberToPrettyNumber = require('./helpers/numberToPrettyNumber');

class Contacts extends React.Component{
    static contactMapper(c){
        let mailToLink = "mailto:"+c.positionEmail;
        return(
            <div className="panel panel-info" key={c.id}>
                <div className="panel-heading">
                    <h4>
                        {c.positionName}
                        <span className="pull-right"><span className="glyphicon glyphicon-user" /></span>
                    </h4>
                </div>
                <div className="panel-body">
                    <div className="bold-text"><h4>{c.volunteerName}</h4></div>
                    <h4><a href={mailToLink}> {c.positionEmail}</a></h4>
                </div>
            </div>
        )
    }
    static hotlineMapper(h){
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3>{h.name }<span className="pull-right"><span className="glyphicon glyphicon-phone" /></span></h3>
                </div>
                <div className="panel-body">
                    <h3><a className="link" href={numberToLinkNumber(h)}>{numberToPrettyNumber(h)}</a></h3>
                </div>
            </div>
        )
    }
    render(){
        let positionsMapped = this.props.positions.map(Contacts.contactMapper);
        let hotlinesMapped = this.props.hotlines.map(Contacts.hotlineMapper);
        return (
            <Layout title={this.props.title} meetingGroupNames={this.props.meetingGroupNames} activeLink={this.props.activeLink}>
                <div className="row">
                    <h2>Contact Us</h2>
                    {hotlinesMapped}
                    {positionsMapped}
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h4>
                            Flier Approval
                            <span className="pull-right"><span className="glyphicon glyphicon-user" /></span>

                        </h4>

                    </div>
                    <div className="panel-body">
                        <h4><a href="mailto:flyers@ca-scta.org"> flyers@ca-scta.org</a></h4>
                    </div>
                    <div className="panel-footer">
                        Email fliers to this address for approval.
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h4>
                            Cocaine Anonymous World Service Office
                            <span className="pull-right"><span className="glyphicon glyphicon-user" /></span>

                        </h4>

                    </div>
                    <div className="panel-body">
                        <h4><a href="mailto:cawso@ca.org"> cawso@ca.org</a></h4>
                    </div>
                </div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h4>
                            CA Southwest Regional Trustee
                            <span className="pull-right"><span className="glyphicon glyphicon-user" /></span>
                        </h4>

                    </div>
                    <div className="panel-body">
                        <h4><a href="mailto:swr_trustee@ca-scta.org"> swr_trustee@ca-scta.org</a></h4>
                    </div>
                    <div className="panel-footer">
                        This email gets forwarded to the Trustee, Area Chair, and Delegate A.
                    </div>
                </div>
                <div className="row">
                    <a className="anchor" id="org-chart" />
                    <h2>Area Organization Chart</h2>
                    <img className="img img-responsive" src="/org-chart/ca-scta-org-chart-export.svg"/>
                </div>
            </Layout>
        )
    }
}

module.exports=Contacts;