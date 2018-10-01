import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
  render() {
    return (
        <nav id="navbar" style={this.props.styleNavbar} className="navbar navbar-light navbar-expand-lg">
            <a className="navbar-brand">Yohanes Bawono</a>
            <button onClick={this.props.handleCollapse} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarSupportedContent" style={this.props.styleCollapse}>
                <ul className="navbar-nav ml-auto flex-nowrap">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default Navbar;


