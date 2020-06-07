import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
      <Link to="/" className="link">CRICKET MATCH</Link>
      <ul>
      <li><Link to="/" className="link">HOME</Link></li>
      <li><Link to="/Enterteam" className="link">ENTERTEAM</Link></li>
      <li><Link to="/Toss" className="link">TOSS</Link></li>
      <li><Link to="/Match" className="link">MATCH</Link></li>
      <li><Link to="/Result" className="link">RESULT</Link></li>
      </ul>
    </div>
    )
  }
}

export default Navbar;
