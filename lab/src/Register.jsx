import React, { useState } from "react";
import { TextField, Button, Radio, RadioGroup, FormControlLabel, makeStyles, ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    marginBottom: theme.spacing(1),
  },
  radioGroup: {
    flexDirection: "row",
    marginBottom: theme.spacing(1),
  },
  registerButton: {
    marginBottom: theme.spacing(1),
    borderRadius: "20px",
  },
  linkButton: {
    background: "none",
    color: "black",
  },
}));

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [genero, setGenero] = useState("");
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='auth-form-container'>
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
            placeholder="Tu nombre aquí"
          />
          <RadioGroup
            className={classes.radioGroup}
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            row
          >
            <FormControlLabel value="hombre" control={<Radio color="primary" />} label="Hombre" />
            <FormControlLabel value="mujer" control={<Radio color="primary" />} label="Mujer" />
          </RadioGroup>
          <TextField
            className={classes.textField}
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
          />
          <TextField
            className={classes.textField}
            label="Contraseña"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="******"
          />
          <Button
            className={classes.registerButton}
            variant="contained"
            color="primary"
            type="submit"
          >
            Registrar
          </Button>
        </form>
        <Button className={classes.linkButton} onClick={() => props.onFormSwitch("login")}>
          ¿Ya tienes cuenta? Inicia sesión aquí
        </Button>
      </div>
    </ThemeProvider>
  );
};