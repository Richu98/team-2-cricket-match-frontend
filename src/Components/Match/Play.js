import React, { Component } from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom';
import './Play.css'
import Result from '../RESULT/Result'
class play extends Component {
  handleRESULT=()=>{this.props.history.push('/Result');}
  state={ANames:[],Aplayers:[],Bplayers:[],BNames:[],scoreA:0,totalA:0,scoreB:0,totalB:0,incrementA:0,incrementB:0}
  handlebattingA=()=>{
    this.state.incrementA++
     if(this.state.incrementA<=6){
    
      //const run = Math.floor(Math.random()*6);
      //for (let i = 0; i <=6; i++) {
      const runa = Math.floor(Math.random()*6);
      this.setState({ scoreA: this.state.scoreA= runa });
      this.setState({totalA: this.state.totalA+ runa});
  }
     console.log(this.state.totalA);
  
  }

   
  handlebattingB=()=>{
    this.state.incrementB++
     if(this.state.incrementB<=6){
    
      //const run = Math.floor(Math.random()*6);
      //for (let i = 0; i <=6; i++) {
      const runb = Math.floor(Math.random()*6);
      this.setState({ scoreB: this.state.scoreB= runb });
      this.setState({totalB: this.state.totalB+ runb});
  }
     console.log(this.state.totalB);
    
  }
  componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response =>{
      console.log(response)
      this.setState({Aplayers: response.data.slice(0,10)});
  })
  .catch(error => {
      console.log(error)
  }
  )
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(resp =>{
      console.log(resp)
      this.setState({Bplayers: resp.data.slice(0,10)});
  })
}

  render() {
    const APlayers = this.state.ANames ?
        (
            <div>
              <div className="black">
            {this.state.Aplayers.map(data =>{
                return(<ul type="square" >
                    <li><h2><b>{data.name}</b></h2></li>
                
                    </ul>)})}
                </div>
            </div>
        ) : 
        (<div>loading data .....</div>);
        const BPlayers = this.state.BNames ?
        (
            <div>
            <div className="black">
            {this.state.Bplayers.map(data =>{
                return(<ul type="square">
                    <li><h2><b>{data.name}</b></h2></li>
                
                    </ul>
                    )})}
                </div>
                 
            </div>
        ) : 
        (<div>loading data .....</div>);
        
       return (
       <div className='basic'>
       <div className='black'>
          <div id="details">
          <div className="black">
               <h1 id="heading">INDIAN PREMIER LEAGUE</h1>
               <h1>TEAM A VS TEAM B</h1>

            </div>
          </div> 
          <div className="flextry">
               <div id="Aplayerslist"><h1><center><b>TEAM A</b></center></h1>{APlayers}</div>
               <div id="popup"> 
                    <div className="playbutton">
                    <button id="btn1" onClick={this.handlebattingA}>BATTING A</button>
                    <button id="btn2" onClick={this.handlebattingB}>BATTING B</button>  
                    </div>
                    <div className="msg"><b>run scored by TEAM A : {this.state.scoreA}</b><br></br><b>Total scored of TEAM A : {this.state.totalA}</b></div>
                    <div className="msg"><b>run scored by TEAM B : {this.state.scoreB}</b><br></br><b>Total scored of TEAM B: {this.state.totalB}</b></div>
                    <input type="button" value="RESULT" onClick={this.handleRESULT}></input>
                   <Route path="/Result" component={Result}/>
                </div>
                <div id="Bplayerslist"><h1><center><b>TEAM B</b></center></h1>{BPlayers}</div>
                
          </div> 
          </div>   
      </div>
    )
  }
  
} 

export default play


