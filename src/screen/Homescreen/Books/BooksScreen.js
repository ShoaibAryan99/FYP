import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import firebase from 'firebase'

import "./style.css";


import RE from '../Books/images/RE.jpeg';
import rnative from '../Books/images/rnative.png';
import RR from '../Books/images/RR.jpg';
import software from '../Books/images/software.jpg';
import artifi from '../Books/images/artifi.jpg';
import android from '../Books/images/android.jpg';
import assemmbly from '../Books/images/assemmbly.jpg';
import cpp from '../Books/images/c++.jpg';
import c from  '../Books/images/c.jpg';
import csharp from '../Books/images/csharp.jpg';
import compn from '../Books/images/compn.jpg';
import datas from '../Books/images/datas.png';
import datamin from '../Books/images/datamin.jpg';
import datavis from '../Books/images/datavis.jpeg';
import datawar from '../Books/images/datawar.png';
import java from '../Books/images/java.jpg';
import machineler from '../Books/images/machineler.jpg';
import oop from '../Books/images/OOP.png';
import os from '../Books/images/os.jpg';
import php from '../Books/images/PHP.png';
import python from '../Books/images/python.jpg';
import swift from '../Books/images/swift.jpg';
import web from '../Books/images/web.png';


const Books = [
  {
    name: "Artificial intelligence",
    img: artifi,
  },
  {
    name: "React",
    img: RE,
  },
  {
    name: "React Native",
    img: rnative,
  },
  {
    name: "R language",
    img: RR,
  },
  {
    name: "Softwrare Engineering",
    img: software,
  },
  {
    name: "Android",
    img: android,
  },
  {
    name: "Assembly",
    img: assemmbly,
  },
  {
    name: "C++",
    img: cpp,

  },
  {
    name: "C ",
    img: c,

  },
  {
    name: "C Sharp",
    img: csharp,

  },
  {
    name: "Computer Network",
    img: compn,

  },
  {
    name: "Data Structure",
    img: datas,

  },
  {
    name: "Data Mining",
    img: datamin,

  },
  {
    name: "Data Visulization",
    img: datavis,

  },
  {
    name: "Data Ware",
    img: datawar,

  },
  {
    name: "Java",
    img: java,

  },
  {
    name: "Machine Learning",
    img: machineler,

  },
  {
    name: "Oop",
    img: oop,

  },
  {
    name: "Operating System",
    img: os,

  },
  {
    name: "Php",
    img: php,

  },
  {
    name: "Python",
    img: python ,

  },
  {
    name: "Swift",
    img: swift,

  },
  {
    name: "Web",
    img: web,

  },
  


];


const BooksScreen = () => {
  const handleNavigation = async (value) => {
    if(value.name === 'React') {
      const firebases = await firebase.storage().ref().child('reactbooks/ReactNotesForProfessionals.pdf');
      const url = await  firebases.getDownloadURL();
      window.open(url, "_blank")
      // console.log('fireabse', url)
      // setBook(url)
    }
    else if(value.name === 'Artificial intelligence') {
      const firebases = await firebase.storage().ref().child('artificialIntelligenceBooks/ai_100_report_0831fnl.pdf');
      const url = await  firebases.getDownloadURL();
      window.open(url, "_blank")
      // console.log('fireabse', url)
      // setBook(url)
    }
    if(value.name === 'React Native') {
    const firebases = await firebase.storage().ref().child('reactNativeBooks/ReactNativeNotesForProfessionals.pdf');
      const url = await  firebases.getDownloadURL();
      window.open(url, "_blank")
      // console.log('fireabse', url)
      // setBook(url)
    }
    else if(value.name === 'Rbook') {
      const firebases = await firebase.storage().ref().child('Rbook/RNotesForProfessionals.pdf');
      const url = await  firebases.getDownloadURL();
      window.open(url, "_blank")
      // console.log('fireabse', url)
      // setBook(url)
    }

    if(value.name === 'Softwrare Engineering') {
      const firebases = await firebase.storage().ref().child('software engineering books/ReactNativeNotesForProfessionals.pdf');
        const url = await  firebases.getDownloadURL();
        window.open(url, "_blank")
        // console.log('fireabse', url)
        // setBook(url)
      }
      else if(value.name === 'Android') {
        const firebases = await firebase.storage().ref().child('androidbooks/AndroidNotesForProfessionals.pdf');
        const url = await  firebases.getDownloadURL();
        window.open(url, "_blank")
        // console.log('fireabse', url)
        // setBook(url)
      }

      if(value.name === 'Assembly') {
        const firebases = await firebase.storage().ref().child('assemblybooks/assemblybook.pdf');
          const url = await  firebases.getDownloadURL();
          window.open(url, "_blank")
          // console.log('fireabse', url)
          // setBook(url)
        }
        else if(value.name === 'C++') {
          const firebases = await firebase.storage().ref().child('c++ book/Cpp123uo00es0162.pdf');
          const url = await  firebases.getDownloadURL();
          window.open(url, "_blank")
          // console.log('fireabse', url)
          // setBook(url)
        }

        if(value.name === 'C') {
          const firebases = await firebase.storage().ref().child('cbooks/CNotesForProfessionals.pdf');
            const url = await  firebases.getDownloadURL();
            window.open(url, "_blank")
            // console.log('fireabse', url)
            // setBook(url)
          }
          else if(value.name === 'C Sharp') {
            const firebases = await firebase.storage().ref().child('cSharpBooks/Data Structures And Algorithms Using Csharp.pdf');
            const url = await  firebases.getDownloadURL();
            window.open(url, "_blank")
            // console.log('fireabse', url)
            // setBook(url)
          }

          if(value.name === 'Computer Network') {
            const firebases = await firebase.storage().ref().child('computerNetworkBooks/Algorithms And Networking For Computer Games.pdf');
              const url = await  firebases.getDownloadURL();
              window.open(url, "_blank")
              // console.log('fireabse', url)
              // setBook(url)
            }
            else if(value.name === 'Data Structure') {
              const firebases = await firebase.storage().ref().child('dataSructureBooks/Data Structures And Algorithm Analysis In Cpp 4th Edition.pdf');
              const url = await  firebases.getDownloadURL();
              window.open(url, "_blank")
              // console.log('fireabse', url)
              // setBook(url)
            }
    
            if(value.name === 'Data Mining') {
              const firebases = await firebase.storage().ref().child('dataMiningBooks/Big Data Data Mining And Machine Learning.pdf');
                const url = await  firebases.getDownloadURL();
                window.open(url, "_blank")
                // console.log('fireabse', url)
                // setBook(url)
              }
              else if(value.name === 'Data Visulization') {
                const firebases = await firebase.storage().ref().child('data visualization books/Data Structures And Algorithm Analysis In Cpp 4th Edition.pdf');
                const url = await  firebases.getDownloadURL();
                window.open(url, "_blank")
                // console.log('fireabse', url)
                // setBook(url)
              }

              if(value.name === 'Data Ware') {
                const firebases = await firebase.storage().ref().child('dataWarehouseBooks/epdf.pub_data-warehousing-olap-and-data-mining.pdf');
                  const url = await  firebases.getDownloadURL();
                  window.open(url, "_blank")
                  // console.log('fireabse', url)
                  // setBook(url)
                }
                else if(value.name === 'Java') {
                  const firebases = await firebase.storage().ref().child('javabook/2018_Book_FundamentalsOfJavaProgramming.pdf');
                  const url = await  firebases.getDownloadURL();
                  window.open(url, "_blank")
                  // console.log('fireabse', url)
                  // setBook(url)
                }

                if(value.name === 'Machine Learning') {
                  const firebases = await firebase.storage().ref().child('machineLearningBooks/Machine_Learning_in_Action.pdf');
                    const url = await  firebases.getDownloadURL();
                    window.open(url, "_blank")
                    // console.log('fireabse', url)
                    // setBook(url)
                  }
                  else if(value.name === 'Oop') {
                    const firebases = await firebase.storage().ref().child('oop books/Object-Oriented JavaScript - FreePdfBook.pdf');
                    const url = await  firebases.getDownloadURL();
                    window.open(url, "_blank")
                    // console.log('fireabse', url)
                    // setBook(url)
                  }

                  if(value.name === 'Operating System') {
                    const firebases = await firebase.storage().ref().child('machineLearningBooks/Machine_Learning_in_Action.pdf');
                      const url = await  firebases.getDownloadURL();
                      window.open(url, "_blank")
                      // console.log('fireabse', url)
                      // setBook(url)
                    }
                    else if(value.name === 'Php') {
                      const firebases = await firebase.storage().ref().child('phpbooks/PHP MySQL Javascript And HTML5 All-In-One For Dummies.pdf');
                      const url = await  firebases.getDownloadURL();
                      window.open(url, "_blank")
                      // console.log('fireabse', url)
                      // setBook(url)
                    }

                    if(value.name === 'Python') {
                      const firebases = await firebase.storage().ref().child('pythonbooks/PythonNotesForProfessionals.pdf');
                        const url = await  firebases.getDownloadURL();
                        window.open(url, "_blank")
                        // console.log('fireabse', url)
                        // setBook(url)
                      }
                      else if(value.name === 'Swift') {
                        const firebases = await firebase.storage().ref().child('swiftbooks/SwiftNotesForProfessionals.pdf');
                        const url = await  firebases.getDownloadURL();
                        window.open(url, "_blank")
                        // console.log('fireabse', url)
                        // setBook(url)
                      }

                      if(value.name === 'Web') {
                        const firebases = await firebase.storage().ref().child('webBooks/PHP MySQL Javascript And HTML5 All-In-One For Dummies.pdf');
                          const url = await  firebases.getDownloadURL();
                          window.open(url, "_blank")
                          // console.log('fireabse', url)
                          // setBook(url)
                        }
  

  }
  return (
    <div>
      {Books.map((i, index) => (
        <div key={index} onClick={() => handleNavigation(i)} className="box1">
          <h3>{i.name} </h3>
          <img className="imgg" src={i.img} />
          <br />
        </div>
      ))}
    </div>
  );
};
export default BooksScreen;
