import React from 'react'
import './Project.css'

class Project extends React.Component{
    
    render(){
        let tech = this.props.technologies.map((techno, i)=>{
            return <li className='techList'key ={i}>{techno}</li>
        }) 
        let git = this.props.github.map((git, i)=>{
            return <a href={git} target='_blank'><span className='link' key ={i}>  Link  </span></a>
        })
        return(
            <div className='box'>
                    <a className = 'title' href= {this.props.link} target='_blank'>{this.props.name} </a>
                    <div className='imgContainer'>
                        <img src = {this.props.screenshot}/>
                    </div>
                    <div>
                        {this.props.description}
                    </div>
                    <div className='techs'>
                        <h3>Technologies Used:</h3>
                        <ul>
                            {tech}
                        </ul>
                     
                    </div>
                    <div className='git'>
                        <span>  Github Repositories:  </span>{git}
                    </div>
            </div>
            
        )
    }
}

export default Project