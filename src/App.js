import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import Products from './components/products';
//import Profile from './components/profile';
import { Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Navbar/>
     
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/products" component={Products}/>
     
      
    </div>
  );
}

export default App;
