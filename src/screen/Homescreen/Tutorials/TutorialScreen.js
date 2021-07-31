import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import c from "../Tutorials/images/c.jpg";
import java from "../Tutorials/images/java.jpg";
import R from "../Tutorials/images/R.jpg";

import datas from "../Tutorials/images/datas.png";
import ComputerProgrammingLanguage from "../Tutorials/images/ComputerProgrammingLanguage.jpg";
import Golang from "../Tutorials/images/Golang.jpg";
import javaaa from "../Tutorials/images/javaaa.jpg";
import fundamental from "../Tutorials/images/fundamental.jpg";
import javascript from "../Tutorials/images/javascript.png";
import kotline from "../Tutorials/images/kotline.png";
import OOP from "../Tutorials/images/OOP.png";
import operatingsystem from "../Tutorials/images/operatingsystem.png";
import PHP from "../Tutorials/images/PHP.png";
import RR from "../Tutorials/images/RR.jpg";
import RE from "../Tutorials/images/RE.jpeg";
import rnative from "../Tutorials/images/rnative.png";
import swift from "../Tutorials/images/swift.jpg";
import web from "../Tutorials/images/web.jpg";
import software from "../Tutorials/images/software.jpg";
import PYTHON from "../Tutorials/images/PYTHON.jpg";

import "./style.css";

const lectures = [
  {
    name: "C Language",
    img: c,
    langauge: 'C'
  },
  {
    name: "Java Language",
    img: java,
    langauge: 'Java'
  },
  {
    name: "R Language",
    img: R,
    langauge: 'R'
  },
  {
    name: "Data Structure",
    img: datas,
    langauge: 'Data Structure'
  },
  {
    name: "Fundamental Computer Programming",
    img: fundamental,
    langauge: 'Fundamental Computer Programming'
  },
  {
    name: "Golang",
    img: Golang,
    langauge: 'Golang'
  },
  {
    name: "Javascript",
    img: javascript,
    langauge: 'Javascript'
  },
  {
    name: "Kotlin",
    img: kotline,
    langauge: 'Kotline'
  },
  {
    name: "Oop",
    img: OOP,
    langauge: 'Oop'
  },
  {
    name: "Operating System",
    img: operatingsystem,
    langauge: 'Operating System'
  },
  {
    name: "PHP",
    img: PHP,
    langauge: 'PHP'
  },
  {
    name: "Python",
    img: PYTHON,
    langauge: 'Python'
  },
  {
    name: "R",
    img: RR,
    langauge: 'R'
  },
  {
    name: "React",
    img: RE,
    langauge: 'React'
  },
  {
    name: "React Native",
    img: rnative,
    langauge: 'React Native'
  },
  {
    name: "Software Engineering",
    img: software,
    langauge: 'Software Engineering'
  },
  {
    name: "Swift",
    img: swift,
    langauge: 'Swift'
  },
  {
    name: "Web",
    img: web,
    langauge: "Web"
  },
];

const TutorialScreen = () => {
  const history = useHistory();
  const handleNavigation =  (data) => {
    history.push('/lectures', {data: data})
  }
  return (
    <div>
      {lectures.map((i, index) => (
        <div style={{cursor: 'pointer'}} onClick={() => handleNavigation(i.langauge)} key={index} className="box1">
          <h3>{i.name} </h3>
          <img className="imgg" src={i.img} />
          <br />
        </div>
      ))}
    </div>
  );
};

export default TutorialScreen;
