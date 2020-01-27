import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import Header from './components/layout/Header';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Registration from './components/Registration';
import Profile from './components/Profile';
import EditUserScren from './screen/EditUserScren';

function App() {
  return (
    <div className="App">
      <Router>
      <header>
       <Header />
      </header>
      <Route path={"/"} exact component={Homepage}></Route>
      
      <Route path={"/profile"} exact component={Profile}></Route>
      <Route path={"/edituserscren"} exact component={EditUserScren}></Route>

      <Login />
      <Route path={"/registration"} exact component={Registration}></Route>
      </Router>
      
    </div>
  );
}

export default App;
