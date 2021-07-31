import React, { useState } from "react";
import firebase from "firebase";
import { NotificationManager } from "react-notifications";
import { Sentry } from "react-activity";
import { useHistory } from "react-router-dom";
import "./style.css";

import InputField from "../../components/input";

const SignupScreen = () => {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    fname: "",
    lname: "",
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
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(async(res) => {
        if (res.user) {
          res.user.updateProfile({
            displayName: `${data.fname} ${data.lname}`,
          });
          await firebase
            .database()
            .ref("/auth/")
            .push(data)
            .then((res) => {
              setIsLoading(false);
              console.log("User created successfully", res);
              history.replace("/login");
              NotificationManager.success("User has been created successfully");
            })
            .catch((err) => {
              setIsLoading(false);
              NotificationManager.error("Something went wrong");
            });
        }
      });
  };
  return (
    <div className="main">
      <div className="internal">
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit} id="internal">
          <label>First Name</label>
          <input
            required
            onChange={handleChange}
            value={data.fname}
            type="text"
            name="fname"
            placeholder="Enter Firstname"
          />
          <br />
          <br />

          <label>Last Name</label>
          <input
            required
            value={data.lname}
            onChange={handleChange}
            type="text"
            name="lname"
            placeholder="Enter Lastname"
          />
          <br />
          <br />

          <label>Enter Email</label>
          <input
            value={data.email}
            onChange={handleChange}
            type="email"
            name="email"
            required
            placeholder="Enter Email"
          />
          <br />
          <br />
          <label>Enter Password</label>
          <input
            required
            value={data.password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter Password"
          />
          <br />
          <br />
          <button className="button">
            {isLoading ? <Sentry size={20} /> : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignupScreen;
