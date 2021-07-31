import React, { Component } from "react";
import "./style.css";
import InputField from "../../components/input";
import Image from '../Homescreen/images/boxess.jpg';
 import videos from '../Homescreen/videos/bgvid.webm';
 import Books from '../Homescreen/videos/Books.mp4';
 import tutorials from '../Homescreen/videos/tutorials.webm';
 import job  from '../Homescreen/videos/job.webm';

 import jobs from '../Homescreen/videos/jobs.webm';
 import enjoy from '../Homescreen/videos/enjoy.webm';
 import university from '../Homescreen/videos/university.webm';
 import readingbook from '../Homescreen/videos/readingbook.mp4';
import main from '../Homescreen/videos/main.mp4';
import benefit from '../Homescreen/images/benefit.jpg'
import { Link } from "react-router-dom";
class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <div className="HOME">
        
        <header className="top">
        <div className="topvid">
       <video autoPlay loop muted>
         <source src={main} type="video/mp4"></source>
         </video>
         </div>
        
          <div className="navbar">
            <ul className="ull">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
          <div className="webname">
            <h1>IT-STACK</h1>
            <p>
              IT-stack offer five modules for IT students for their education
              guidance.
            </p>
          </div>
          
          
        </header>
        
        
        
        
        
       
        <br />
        <div className="modules">

        <div className="videos"> 
        <h3>Enjoy every point of learning</h3>
        
          
            <video autoPlay loop muted  className="video1" >
            <source src={job}  type="video/webm"></source>
            </video>
            
         
            
            <video autoPlay loop muted  className="video2">
              <source src={tutorials}  type="video/webm"></source>
            </video>
            

            
            <video autoPlay loop muted className="video3">
              <source src={university}  type="video/webm"></source>
            </video>
            
            
            <video autoPlay loop muted className="video4">
              <source src={jobs}  type="video/webm" ></source>
            </video>
            
            
            <video autoPlay loop muted  className="video5">
              <source src={readingbook}  type="video/mp4"></source>
            </video>

            <video autoPlay loop muted  className="video6">
              <source src={enjoy}  type="video/webm"></source>
            </video>
           


          
          

        </div>
        
        </div>
         {/* <video autoPlay loop muted>
            <source  src={videos} type="video/webm"></source>
          </video>
            {/* <img src={Image} /> */} 
       
        <div className="boxbody">
          <div className="box">
            <div className="box-1">
              <h3>IT UNVERSTIES</h3>
              <p>
                IT universties in pakistan students can get information related
                their interest and vice versa.{" "}
              </p>
              <br />
              <a href="#Go">GO</a>
            </div>

            <div className="box-2">
              <h3>Tutorials</h3>
              <p>
                IT programming languages tutorials students can learn language
                skills from tutorials.
              </p>
              <br />
              <br />
              
              <a href="#Go">GO</a>
              
            </div>
            <div className="box-3">
              <h3>Jobs</h3>
              <p>
                Jobs for IT students will be inform relatd their interest by
                company .
              </p>
              <br />
              <br />
              <br />
              <a href="#Go">GO</a>
            </div>
            <div className="box-4">
              <h3>Books</h3>
              <p>
                IT studenst can easily get smesters books and can download them.
              </p>
              <br />
              <br />
              <br />
              <a href="#Go">GO</a>
            </div>
            <div className="box-5">
              <h3>Problem Solving Module</h3>
              <p>Students can get solution of their problems relatd courses.</p>
              <br />
              <a href="#Go">GO</a>
            </div>
          </div>
        </div>
        <br />

        <div className="featureblock">
          <div className="features">
            <div className="benefit">
              
              <h4>This Website Will help Of You </h4>
              <p>
              Users will be happier when they may find all the stuff
                accordance with the profession within a single platform. All
                related material might be on a single platform that may provide
                the motivation to the learners to enhance skills by using this
                website. So,by visiting or installing this website. Concerned
                resources may available on this platform that may help out to
                find solutions of their problems. People can find the solutions
                of problems by uploading their problem in problem solution
                cell.Semester wise courses will be the huge advantage to whom
                that are not enrolling in universities, they can learn about
                these technologies online 
              </p>
            </div>
            <div className="functionality">
              <img src={benefit} className="funcimg"></img>
          </div>
        </div>
        </div>
        <br />
        <div className="foot">
          <footer class="site-footer">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <h6>About</h6>
                  <p class="text-justify">
                    Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an
                    initiative to help the upcoming programmers with the code.
                    Scanfcode focuses on providing the most efficient code or
                    snippets as the code wants to be simple. We will help
                    programmers build up concepts in different programming
                    languages that include C, C++, Java, HTML, CSS, Bootstrap,
                    JavaScript, PHP, Android, SQL and Algorithm.
                  </p>
                </div>

                <div class="col-xs-6 col-md-3">
                  <h6>Categories</h6>
                  <ul class="footer-links">
                    <li>
                      <a href="http://scanfcode.com/category/c-language/">C</a>
                    </li>
                    <li>
                      <a href="http://scanfcode.com/category/front-end-development/">
                        UI Design
                      </a>
                    </li>
                    <li>
                      <a href="http://scanfcode.com/category/back-end-development/">
                        PHP
                      </a>
                    </li>
                    <li>
                      <a href="http://scanfcode.com/category/java-programming-language/">
                        Java
                      </a>
                    </li>
                    <li>
                      <a href="http://scanfcode.com/category/android/">
                        Android
                      </a>
                    </li>
                    <li>
                      <a href="http://scanfcode.com/category/templates/">
                        Templates
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-xs-6 col-md-3">
                  <h6>Quick Links</h6>
                  <ul class="footer-links">
                    <li>
                      <a href="http://scanfcode.com/about/">About Us</a>
                    </li>
                    <li>
                      <a href="http://scanfcode.com/contact/">Contact Us</a>
                    </li>
                    <li>
                      <a href="http://scanfcode.com/contribute-at-scanfcode/">
                        Contribute
                      </a>
                    </li>
                    <li>
                      <a href="http://scanfcode.com/privacy-policy/">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr></hr>
            </div>

            <div class="container">
              <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                  <p class="copyright-text">
                    Copyright &copy; 2017 All Rights Reserved by
                    <a href="#">Scanfcode</a>.
                  </p>
                </div>

                <div class="col-md-4 col-sm-6 col-xs-12">
                  <ul class="social-icons">
                    <li>
                      <a class="facebook" href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a class="twitter" href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a class="dribbble" href="#">
                        <i class="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
