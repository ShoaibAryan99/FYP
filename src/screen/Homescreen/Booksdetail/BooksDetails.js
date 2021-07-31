import React, { useEffect, useState } from "react";
import firebase from 'firebase';
import "./style.css";

import ai3 from '../Booksdetail/images/ai3.jpg';
import react from '../Booksdetail/images/react.jpg';
import reactnative from  '../Booksdetail/images/reactnative.jpg';
import Rprogramming from '../Booksdetail/images/Rprogramming.jpg';
import se from '../Booksdetail/images/se.jpg';
import android from '../Booksdetail/images/android.jpg';
import asembly from '../Booksdetail/images/asembly.jpg';
import cp from '../Booksdetail/images/cp.jpg'; 
import ccc from '../Booksdetail/images/ccc.jpg';
import cs from '../Booksdetail/images/cs.jpg';
import cn from '../Booksdetail/images/cn.jpg';
import ds from '../Booksdetail/images/ds.jpg';
import dm from '../Booksdetail/images/dm.jpg';
import dv from '../Booksdetail/images/dv.jpg';
import dw from '../Booksdetail/images/dw.jpg';
import java from "../Booksdetail/images/java.png"; 
import ml from '../Booksdetail/images/ml.jpg';
import oop from '../Booksdetail/images/oop.jpg';
import php from '../Booksdetail/images/php.jpg';
import py from '../Booksdetail/images/py.jpg';
import sw from '../Booksdetail/images/sw.jpg';
import web from '../Booksdetail/images/web.jpg';

const AI = 
  {
    name: "Introduction to Artificial Intelligence",
    img: ai3,
    author: " Cays C Horstmann"
  }


const Reacts = 
  {
    name: " Introduction to React  ",
    img: react,
    author: "Chris Mayfield",
  };


const ReactNative = {
    name: " React Native ",
    img: reactnative,
    author: "Chris Mayfield",
  }
 


const R = 
   {
    name: "R Pragramming",
    img: Rprogramming,
    author:" Cays C Horstmann",
  }


const Se = 
    {
    name: "SoftwareEnginereeing",
    img: se,
    author: "Allen B. Downey & Chris Mayfield",
  }
    const as=
   {
    name: "  An Introduction To Android System",
    img: android,
    author:  "Jan Graba",
   }
  
   const assemblyp =
   {
    name: " Fundamentals of Assembly Programming",
    img: asembly,
    author:   "Mitsunori Ogihara",
   }
   const cpp=
 {
    name: "C++",
   img: cp,
     author:"jan",
   }
   const fop=
   {
     name: "Fundamentals of C Programming",
     img: ccc,
     author:"Mitsunori Ogihara",
  }
  const csharp=
  {
    name: " C # Programming",
    img: cs,
     author: " Mstunio Ogihara",
  }
  const cnet=
   {
    name: "Computer Networks",
     img: cn,
     author: "Allen B. Downey & Chris Mayfield",
   }
   const dss=
   {
     name: "Data Structures ",
     img: ds,
     author:  "Allen B. Downey & Chris Mayfield",
   }
   const dmm=
   {
     name: "  Data Mining",
     img: dm,
     author: "Mitsunori Ogihara",
   }
   const dvis=
   {
     name: " Data Visualization",
     img: dv,
     author:" Mitsunori Ogihara",
   }
   const bsw=
   {
     name: " Bussines Data Warehouse",
     img: dw,
     author: "Mitsunori Ogihara",
   }
   const fojp=
   {
     name: "Fundamentals of Java Programming",
    img: java,
    author: "Mitsunori Ogihara",
   }
   const ML=
  {
    name: "Machine Learning",
    img: ml,
    author:"Mitsunori Ogihara",
   }
   const oopwc=
   {
     name: "Object Oriented Programming with C ++ & jAVA",
     img: oop,
     author:  " Allen B. Downey & Chris Mayfield",
   }
   const pwos=
   {
     name: " Programming with operating system",
    img: oop,
     author:  "Cays C Horstmann",
   }
   const itphp=
   {
     name: " Introduction to PHP ",
     img: php,
    author: "  Cays C Horstmann",
  }
  const fopp=
  {
    name: "Fundamentals of Python Programming",
    img: py,
    author:" Mitsunori Ogihara",
  }
  const fosp=
  {
    name: " Fundamentals of swift Programming",
    img: sw,
     author: "Mitsunori Ogihara",
   }
   const lwd=
   {
     name: " Learning Web Design",
    img: web,
    author: "Allen B. Downey & Chris Mayfield",
   }


const BooksDetails = (props) => {
  const [book, setBook] = useState('')
  useEffect(() => {
    console.log(props.location.state.name.name)
    if(props.location.state.name.name === 'React') {
      const firebases = firebase.storage().ref().child('reactbooks/ReactNotesForProfessionals.pdf');
      const url = firebases.getDownloadURL();
      console.log('fireabse', url)
      setBook(url)
    }
  },[])
    return (
      <div>
        {console.log(book)}
        {/* {Reacts.map((i, index) => ( */}
          <div className="d-flex justify-content-center align-items-center flex-column">
            
           <div style={{width: '500px', height: '500px'}}>
            <img className="w-100 h-100" src={Reacts.img} />
           </div>
            <div>
            <h3>{Reacts.name} </h3>
            <h4>{Reacts.author}</h4>
            </div>
            <br />
          </div>
        {/* ))} */}
      </div>
    );
  };
  export default BooksDetails;
  