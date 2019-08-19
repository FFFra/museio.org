import React, { Component } from 'react'
// import { ICON_NAME } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { logo } from '../images/logo';
export default class Navbar extends Component {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.setState.isOpen })
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
        </div>
        <div className="nav-header">
        </div>
        <Link to='/' />

      </nav>
    )
  }
}
