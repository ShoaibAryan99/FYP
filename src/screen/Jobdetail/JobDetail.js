import React from "react";
import { jobs } from "../../utils/endpoints";
import "./style.css";
import { Redirect } from 'react-router';

import { Link } from 'react-dom';
import firebase from 'firebase';
import { useLocation } from 'react-router-dom';



const JobDetail = (props) => {
  const componentDidMount=() => {
    if (typeof window !== 'undefined') {
         window.location.href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new";
    }
}

  
  
  return (
    <div >
      
        
      {jobs.map((i, index) => (
        <div >

         
          {i.functionalArea === props.location.state.name ? (
            <div  className="detail"   >
                <p>{i.profession}</p>
                <p>{i.company}</p>
                <p>{i.jobDescription}</p>
                <p>{i.salary}</p>
                <p>{i.industry}</p>
                <p>{i.functionalArea}</p>
                <p>{i.totalPosition}</p>
                <p>{i.jobShift}</p>
                <p>{i.jobType}</p>
                <p>{i.jobLocation}</p>
                <p>{i.gender}</p>
                <p>{i.minimumEducation}</p>
                <p>{i.careerLevel}</p>
                <p>  {i.email}</p>
                
                

                <button className="gbtn" onClick={componentDidMount}>
        send cv
          </button> 
          

          
               
      
  
            </div>
          ):null}
        </div>
      ))}
    </div>
  );
};

export default JobDetail;
