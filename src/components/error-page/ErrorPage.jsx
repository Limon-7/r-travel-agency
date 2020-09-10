import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./ErrorPage.css";

function ErrorPage() {
  const history = useHistory();
  return (
    <div className="errroPage">
      <h1>404</h1>
      <div></div>
      <h3>Page not found</h3>
      <Button variant="outlined" onClick={() => history.replace("/")}>
        Go Back Home
      </Button>
    </div>
  );
}

export default ErrorPage;
