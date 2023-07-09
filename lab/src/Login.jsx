import React, { useState } from "react";
import { createMuiTheme, ThemeProvider, TextField, Button } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000", // Cambia el color de fondo del botón
    },
    text: {
      primary: "#000000", // Cambia el color del texto en los TextField
    },
  },
});

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            value={email}s
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
          />
          <TextField
            label="Contraseña"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="******"
            style={{ marginTop: theme.spacing(2) }}
          />
          <Button variant="contained" color="primary" type="submit" style={{ marginTop: theme.spacing(4) }}>
            Log In
          </Button>
          
        </form>
        <Button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Registrate aquí
        </Button>
      </div>
    </ThemeProvider>
  );
};
    