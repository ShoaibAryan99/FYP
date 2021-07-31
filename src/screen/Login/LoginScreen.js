import React, { Component, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import firebase from "firebase";

import "./style.css";

import InputField from "../../components/input";

const LoginScreen = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const obj = { ...data };
    obj[event.target.name] = event.target.value;
    setData(obj);
  };
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    console.log(data);
    await firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        setIsLoading(false);
        console.log("user created succesfully", res);
        history.replace("/Homescreen");
        NotificationManager.success("user has been created successfully");
      })
      .catch((err) => {
        console.log("err", err);
        setIsLoading(false);
        NotificationManager.error(err.message);
      });
  };

  return (
    <div className="head">
      <div className="inside">
        <h3>Login</h3>
        <form onSubmit={handleSubmit} id="inside">
          <label>Email</label>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Enter Email"
          ></input>
          <br />
          <br />

          <label>Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter password"
          ></input>
          <br />
          <br />

          <button className="btn">Login</button>
          <p className="clickhere">
            if you do not have account then click here.
            <Link to="/Signup">Signup</Link>
          </p>
        </form>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default LoginScreen;
