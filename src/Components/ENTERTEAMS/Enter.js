import React, { Component } from 'react'
import Select from './Select'
import Add from './Add'
import axios from 'axios'
class Enter extends Component {
  constructor(props){
    super(props);
    this.state={
      playersTA:[],
      playersTB:[],
      EteamNameA:{teamName:'MUMBAI INDIANS',players:[{name:'jatin'},{name:'akansha'},{name:'sheetal'},{name:'kabir'}]},
      EteamNameB:{teamName:'',players:[{name:''}]}

  }}
 /*componentDidMount(){
   axios.post('https://api-cricket-match.herokuapp.com/team/createTeam',this.state.EteamNameA)
  .then(response => {
    console.log(response)
      })
  .catch(error => {
    console.log(error)
  }
  )
 /* axios.post('https://api-cricket-match.herokuapp.com/team/createTeam',this.state.EteamNameB)
  .then(response => {
    console.log(response)
      })
  }*/
  handlePlayersA=(data)=>{
    data.id=Math.random();
    const arrA =[...this.state.playersTA,data];
    this.setState({playersTA:arrA})
   // console.log(this.props.TApassA)
    //console.log(...this.state.InputCon,daata)
  }
  handlePlayersB=(data)=>{
    data.id=Math.random();
    const arrB =[...this.state.playersTB,data];
    this.setState({playersTB:arrB})
  } 
  
 // passon=(e)=>{
    /* NM=this.
    let NMobj={name:NM}
    this.setState({...this.state,APMN:[...this.state.APMN,NMobj]});
    console.log("nnnnnnnnn");
    console.log(this.state.APMN)*/
   // }
  render() {
    /*console.log(this.props);
    const TEAMtutA=this.props.TEAMANAME
    const TEAMtutB=this.props.TEAMBNAME;*/

    /*const TApass=this.state.playersTA.map(data=>{return(<div name={data.name}>
      <h1></h1></div>)})
    const TBpass=this.state.playersTB*/
    return (
      <div> 
      <Add addA={this.handlePlayersA} addB={this.handlePlayersB}/>
      <Select playersTA={this.state.playersTA} playersTB={this.state.playersTB}/>
        {this.props.TEAMtutA}
        {this.props.TEAMtutB}
        
      </div>
    ) 
  }
} 

export default Enter;
