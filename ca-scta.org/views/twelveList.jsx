let React = require('react');
let Layout = require('./layout');


class TwelveList extends React.Component{
    orderedListMap(key,index){
        return <li key={index}><span dangerouslySetInnerHTML={{__html:key}} /></li>;
    }
    render(){
        return (
            <Layout title={this.props.title} meetingLinks={this.props.meetingLinks} activeLink={this.props.activeLink}>
                <div className="row">
                    <h2>{this.props.twelveList.title}</h2>
                    <div className="twelve-list">
                        <ol>
                            {this.props.twelveList.list.map(this.orderedListMap)}
                        </ol>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports=TwelveList;