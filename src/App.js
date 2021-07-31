import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Route, Switch, BrowserRouter,Link } from "react-router-dom";




import { NotificationContainer } from "react-notifications";
import firebase from "firebase";

import LoginScreen from "./screen/Login/LoginScreen";
import SignupScreen from "./screen/Signup/SignupScreen";
import TutorialScreen from "./screen/Homescreen/Tutorials/TutorialScreen";
import HomeScreen from "./screen/Homescreen/HomeScreen";
import VideoLectures from './components/videoLectures';
import BooksScreen from './screen/Homescreen/Books/BooksScreen';
import BooksDetails from './screen/Homescreen/Booksdetail/BooksDetails';
import JobScreen from './screen/Jobs/Jobs';
import JobDetail from './screen/Jobdetail/JobDetail';
import UniversityScreen  from './screen/Universities/UniversityScreen';

import "./App.css";
import InputField from "./components/input";

export const firebaseConfig = {
  apiKey: "AIzaSyAC8IUU7fTox1vW6WZ9fTKGr9fFwVP2hBQ",
  authDomain: "skilled-eon-250517.firebaseapp.com",
  databaseURL: "https://skilled-eon-250517.firebaseio.com",
  projectId: "skilled-eon-250517",
  storageBucket: "gs://skilled-eon-250517.appspot.com",
  messagingSenderId: "215931286851",
  appId: "1:215931286851:web:a0f329f19a9360eb",
};

const  App = () =>  {
  useEffect(() => {
    // if(!firebase.app.length) {
    console.log("heelpo brother");
    if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    
    // }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={["/", "/login"]} exact component={LoginScreen} />

          <Route path="/Signup" exact component={SignupScreen} />
          <Route path="/Tutorials" exact component={TutorialScreen} />
          <Route path='/lectures' exact component={VideoLectures} />
          <Route path="/Homescreen" exact component={HomeScreen} />
          <Route path="/Books" exact component={BooksScreen} />
          <Route path="/Booksdetail" exact component={BooksDetails} />
          <Route path="/JobScreen" exact component={JobScreen} />
          <Route path='/JobDetail' exact component={JobDetail} />
          <Route path='/Universities' exact component={UniversityScreen} />
          
        </Switch>
      </BrowserRouter>
      <NotificationContainer />
    </>
  );
}

export default App;
