let React = require('react');
let ActionLink = require('./ActionLink');

class MainNav extends React.Component{
    constructor(props){
        super(props);
        this.meetingListItemsMapper=this.meetingListItemsMapper.bind(this);
    }
    meetingListItemsMapper(m){
        let linkPath = "/meetings/"+m.link;
        return <li><ActionLink text={m.text} link={linkPath} activeLink={this.props.activeLink} /></li>;
    }
    render(){
        let meetingListItems = this.props.meetingLinks.map(this.meetingListItemsMapper);


        return (
            <div  className="navbar navbar-inverse navbar-fixed-top">
                <div  className="container-fluid">
                    <div  className="navbar-header">
                        <button type="button"  className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span  className="icon-bar" />
                            <span  className="icon-bar" />
                            <span  className="icon-bar" />
                        </button>
                        <a href="/" className="pull-left"><img src="http://content.ca-scta.org/Images/scta-logo.png"  className="navbar-brand ca-logo" /></a>

                    </div>
                    <div  className="navbar-collapse collapse">
                        <ul  className="nav navbar-nav">
                            <li  className="dropdown">
                                <a href="#"  className="dropdown-toggle is-active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="False">Meetings</a>
                                <ul  className="dropdown-menu">
                                    {meetingListItems}
                                </ul>
                            </li>
                            <ActionLink link="/contact" text="Contact" activeLink={this.props.activeLink}/>
                            <ActionLink link="/twelveTraditions" text="12 Traditions" activeLink={this.props.activeLink}/>
                            <ActionLink link="/areaResources" text="Area Resources" activeLink={this.props.activeLink}/>
                            <ActionLink link="/events" text="Events" activeLink={this.props.activeLink}/>
                            <ActionLink link="/flyers" text="Flyers" activeLink={this.props.activeLink}/>
                            <ActionLink link="/hospitalsAndInstitutions" text="H&I" activeLink={this.props.activeLink}/>
                            <ActionLink link="/newsletter" text="Newsletter" activeLink={this.props.activeLink}/>
                            <li  className="dropdown">
                                <a href="#"  className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="False">Conventions</a>
                                <ul  className="dropdown-menu">
                                    <ActionLink link="/worldConvention" text="World Convention" activeLink={this.props.activeLink}/>
                                    <ActionLink link="/areaConvention" text="Area Convention" activeLink={this.props.activeLink}/>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
module.exports=MainNav;