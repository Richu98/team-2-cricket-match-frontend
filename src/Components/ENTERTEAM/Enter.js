import React, { Component } from 'react'
import Select from './Select'
import Add from './Add'
class Enter extends Component {
  constructor(props){
    super(props);
    this.state={
      players:[]
  }}
  handlePlayers=(data)=>{
    data.id=Math.random();
    const arr =[...this.state.players,data];
    this.setState({players:arr})
  }
  render() {
    return (
      <div>
      <Select players={this.state.players} />
      <Add add={this.handlePlayers}/>
        
      </div>
    )
  }
}

export default Enter;
