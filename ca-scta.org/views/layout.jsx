/**
 * Created by mpbil on 3/24/2017.
 */
let React = require('react');
let classNames = require('classnames');



class ActionLink extends React.Component{
    render(){
        let classes = classNames({'active':this.props.link==this.props.activeLink});
        return <li className={classes}><a href={this.props.link}>{this.props.text}</a></li>;
    }
}
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
 class Layout extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/stylesheets/site.css" />
            </head>
            <body>
            <MainNav meetingLinks={this.props.meetingLinks} activeLink={this.props.activeLink}/>
            <div  className="container-fluid">
                <div  className="row">
                    <div  className="col-lg-10 col-lg-offset-1 col-md-12">
                        <div  className="body-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <footer>
                <div  className="sixth-tradition">
                    <p>In the spirit of CA's 6th tradition, this website does not endorse any related facility or outside enterprise.</p>
                </div>
                <div  className="ca-copyright">
                    <p>
                        &copy; 2016 Cocaine Anonymous World Services, Inc. All Rights Reserved.
                    </p>
                </div>
            </footer>

            <script src="https://code.jquery.com/jquery-3.0.0.min.js" />
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous" />
            </body>
            </html>
        );
    }
}

Layout.propTypes = {
    title: React.PropTypes.string
};

module.exports = Layout;