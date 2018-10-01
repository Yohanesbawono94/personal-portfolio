import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import About from './component/About';
import Portofolio from './component/Portfolio';
import Footer from './component/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotCollapse: true,
      email: "yohanes.bawono@gmail.com",
      copied: false,
    };
    this.handleCollapse = this.handleCollapse.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  handleCollapse(e) {
    this.setState({
      isNotCollapse: !this.state.isNotCollapse
    });
  }

  copyToClipboard() {
    this.setState({
      copied: true
    });
  }

  render() {
    let styleNavbar;
    let styleCollapse;
    styleNavbar = !this.state.isNotCollapse ? {backgroundColor: "rgba(252, 252, 252, 0.8)"} : {backgroundColor: "rgba(255, 231, 135, 1)"};
    styleCollapse = !this.state.isNotCollapse ? {marginLeft: "60px"} : {marginLeft: "0px"};
    return (
      <div>
        <Navbar 
        handleCollapse={this.handleCollapse}
        styleNavbar={styleNavbar}
        styleCollapse={styleCollapse}/>
        <Header />
        <About 
        email={this.state.email}
        onCopied={this.copyToClipboard}/>
        <Portofolio />
        <Footer />
      </div>
    );
  }
}

export default App;
