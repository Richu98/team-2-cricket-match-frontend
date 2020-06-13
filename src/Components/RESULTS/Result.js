import React, { Component } from 'react'
import './Result.css'
import axios from 'axios'
 class Result extends Component {
     state={Aplayers:[],Ascore:0,Bscore:0,Difference:0,Team:'',WIN:'Win by :'}
    componentDidMount(){
        axios.get('https://api-cricket-match.herokuapp.com/team/getTeam/5ee046a6b158c33dfc8718e4')
        .then(response =>{
            console.log(response)
            this.setState({Ascore: response.data.teamRuns});
            console.log(this.state.Ascore)
        })
        .catch(error => {
            console.log(error)
        }
        )
        axios.get('https://api-cricket-match.herokuapp.com/team/getTeam/5ee04522b158c33dfc8718d7')
        .then(response =>{
            console.log(response)
            this.setState({Bscore: response.data.teamRuns});
            console.log(this.state.Bscore)
        })
        
    }
    handleclick=(e)=>{this.setState({Difference:this.state.Ascore-this.state.Bscore}) 
    
    console.log(this.state.Difference)
    if(this.state.Ascore>this.state.Bscore){this.setState({Team:"R.C.B"})}
    else if(this.state.Bscore>this.state.Ascore){this.setState({Team:"M.I."})}
    else{this.setState({Team:"DRAW"})
    this.setState({WIN:'by'})
    
     }
   } 
    //showscore=(e)=>{window.location.reload()}
    render() {
        
        return (
            <div >
                <div className="RMain">
                <h1><b>Indian Premier League</b></h1>
                   <div className="RTeams">
                       <div className="shape"><h1>R.C.B</h1></div>
                       <div className="versus"><h1>Vs</h1></div>
                       <div className="shape"><h1>M.I.</h1></div>
                   </div>
                  {/* <button className="display" onClick={this.showscore}><h3>Show Score</h3></button>*/}
                   <div className="RScore">
                       <div className="shape2"><h1>Score of R.C.B: {this.state.Ascore}</h1></div>
                       <div className="shape2"><h1>Score of M.I: {this.state.Bscore}</h1></div>
                       
                   </div>
                   <button className="Rbtn" onClick={this.handleclick}>Show Winner</button>
                   
                    <div className="RCongo">Whoopeeee..!!</div>
                     <div className="RFinal"> {this.state.Team} {this.state.WIN} {this.state.Difference} Runs</div>
                </div>
            </div>
        )
    }
}

export default Result;
