let React = require('react');
let Layout = require('./layout');


class WorldConvention extends React.Component{
    render(){
        return (
            <Layout title={this.props.title} meetingLinks={this.props.meetingLinks} activeLink={this.props.activeLink}>
                <div className="jumbotron">
                    <div className="well">
                        <h2>CA 2020 World Convention</h2>
                        <h2><a href="http://content.ca-scta.org/AreaConvention/CAWS_2020_Bid_Doc_III.pdf">Bid Document</a></h2>
                        <video controls id="convention-video" onClick="playVideo()" className="img img-responsive center-video">
                            <source src="http://content.ca-scta.org/AreaConvention/convention-movie.mp4" type="video/mp4" onClick="" />
                        </video>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports=WorldConvention;