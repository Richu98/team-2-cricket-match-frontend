import React, { Component } from 'react'
import './Select.css'

class Select extends Component {


  render() {
    console.log("checking");
    console.log(this.props);
    const playerA = this.props.playersTA;
    const playerB = this.props.playersTB;

const nameone=playerA.map(data=>{return(data.name)})
console.log("checktwo");
console.log(nameone);
    return (
      <div className="SELECT">

        <div className="Select">

          <div className="input">

            {
              playerA.map(data => {
                return (<div key={data.id}>
                  <h2>{data.name}</h2>
                </div>)
              })
            }
          </div>
          <div className="input">

            {
              playerB.map(data => {
                return (<div key={data.id}>
                  <h2>{data.name}</h2>
                </div>)
              })
            }
          </div>



        </div>

      </div>
    )
  }
}

export default Select;
