import React, { Component } from 'react'

 class Add extends Component {
   state={name:null,id:null}
   handleChange=(e)=>{return(this.setState({[e.target.id]:e.target.value}))}
   handleSubmit=(e)=>{
     e.preventDefault();
   this.props.add(this.state);
  
}

   render() {
    
    return (
      
      <div className="Add">
          <form onSubmit={this.handleSubmit}>
             <lable html></lable>
             <input type="text" id="name" placeholder="playername" onChange={this.handleChange} />
             <button>ADD</button>
          </form>
      </div>
    )
  }
}

export default Add;