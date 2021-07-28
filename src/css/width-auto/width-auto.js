import React, { Component, useEffect } from "react";
import "./width-auto.css";
import { Link, BrowserRouter, Route, withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

const WidthAuto = ({ match }) => {
  return (
    <div>
      <>
        <Link to={`${match.path}/width-100`}> width 100%</Link>
        <Link to={`${match.path}/width-auto`}> width-auto</Link>
      </>

      <Route
        path="*/width-100"
        render={(p) => {
          return (
            <div style={{ border: "2px red solid" }}>
              <div className="width-100">
                div with width:100%; U CAN SCROOL --->
              </div>
            </div>
          );
        }}
      />

      <Route
        path="*/width-auto"
        render={(p) => (
          <div style={{ border: "2px red solid" }}>
            <div className="width-auto">div with width:auto; NO SCROLL</div>
          </div>
        )}
      />
    </div>
  );
};

export default withRouter(WidthAuto);
