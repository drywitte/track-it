import React, {Component} from "react";
import {withUser} from "../../utils/UserContext";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      props.isAuthed === true
        ? (console.log("is authed"), <Component {...props} />)
        : (console.log(props), <Redirect to='/login' />)
    )} />
  )


  export default withUser(PrivateRoute);