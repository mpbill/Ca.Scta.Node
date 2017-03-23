/**
 * Created by mpbil on 3/22/2017.
 */
import React,{Component} from 'react';
import { gql, graphql } from 'react-apollo';
import {Link} from 'react-router';

class EditPosition extends Component{
  constructor(props){
    super(props);
    this.userInput = this.userInput.bind(this);
    this.state = {userEdited:false};
    this.render = this.render.bind(this);
  }
  userInput(e){
    let newState ={userEdited:true};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }
  render(){
    debugger;
    let data = {};
    if(this.state.userEdited){
      data = this.state;
    }
    else if(this.props.data.getPositionById){
      data = this.props.data.getPositionById;
    }
    else{
      data = {
        Id:0,
        PositionName:"",
        VolunteerName:"",
        PositionEmail:""
      }
    }
    return (
      <div>
        <div className="field">
          <label className="label">Position Name</label>
          <div className="control">
            <input className="input" type="text" value={data.PositionName} id="PositionName" onInput={this.userInput}/>
          </div>
        </div>
        <div className="field">
          <label className="label">Volunteer Name</label>
          <div className="control">
            <input className="input" type="text" value={data.VolunteerName} id="VolunteerName" onInput={this.userInput}/>
          </div>
        </div>
        <div className="field">
          <label className="label">Position Email</label>
          <div className="control">
            <input className="input" type="text" value={data.PositionEmail} id="PositionEmail" onInput={this.userInput}/>
          </div>
        </div>
      </div>
    )
  }
}
const GetPositionByIdQuery = gql`
query getPositionById($id:Int!){
  getPositionById(id:$id){
    Id,
    PositionName,
    VolunteerName,
    PositionEmail
  }
}
`;

let EditPositionWithData = graphql(GetPositionByIdQuery,{
  options:function(props) {
    return {
      variables: {
        id: props.params.id
      }
    }
  }
})(EditPosition);
export default EditPositionWithData;
