import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">

      <Router>

      <Header />

      <div className="app-body">
        <Sidebar />

        <Switch>

          <Route path="/channel/:channelId">
            <Chat />
          </Route>

          <Route path="/">
          </Route>

        </Switch>


      </div>

      </Router>

    </div>
  );
}

export default App;
