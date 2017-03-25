/**
 * Created by mpbil on 3/24/2017.
 */
let React = require('react');

 class Layout extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />


                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous" />
            </head>
            <body>
            <div  className="navbar navbar-inverse navbar-fixed-top">
                <div  className="container-fluid">
                    <div  className="navbar-header">
                        <button type="button"  className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span  className="icon-bar" />
                            <span  className="icon-bar" />
                            <span  className="icon-bar" />
                        </button>
                        <a href=""  className="pull-left"><img src="http://content.ca-scta.org/Images/scta-logo.png"  className="navbar-brand ca-logo" /></a>

                    </div>
                    <div  className="navbar-collapse collapse">
                        <ul  className="nav navbar-nav">
                            <li  className="dropdown">
                                <a href="#"  className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="False">Meetings</a>
                                <ul  className="dropdown-menu">
                                    <li>Cedar Park</li>
                                    <li>Corpus Christi</li>
                                </ul>
                            </li>
                            <li  className="dropdown">
                                <a href="#"  className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="False">Conventions</a>
                                <ul  className="dropdown-menu">
                                    <li>@Html.ActionLink("2017 Area Convention", "AreaConvention", "Home")</li>
                                    <li>@Html.ActionLink("2020 World Convention", "WorldConvention", "Home")</li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div  className="container-fluid">
                <div  className="row">
                    <div  className="col-lg-10 col-lg-offset-1 col-md-12">
                        <div  className="body-content">
                            @RenderBody()
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
            {this.props.children}
            <script src="https://code.jquery.com/jquery-3.0.0.min.js" />
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" />
            </body>
            </html>
        );
    }
}

Layout.propTypes = {
    title: React.PropTypes.string
};

module.exports = Layout;