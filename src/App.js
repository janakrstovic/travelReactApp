import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
   <Header />
    <Route exact to="/">
    <Showcase/>
    </Route>

    <Route to="/login">
    <Login/>
    </Route>

    <Route to="/signup">
    <SignUp/>
    </Route>
     
    <Footer/> 
    </Router>
  );
}

export default App;
