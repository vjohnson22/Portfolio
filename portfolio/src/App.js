import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';

import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'

class App extends Component {
  render(){
  return (
    <div>
      <nav className='navBar'>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/portfolio'><li>Portfolio</li></Link>
          <li>Resume</li>
          <li>LinkedIn</li>
        </ul>
      </nav>
      <main>
        <Route exact path='/' component={Home}/>
        <Route exact path='/portfolio' component={Portfolio}/>
      </main>
    </div>
  )
  }
}

export default App;
