/**
 * Created by mpbil on 3/24/2017.
 */
let React = require('react');
let MainNav = require('./components/MainNav');

 class Layout extends React.Component {
     renderStyles() {
         if(!this.props.additionalStyles){
             return null;
         }
         let styles = [];
         this.props.additionalStyles.forEach((s)=>{
             styles.push(<link rel="stylesheet" href={s} />);
         });
         return styles;
     }
     renderScripts(){
         if(!this.props.additionalScripts){
             return null;
         }
         let scripts=[];
         this.props.additionalScripts.forEach((s)=>{
             scripts.push(<script src={s} />);
         });
         return scripts;
     }

    render() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/stylesheets/site.css" />
                {this.renderStyles()}
            </head>
            <body>
            <MainNav meetingLinks={this.props.meetingLinks} activeLink={this.props.activeLink}/>
            <div className="page-wrap">
            <div  className="container-fluid">
                <div  className="row">
                    <div  className="col-lg-10 col-lg-offset-1 col-md-12">
                        <div  className="body-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <footer className="footer">
                <hr />
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
            {this.renderScripts()}
            </body>
            </html>
        );
    }
}

Layout.propTypes = {
    title: React.PropTypes.string
};

module.exports = Layout;