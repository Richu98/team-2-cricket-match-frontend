import React, {Component} from 'react';
import './App.css'
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Components/HOME/Home';
import Play from './Components/Match/Play';
import Result from './Components/RESULT/Result';
import Instruction from './Components/INSTRUCTIONS/Instruction';
import Enterteams from './Components/ENTERTEAMS/Enterteams'
class App extends Component{
render(){
  return(
    <BrowserRouter>
    <div className='App'>
    <Route exact path="/" component={Home}/>
    <Route path="/Enterteams" component={Enterteams}/>
    <Route path="/Match" component={Play}/>
    <Route path="/Result" component={Result}/>
    <Route path="/Instruction" component={Instruction}/>
       
    </div>
    </BrowserRouter>
  );
 }
}

export default App;
