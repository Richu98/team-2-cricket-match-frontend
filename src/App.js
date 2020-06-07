import React, {Component} from 'react';
import './App.css'
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './Components/NAVBAR/Navbar';
import Home from './Components/HOME/Home';
import Enterteam from './Components/ENTERTEAM/Enterteam';
import Toss from './Components/TOSS/Toss';
import Play from './Components/Match/Play';
import Result from './Components/RESULT/Result';
import Instruction from './Components/INSTRUCTIONS/Instruction';
class App extends Component{
render(){
  return(
    <BrowserRouter>
    <div className='App'>

    <Navbar />
    <Route exact path="/" component={Home}/>
    <Route path="/Enterteam" component={Enterteam}/>
    <Route path="/Toss" component={Toss}/>
    <Route path="/Match" component={Play}/>
    <Route path="/Result" component={Result}/>
    <Route path="/Instruction" component={Instruction}/>
       
    </div>
    </BrowserRouter>
  );
 }
}

export default App;
