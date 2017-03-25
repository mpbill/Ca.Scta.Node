/**
 * Created by mpbil on 3/25/2017.
 */
let React = require('react');
let Layout = require('./layout');


class Meetings extends React.Component{
    render(){
        return (
            <Layout title={this.props.title} meetingLinks={this.props.meetingLinks} activeLink={this.props.activeLink}/>
        )
    }
}

module.exports=Meetings;