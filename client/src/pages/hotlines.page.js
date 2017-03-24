import React,{Component} from 'react';
import {graphql,compose} from 'react-apollo';
import GetAllHotlinesQuery from '../graphql/getAllHotlines.query.gql';

let table = (headers,rows)=>{
    return (
        <div className="container">
        <table className="table">
            <thead>
                <tr>
                    {headers}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
        </div>
    )
}



class HotlinesPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let toRender = <div>Loading...</div>;
        if(this.props.data.getAllHotlines){
            let rows = this.props.data.getAllHotlines.map((o)=><tr><td>{o.areaCode}</td></tr>);
            rows.push(<tr></tr>)
        }
    }
}

let HotlinesPageWithData = compose(
    graphql(GetAllHotlinesQuery)
)(HotlinesPage);