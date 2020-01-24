import React from 'react';
import './Test.css';


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
                             {this.state.status ? 'VALID Certificate' : 'INVALID Certificate'}
                    </button>
               </div>
               
          )
      }
  }
  
  export default Test;