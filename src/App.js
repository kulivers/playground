import { BrowserRouter, Link, Route } from "react-router-dom";
import React from "react";
import Index from "./Menu";
import Router from "./Menu/Router";
import Button from "@material-ui/core/Button";

const App = () => {
  return (
    <BrowserRouter>
      make resizer and flexGrowShrinkBasis
      <Route exact path="/" component={Index} />
      <Route
        path="/*"
        render={({ match }) =>
          match.url === "/" ? null : (
            <div style={{ display: "flex" }}>
              <Link to="/" style={{ margin: "auto", marginTop: "10px" }}>
                <Button variant="contained" color="primary">
                  go back
                </Button>
              </Link>
            </div>
          )
        }
      />
      <hr />
      <Router />
    </BrowserRouter>
  );
};

export default App;
