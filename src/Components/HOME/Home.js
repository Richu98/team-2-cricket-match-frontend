import React, { Component } from 'react'
import './Home.css'
import logo from './home.jpeg'

import {Route} from 'react-router-dom';
import Enterteam from '../ENTERTEAM/Enterteam';
import Instruction from '../INSTRUCTIONS/Instruction';
class Home extends Component {
  handleINSTRUCT=()=>{this.props.history.push('/Instruction');}
  handleSTART=()=>{this.props.history.push('/Enterteam');}
  render() {
    return (
      
      <div>
      <h1><u><i>INDIAN PREMIER LEAGUE</i></u></h1>
      
      <div className="HOME">
      
      <div className="home">
      {/*create a div named "Hcontent" and show the detail about the website*/}
      <div className="Hcontent" >
          <div>
            <p><h3>Cricket Match Game<br></br>
            Welcome to cricketMatch, our website is dedicated to play the free cricket Match inspired by the great game of Cricket.     We will strive to make sure our site is the best cricket games site on the world wide web. We are always looking for new cricket games to add to our site.
           </h3> </p>
          </div>
          
          {/*buttons for INSTRUCTIONS and START are created*/}
          <div className="Gstart">
          <input type="button" value="INSTRUCTION" onClick={this.handleINSTRUCT}></input>
          <Route path="/Instruction" component={Instruction}/> 
          <input type="button" value="START" onClick={this.handleSTART}></input>
            <Route path="/Enterteam" component={Enterteam}/>
          </div> 
          
          </div> 
          
          {/*a div for displaying image in the website*/}
      <div className="img">
      <img src={logo} alt="homeimg" />
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default Home;
