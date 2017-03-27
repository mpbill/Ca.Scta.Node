let React = require('react');
let Layout = require('./layout');


class TwelveList extends React.Component{
    orderedListMap(i){
        return <li key={i.id}><span dangerouslySetInnerHTML={{__html:i.text}} /></li>;
    }
    render(){
        return (
            <Layout title={this.props.title} meetingGroupNames={this.props.meetingGroupNames} activeLink={this.props.activeLink}>
                <div className="row">
                    <h2>{this.props.twelveList.title}</h2>
                    <div className="twelve-list">
                        <ol>
                            {this.props.twelveList.items.map(this.orderedListMap)}
                        </ol>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports=TwelveList;