import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import BookedRooms from "./components/BookedRooms";

function App() {
  const verifyAuth = () => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
    // window.location.href = "/login";
    // alert("wrong details");
    // stay on this route since the user is not authenticated
  };
  // function verifyAuth(nextState, replace, next) {
  //   console.log("hello");
  //   if (!localStorage.getItem("token")) {
  //     // replace({
  //     //   pathname: "/login",
  //     //   state: { nextPathname: nextState.location.pathname },
  //     // });
  //     window.location.href = "/";
  //   }
  //   window.location.href = "/login";
  //   // alert("wrong details");
  // }
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            verifyAuth();
            return <Home />;
          }}
        />
        <Route
          exact
          path="/rooms/"
          render={() => {
            verifyAuth();
            return <Rooms />;
          }}
        />
        <Route
          exact
          path="/contact"
          // component={ContactUs}
          // onEnter={verifyAuth}
          render={() => {
            verifyAuth();
            return <ContactUs />;
          }}
        />
        <Route
          exact
          path="/booking-details"
          // component={ContactUs}
          // onEnter={verifyAuth}
          render={() => {
            verifyAuth();
            return <BookedRooms />;
          }}
        />
        <Route
          exact
          path="/rooms/:slug"
          component={SingleRoom}
          // render={() => {
          //   verifyAuth();
          //   return <SingleRoom />;
          // }}
        />
        <Route exact path="/login" component={Login} onEnter={verifyAuth} />
        <Route exact path="/signup" component={Signup} onEnter={verifyAuth} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
