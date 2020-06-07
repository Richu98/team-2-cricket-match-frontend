import React, { Component } from 'react'
import './Select.css'

 class Select extends Component {
  render() {
    console.log(this.props);
    const playerA=this.props.playersTA;
    const playerB=this.props.playersTB;

    return (
      <div className="Select">
      <div>
      {
        playerA.map(data=>{return(<div>
          <h1>{data.name}</h1>
        </div>)})
      }
      </div>
      <div>
      {
        playerB.map(data=>{return(<div>
          <h1>{data.name}</h1>
        </div>)})
      }
      </div>


         
      </div>
    )
  }
}

export default Select;
