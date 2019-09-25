import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div >
                <div className= 'main'>
                    <div className='flex1'>
                        <div>
                        <h1>Hi, I'm </h1>
                        <h1><span >Victor Johnson</span></h1>
                        <li>Washington, DC based Web Developer</li> 
                        <li>8 years experience in Professional Services and Customer Success at analytical software startups</li>
                        
                        </div>
                    </div>
                    <div>
                        <img className='image' src="https://i.imgur.com/6uhwDfR.png"/>
                    </div>
                </div> 
                <div className='experience'>
                    <h2 >Experience with: HTML | CSS | Javascript | React.js | Node.js | MongoDB | Express.js | Django | Python</h2>
                </div>
                <div className='buttonSpacing'>   
                    <Link to='/portfolio'><button>Portfolio</button></Link>
                    <Link to='/about'><button>About Me</button></Link>
                </div>
                
            </div>
        )
    }
}

export default Home