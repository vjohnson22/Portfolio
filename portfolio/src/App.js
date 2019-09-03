import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './Home/Home'
import './App.css';

class App extends Component {
  render(){
  return (
    <div>
      <nav className='navBar'>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>LinkedIn</li>
        </ul>
      </nav>
      <main>
        <Route path='/' component={Home}/>
      </main>
    </div>
  )
  }
}

export default App;
