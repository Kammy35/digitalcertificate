import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
    render(){
      return(
        <div className="navtop">
            <nav>
                {/* <ul className="nav nav-pills nav-fill">  */}
                <ul className="nav-links">

                    <li className="nav-links"><Link to="/">HOME</Link></li>
                    <li className="nav-links"><Link to="/Memories">MEMORIES</Link></li>


                </ul>


            </nav>
          
        </div>
  
      )
    }
  
  }

  export default Navbar;