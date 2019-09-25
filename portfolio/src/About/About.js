import React from 'react'
import './About.css'

class About extends React.Component{

    render() {
        return (
            <div className='body'>
                <img className='image' src='https://i.imgur.com/29Tuw8A.jpg?1'/>
                <div>
                <p>Prior to becoming a Software Engineer, I spent the last 8 years in the SaaS industry, in the analytics space. I started as a business analyst and received several promotions in the Professional Services, and Customer Success organizations.</p> 
                <p>I hope to take my extensive experience helping corporate clients get value out of our platforms, and use that to create customer friendly products that bring value to organizations </p>
                </div>
            </div>
        )
    }
}

export default About