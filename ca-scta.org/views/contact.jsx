let React = require('react');
let Layout = require('./layout');


class Contacts extends React.Component{
    contactMapper(c){
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
    render(){
        let positionsMapped = this.props.positions.map(this.contactMapper);
        return (
            <Layout title={this.props.title} meetingLinks={this.props.meetingLinks} activeLink={this.props.activeLink}>
                <div className="row">
                    <h2>Contact Us</h2>
                    {positionsMapped}
                </div>
            </Layout>
        )
    }
}

module.exports=Contacts;