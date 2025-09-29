import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import OrderPage from './components/OrderPage';
import HomePage from './components/HomePage';
import Success from './components/Success';

function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/order" component={OrderPage}/>
        <Route path="/success" component={Success}/>
      </Switch>
    </Router>
  )
}

export default App
