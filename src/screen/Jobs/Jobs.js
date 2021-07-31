import React from 'react';
import "./style.css";
const name = [
    {
        name: 'SEO',
    },
    {
        name: 'UI/UX',
    },
    {
        name:'Front End Developer',
    },
    {
        name:'React js',
    },
    {
        name:'Web Development',
    },
    {
        name:'angular',
    },
    
    
    {
        name:'React Native',
    },
    {
        name:'App Development',
    },
    {
        name:'Node Js',
    },
    {
        name:'Flutter',
    },
    {
        name:'Web Developer',
    },
    {
        name:'Php',
    },
    {
        name:'Backend End Developer',
    },
    {
        name:'Backend Developer',
    },
    {
        name:'Laravel',
    },
    {
        name:'Full Stack',
    },
    {
        name:'Word Press',
    },
    {
        name:'Django',
    },
    {
        name:'Python',
    },
    {
        name:'Web Scraping',
    },
    {
        name:'CONTENT WRITING',
    },
    {
        name:'Angular',
    },
    
    
]

const JobScreen = (props) => {
    const handleNavigation = (value) => {
        props.history.push('JobDetail', {name: value})
    }
    return ( 
        <div>
        {name.map((i, index) => (
        <div onClick={() => handleNavigation(i.name)} className="box-b">
            
                <h5>{i.name}</h5>
                </div>
            ))}
        </div>
     );
}
 
export default JobScreen;