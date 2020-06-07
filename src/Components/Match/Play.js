import React, { Component } from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom';
import './Play.css'
import Result from '../RESULT/Result'
class play extends Component {
  handleRESULT=()=>{this.props.history.push('/Result');}
  state={ANames:[],Aplayers:[],Bplayers:[],BNames:[],score:0,total:0  }
  heandlebatting=(e)=>{
    const run = Math.floor(Math.random() *7);
  
    this.setState({ score: this.state.score=run });
  this.setState({total: this.state.total+run})}
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
               <div className="status">
                   <h1><b>TEAM A IS BATTING FIRST</b></h1>
                   <h1><b>TEAM B IS BOWLING FIRST</b></h1>
               </div>
            </div>
          </div> 
          <div className="flextry">
               <div id="Aplayerslist"><h2><center><button className="btn">TEAM A</button></center></h2>{APlayers}</div>
               <div id="popup"> 
                    <div className="playbutton">
                    <button onClick={this.heandlebatting}>BATTING</button>
                    <button>BOWLING</button>  
                    </div>
                    <div className="msg"><b>run scored : {this.state.score}</b><br></br><b>total run scored : {this.state.total}</b></div>
                    <input type="button" value="RESULT" onClick={this.handleRESULT}></input>
                    <Route path="/Result" component={Result}/>
                </div>
                <div id="Bplayerslist"><h2><center><button className="btn">TEAM B</button></center></h2>{BPlayers}</div>
          </div> 
          </div>   
      </div>
    )
  }
} 

export default play
