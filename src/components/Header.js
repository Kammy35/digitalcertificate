import React from 'react';
import './Header.css';
import salfordlogo from '../images/salfordlogo.png'

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

  export default Header;