/**
 * Created by mpbil on 3/22/2017.
 */
import React,{Component} from 'react';
import { gql, graphql,compose } from 'react-apollo';
import {Link} from 'react-router';
import GetPositionsQuery from '../graphql/getAllPositions.query.gql'
import DeletePositionMutation from '../graphql/deletePosition.mutation.gql';
class PositionsPage extends Component {
  constructor(props){
    super(props);
    this.positionTable = this.positionTable.bind(this);
    this.positionRow = this.positionRow.bind(this);
    this.deletePosition = this.deletePosition.bind(this);
  }
  deletePosition(id){
    this.props.mutate({variables:{id:id}}).then(()=>{
      this.props.data.refetch();
    })

  }
  positionRow(position){
    let boundDeletePosition = this.deletePosition.bind(this,position.id);
    let editLink = "/positions/" + position.id;
    return (
      <tr key={position.id}>
        <td>{position.positionName}</td>
        <td>{position.volunteerName}</td>
        <td>
          <Link to={editLink} className="button is-primary">Edit</Link>
          <button className="button is-danger" onClick={boundDeletePosition} >Delete</button>
        </td>
      </tr>
    )
  }
  positionTable(positions){
    let positionRows = positions.map(this.positionRow);
    return (
      <div className="container">
      <table className="table">
        <thead>
        <tr>
          <th>Position</th>
          <th>Volunteer</th>
          <th/>
        </tr>
        </thead>
        <tbody>
        {positionRows}
        <tr><td/><td/><td><Link to={"/newPosition"} className="button is-primary">New</Link></td></tr>
        </tbody>
      </table>
      </div>
    )
  }
  render(){
    if(this.props.data.getAllPositions) {
      let table = this.positionTable(this.props.data.getAllPositions);
      return <div>{table}</div>;
    }
    else{
      return <div>Loading...</div>
    }

  }
  componentDidMount(){
    if(!this.props.data.loading){
      this.props.data.refetch();
    }
  }
}
let PositionsPageWithData = compose(
  graphql(GetPositionsQuery),
  graphql(DeletePositionMutation)
)(PositionsPage);
export default PositionsPageWithData;
