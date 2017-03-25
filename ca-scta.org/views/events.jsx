let React = require('react');
let Layout = require('./layout');


class Events extends React.Component{
    render(){
        return (
            <Layout title={this.props.title} meetingLinks={this.props.meetingLinks} activeLink={this.props.activeLink}/>
        )
    }
}

module.exports=Events;