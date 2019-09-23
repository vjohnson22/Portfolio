import React from 'react'
import './Project.css'

class Project extends React.Component{
    
    render(){
        let tech = this.props.technologies.map((techno, i)=>{
            return <li key ={i}>{techno}</li>
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
            </div>
            
        )
    }
}

export default Project