/**
 * Created by mpbil on 3/22/2017.
 */
import React,{Component} from 'react';
import { gql, graphql } from 'react-apollo';
import {Link} from 'react-router';

class PositionsPage extends Component {
  constructor(props){
    super(props);
    this.positionTable = this.positionTable.bind(this);
    this.positionRow = this.positionRow.bind(this);
    this.deletePosition = this.deletePosition.bind(this);
  }
  deletePosition(id){
    console.log(id);

  }
  positionRow(position){
    let boundDeletePosition = this.deletePosition.bind(this,position.Id);
    let editLink = "/positions/" + position.Id;
    return (
      <tr key={position.Id}>
        <td>{position.PositionName}</td>
        <td>{position.VolunteerName}</td>
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
        </tbody>
      </table>
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
}
const GetPositionsQuery = gql`
query getPositions{
  getAllPositions{
    Id,
    PositionName,
    VolunteerName,
    PositionEmail
  }
}
`;

let PositionsPageWithData = graphql(GetPositionsQuery)(PositionsPage);
export default PositionsPageWithData;
