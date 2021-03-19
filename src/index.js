import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Routers from "./routers";

ReactDOM.render(
  <React.Fragment>
    <Routers />
  </React.Fragment>,
  document.getElementById("root"),
);
