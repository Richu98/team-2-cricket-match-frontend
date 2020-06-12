import React, { Component } from 'react'
import Select from './Select'
import Add from './Add'
class Enter extends Component {
  constructor(props){
    super(props);
    this.state={
      playersTA:[],playersTB:[],InputCon:null
  }}
  handlePlayersA=(data)=>{
    data.id=Math.random();
    const arrA =[...this.state.playersTA,data];
    this.setState({playersTA:arrA})
    //console.log(...this.state.InputCon,daata)
  }
  handlePlayersB=(data)=>{
    data.id=Math.random();
    const arrB =[...this.state.playersTB,data];
    this.setState({playersTB:arrB})
  } 
  handlecallback=(data)=>{
    const {Ecallback}=this.props
    Ecallback(this.state.InputCon)
    this.setState({InputCon:data})}
  
  render() {
    return (
      <div> 
      
      <Add addA={this.handlePlayersA} addB={this.handlePlayersB} callback={this.handlecallback}/>
      <Select playersTA={this.state.playersTA} playersTB={this.state.playersTB}/>
        
      </div>
    )
  }
} 

export default Enter;
