import React, { Component } from 'react'
import { FaAlignRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { logo } from '../images/logo';
export default class Navbar extends Component {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to='/'>
              {/*<img src={logo} alt="Museio" /> */}
            </Link>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/galleries/'>Galleries</Link>
            </li>
            <li>
              <Link to='/stories/'>Stories</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
