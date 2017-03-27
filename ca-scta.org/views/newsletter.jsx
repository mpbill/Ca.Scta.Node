let React = require('react');
let Layout = require('./layout');


class Newsletter extends React.Component{
    static newsletterItemMapper(n){
        return <li className="list-group-item"><a href={n.link}>{n.name}</a></li>;
    }
    render(){
        let newsletterListItems=this.props.newsletters.map(Newsletter.newsletterItemMapper);
        return (
            <Layout title={this.props.title} meetingLinks={this.props.meetingLinks} activeLink={this.props.activeLink}>
                <h2>Newsletters</h2>
                <p>To submit content for future letters, email: <a href="mailto:newsletter@ca-scta.org">newsletter@ca-scta.org</a></p>
                <ul className="list-group">
                    {newsletterListItems}
                </ul>
            </Layout>
        )
    }
}
Newsletter.defaultProps={
    newsletters:[]
};
module.exports=Newsletter;