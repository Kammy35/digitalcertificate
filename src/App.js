import React from 'react';
import './App.css';
import salfordlogo from '../src/images/salfordlogo.png'
import faceimage from '../src/images/faceimage.png'
import 'bootstrap/dist/css/bootstrap.css';

// import universitybuilding from '../src/images/universitybuilding.jpg'

class App extends React.Component {
  render(){
  return (
    <div className="App">
        <Header />
        <Student />
        <Test />
        <Navbar />
    </div>
  );
}
}


class Test extends React.Component {
  constructor(){
         super();

         this.state = {
              green: true,
              status: true
              // verified: true
         }
    }

    changeColor(){
        this.setState({
          green: !this.state.green,
          status: !this.state.status
          
        });
    }

    

    render(){
        let btn_class = this.state.green ? "greenButton" : "redButton";



        return (
             <div className="buttonbox">
                 <button id="btn-content" className={btn_class}
                         onClick={this.changeColor.bind(this)}>
                           {this.state.status ? 'Certificate Verified' : 'Failed'}
                  </button>
             </div>
             
        )
    }
}







class Header extends React.Component {
  render(){
    return(
      <div className="heading">
        {/* <img id="buildingpic" src={universitybuilding} alt="buildingpic" /> */}
        <img id="logoimg" src={salfordlogo} alt="logoimg" />
        <h1>University Of Salford</h1>
        <h2>Paper Digital Certificate</h2>
        <h3>Student Number: 007AW643</h3>

      </div>

    )
  }

}

class Student extends React.Component {
  render(){
    return(
      <div className="studentinfo">
        <img id="fcepic" src={faceimage} alt="facepicture" />
        <h4>Name: Leonardo Dicaprio</h4>
        <h4>Address: 24 Melonway, Cumbria, England, CA14 4TY </h4>
        <h4>Course: BA(hons) Business Studies</h4>
        <h4>Degree Classification:  2:1</h4>
        <h4>Dates: 2010-2014</h4>

      </div>

    )
  }
}

class Navbar extends React.Component {
  render(){
    return(
      <footer>
        <div className="nav">
          <a href="https://www.salford.ac.uk/alumni">Alumni</a>
          <a href="https://www.salford.ac.uk/alumni/keep-in-touch">Keep in Touch</a>
          <a href="https://www.salford.ac.uk/alumni/benefits-and-services">Benefits & Services</a>
          <a href="https://www.salford.ac.uk/alumni/news-and-features">News & Features</a>
          <a href="https://www.salford.ac.uk/alumni/get-involved">Get Involved</a>
          <a href="https://www.salford.ac.uk/giving">Giving</a>
        </div>
      </footer>


    )
  }
}


export default App;
