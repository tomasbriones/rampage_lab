import React, { useState } from "react";

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [genero, setGenero] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="Name">Nombre</label>
                <input value= {name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Tu nombre aqui" id="name" name="name" />
                <div className="genero">
                    <label htmlFor="Genero">Genero</label>
                        <input
                            type="radio"
                            id="hombre"
                            name="genero"
                            value="hombre"
                            checked={genero === 'hombre'}
                            onChange={(e) => setGenero(e.target.value)}
                        /> hombre
                        <input
                            type="radio"
                            id="mujer"
                            name="genero"
                            value="mujer"
                            checked={genero === 'mujer'}
                            onChange={(e) => setGenero(e.target.value)}
                        /> mujer
                </div>
                <label htmlFor="email">Email</label>
                <input value= {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Contraseña</label>
                <input value= {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password" />
                <button type="submit">Registrar</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Ya tienes cuenta? Inicia sesion aqui</button>
        </div>
    )
}
