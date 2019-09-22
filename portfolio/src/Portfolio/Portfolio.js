import React from 'react'
import data  from '../links'
import Project from '../Project/Project'
import './Portfolio.css'

class Portfolio extends React.Component{
    render(){
        // add a for loop that will create new project components for each project 
        let projects = data.map( (datum, i) => {
            return <Project key ={i} {...datum}/>
        })

        return(
            <div className ='grid'>
                
                
                {projects}
            </div>
        )
    }
}

export default Portfolio