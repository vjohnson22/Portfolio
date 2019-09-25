import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';

import About from './About/About'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'

class App extends Component {
  render(){
  return (
    <div>
      <nav className='navbar' >
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/portfolio'><li>Portfolio</li></Link>
          <Link to='/about'><li>About Me</li></Link>
          <a href='https://drive.google.com/file/d/1IvEaG2ixWHRpmUYWqdhLik1CrNdr7Jcw/view' target='_blank'><li>Resume</li></a>
          <a href='https://www.linkedin.com/in/vjohnson22/' target='_blank'><li>LinkedIn</li></a>
          <a href='https://github.com/vjohnson22?tab=repositories' target='_blank'><li>GitHub</li></a>
        </ul>
      </nav>
      <main>
        <Route exact path='/' component={Home}/>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Route exact path='/about' component={About}/>
      </main>
      <footer>
      Contact me @ <a href = "mailto:vjohnson22@gmail.com">vjohnson22@gmail.com</a>
      </footer>
    </div>
  )
  }
}

export default App;
