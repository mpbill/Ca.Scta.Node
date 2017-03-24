/**
 * Created by mpbil on 3/22/2017.
 */
import React,{Component} from 'react';
import { gql, graphql,compose } from 'react-apollo';
import {Link} from 'react-router';
let classNames = require('classnames');
import {browserHistory} from 'react-router';
import UpdatePositionMutation from '../graphql/updatePosition.mutation.gql';
import GetPositionByIdQuery from '../graphql/getPositionById.query.gql'
const form = (that)=>(
  <div>
    <div className="field">
      <label className="label">Position Name</label>
      <div className="control">
        <input className="input" type="text" value={that.state.position.positionName} name="positionName" onChange={that.userInput}/>
      </div>
    </div>
    <div className="field">
      <label className="label">Volunteer Name</label>
      <div className="control">
        <input className="input" type="text" value={that.state.position.volunteerName} name="volunteerName" onChange={that.userInput}/>
      </div>
    </div>
    <div className="field">
      <label className="label">Position Email</label>
      <div className="control">
        <input className="input" type="text" value={that.state.position.positionEmail} name="positionEmail" onChange={that.userInput}/>
      </div>
    </div>
  </div>
);


class NewPosition extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading:false,
      position:{
        positionName:"",
        positionEmail:"",
        volunteerName:""
      }
    };
    this.createClicked=this.createClicked.bind(this);
    this.userInput = this.userInput.bind(this);
    
  }
  userInput(e){
    let name = e.target.name;
    let value = e.target.value;
    let position = this.state.position;
    position[name]=value;
    this.setState({
      position: position,
    });
  }
  createClicked(){
    this.setState({isLoading:true},function () {
      this.props.submit(this.state.position).then(function () {
        browserHistory.push('/positions');

      })
    });

  }
  render(){
    let buttonClassNames = classNames('button','is-primary',{'is-disabled':this.state.isLoading},{'is-loading':this.state.isLoading});
    return (
      <div>
        {form(this)}
        <div className="control">
          <button className={buttonClassNames} onClick={this.createClicked}>Create</button>
        </div>
      </div>
    );
  }
}
const NewPositionMutation = gql`
mutation newPositionMutation($position: NewPositionInput!) {
  createPosition(position: $position) {
    id
    positionName
    volunteerName
    positionEmail
  }
}
`;
let NewPositionWithData = graphql(NewPositionMutation,{
  props({ ownProps, mutate }) {
    return {
      submit(position) {
        return mutate({
          variables: {position:position},
          refetchQueries: [{
            query: gql`
                    query getPositions{
                      getAllPositions{
                        id,
                        positionName,
                        volunteerName,
                        positionEmail
                      }
                    }`,
          }],
        });
      },
    };
  }
})(NewPosition);

class EditPositionForm extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading:false,
      position: {
        id: this.props.position.id,
        volunteerName: this.props.position.volunteerName,
        positionName: this.props.position.positionName,
        positionEmail: this.props.position.positionEmail
      }
    };
    this.userInput = this.userInput.bind(this);
    this.saveClicked = this.saveClicked.bind(this);
  }
  userInput(e){
    let name = e.target.name;
    let value = e.target.value;
    let position = this.state.position;
    position[name]=value;
    this.setState({
      position:position
    });
  }
  saveClicked(){
    this.props.updatePositionFn({variables:{position:this.state.position}});
  }
  render(){
    return (
    <div>
      {form(this)}
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-primary" onClick={this.saveClicked}>Save</button>
        </div>
      </div>
    </div>
    )
  }
}

class EditPosition extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let renderComp = <div>Loading...</div>
    if(this.props.data.getPositionById){
      renderComp = <EditPositionForm position={this.props.data.getPositionById} updatePositionFn={this.props.mutate} />
    }

    return (
      <div className="container">
        {renderComp}
      </div>
    )
  }
}


let EditPositionWithData = compose(
  graphql(GetPositionByIdQuery,{
    options:function(props) {
      return {
        variables: {
          id: props.params.id
        }
      }
    }
  }),
  graphql(UpdatePositionMutation)
)(EditPosition);
module.exports = {
  EditPositionWithData:EditPositionWithData,
  NewPositionWithData:NewPositionWithData
};


