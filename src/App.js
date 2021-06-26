import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
   <Header />
    <Route exact path="/">
    <Showcase/>
    {/* <Destinations/>*/}
    </Route>

    <Route path="/login">
    <Login/>
    </Route>

    <Route path="/signup">
    <SignUp/>
    </Route>
     
    <Footer/> 
    </Router>
  );
}

export default App;
