let React = require('react');
let Layout = require('./layout');


class AreaConvention extends React.Component{
    render(){
        return (
            <Layout title={this.props.title} meetingLinks={this.props.meetingLinks} activeLink={this.props.activeLink}/>
        )
    }
}

module.exports=AreaConvention;