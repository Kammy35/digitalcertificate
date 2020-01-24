import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/Home'
import Memories from './components/Memories'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarPage from './components/NavbarPage'



class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarPage />

        {/* <Navbar /> */}
        <Switch>
        
          <Route exact path='/' render={ () => <Home />} />
          <Route path="/Memories" render={ () => <Memories />} />



        </Switch>

      </div>
    </BrowserRouter>

  );
}
}


export default App;
