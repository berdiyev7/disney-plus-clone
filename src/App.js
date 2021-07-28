import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Login from './components/Login';
import Header from './components/Header';

function App() {
   return (
      <>
         <Router>
            <Header />
            <Switch>
               <Route exact path="/" >
                  <Login />
               </Route>
            </Switch>
         </Router>
      </>
   );
}

export default App;
