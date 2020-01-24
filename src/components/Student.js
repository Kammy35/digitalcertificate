import React from 'react';
import './Student.css';
import faceimage from '../images/faceimage.png'


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

  export default Student;