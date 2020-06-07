import React, { Component } from 'react'
import Home from '../HOME/Home';
import {Route} from 'react-router-dom';
import './Instruction.css'

class Instruction extends Component {
  handleHOME=()=>{this.props.history.push('/');}
  render() {
    return (
      <div>
      <h1><u><i>INDIAN PREMIER LEAGUE</i></u></h1><br></br><br></br>
        <h1>GO TO HOME AND CLICK START TO PLAY</h1><br></br>
        <h1>TO PLAY YOU HAVE TWO CHOICES</h1><br></br>
        <p><h2>SELECT ONE OPTION OF YOUR CHOICE</h2><br></br>
        <h2>1.SELECT: 'ENTER' TO ENTER PLAYERS NAME</h2><br></br>
        <h2>2. SELECT:  'SELECT'  TO SELECT PLAYERS FROM GIVEN OPTION OF YOUR CHOICE</h2><br></br>
        <h2>ENJOY THE GAME....</h2></p>
        <input type="button" value="GO HOME" onClick={this.handleHOME}></input>
        <Route exact path="/" component={Home}/>

      </div>
    )
  }
} 

export default Instruction;
