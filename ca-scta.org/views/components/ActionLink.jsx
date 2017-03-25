let React = require('react');
let classNames = require('classnames');

class ActionLink extends React.Component{
    render(){
        let classes = classNames({'active':this.props.link==this.props.activeLink});
        return <li className={classes}><a href={this.props.link}>{this.props.text}</a></li>;
    }
}
module.exports=ActionLink;