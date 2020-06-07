import React, { Component } from 'react'

 class Select extends Component {
  render() {
    console.log(this.props);
    const player=this.props.players;
    return (
      <div>
      {
        player.map(data=>{return(<div>
          <h1>{data.name}</h1>
        </div>)})
      }
         
      </div>
    )
  }
}

export default Select;
