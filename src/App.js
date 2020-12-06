import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { useStateValue } from './StateProvider';


function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">

      <Router>
        {
        !user?(
          <Login />
        ):
          <>
            <Header />

            <div className="app_body">
              <Sidebar />

              <Switch>

                <Route path="/channel/:channelId" component={Chat} />

                <Route path="/">
                </Route>

              </Switch>


            </div>
          </>
        }


      </Router>

    </div>
  );
}

export default App;
