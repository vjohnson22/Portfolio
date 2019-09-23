import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div className= 'main'>
                <div>
                    <h1>Hi, I'm <span >Victor Johnson</span></h1>
                    <h2>I'm a Washington, DC based Web Developer with 8 years experience in Professional Services and Customer Success at analytical software startups</h2>
                </div>
                <img className='image' src="https://i.imgur.com/6uhwDfR.png"/>
                <div>
                    <Link to='/portfolio'><button>See What I've Created</button></Link>
                </div>
            </div>
        )
    }
}

export default Home