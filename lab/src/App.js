import React, { useState } from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";
import { Login } from "./Login";
import { Register } from "./Register";
import dilab from "./assets/images/dilab.jpg";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  card: {
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App"
    style={{
      backgroundImage: `url(${dilab})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      <Card className={classes.card} style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
        <CardContent>
          {currentForm === "login" ? (
            <Login onFormSwitch={toggleForm} />
          ) : (
            <Register onFormSwitch={toggleForm} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
