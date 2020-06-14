import React, { Component } from 'react'
import './Add.css'

class Add extends Component {
  state = { name: null, id: null, countone: 0, counttwo: 0 ,APMN:[],NM:null,nobj:{name:null}}
  handleChangeTA = (e) => {
    this.setState({NM:e.target.value})
   let MMMM=this.state.nobj;
   MMMM[e.target.value.name]=e.target.value;
   this.setState({nobj:MMMM})
   /* let NMobj={name:NM}
    this.setState({...this.state,APMN:[...this.state.APMN,NMobj]});
    console.log("nnnnnnnnn");
    console.log(this.state.APMN)*/
    return (this.setState({ [e.target.id]: e.target.value }));        
  }
  handleChangeTB = (e) => {
   // this.setState({NM:e.target.value})
   // this.setState({nobj:{...this.state.nobj,name:this.state.NM}})
   //this.setState(Object.assign(this.state.nobj,{name:this.state.NM})); 
   return (this.setState({ [e.target.id]: e.target.value }))
  }
  //passooon=(e)=>{ }
  handleSubmitA = (e) => {
    
    this.setState({ countone: this.state.countone + 1 });
    e.preventDefault();
    this.props.addA(this.state);

   /* this.setState({...this.state,APMN:[...this.state.APMN,this.state.nobj]});
    console.log("Try Try Try Try TTTTTTT")
    console.log(this.state.APMN)*/
   
  }
  handleSubmitB = (e) => {
    this.setState({ counttwo: this.state.counttwo + 1 });
    e.preventDefault();
    this.props.addB(this.state);

    /*this.setState({...this.state,APMN:[...this.state.APMN,this.state.nobj]});
    console.log("TTTTTTTTTTT")
    console.log(this.state.APMN)
  */  }


  render() {
    const FIRST = { display: '' }
    if (this.state.countone === 11) { FIRST.display = 'none' }
    const SECOND = { display: '' }
    if (this.state.counttwo === 11) { SECOND.display = 'none' }

    return (

      <div className="ADD">

        <div className="Add">
          <div className="input">
            <h4>ADD PLAYERS FOR 1ST TEAM</h4>
            <form onSubmit={this.handleSubmitA} id="Aone">
              <input type="text" id="name" placeholder="playername" onChange={this.handleChangeTA} style={FIRST} />
              <button style={FIRST}>ADD</button>
            </form>
          </div>

          <div className="input">
            <h4>ADD PLAYERS FOR 2ND TEAM</h4>
            <form onSubmit={this.handleSubmitB} id="Atwo">
              <input type="text" id="name" placeholder="playername" onChange={this.handleChangeTB} style={SECOND} />
              <button style={SECOND}>ADD</button>
            </form>
          </div>
        </div>
        {/*<button onClick={this.passooon}>submit</button>*/}
      </div>
    )
  }
}

export default Add;