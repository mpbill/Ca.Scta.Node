let React = require('react');
let Layout = require('./layout');


class Flyers extends React.Component{
    render(){
        return (
            <Layout title={this.props.title} meetingGroupNames={this.props.meetingGroupNames} activeLink={this.props.activeLink}/>
        )
    }
}

module.exports=Flyers;