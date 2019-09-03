import React, {Component} from 'react';

import './App.css';

class App extends Component {
  render(){
  return (
    <div>
      <nav className='navBar'>
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>LinkedIn</li>
        </ul>
      </nav>
    </div>
  )
  }
}

export default App;
