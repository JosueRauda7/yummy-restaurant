import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

const Login = (props) => {
  const [formSelected, setFormSelected] = useState("Ingresar");
  const [user, setUser] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState(null);

  const toogleForm = (selection) => {
    setError(null);
    setUser({
      email: "",
      password: "",
      passwordConfirm: "",
    });
    setFormSelected(selection);
  };

  const handlePassswordVerify = (e) => {
    setUser({
      ...user,
      passwordConfirm: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  const handlePassswordChange = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  let errorLbl = null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formSelected === "Registrarse") {
      if (user.password !== user.passwordConfirm) {
        setError("La contraseña no coincide.");
      } else {
        login();
        Swal.fire(
          "Te has registrado!",
          "Puedes empezar a realizar tus reservaciones!",
          "success"
        );
      }
    } else {
      errorLbl = null;
      login();
    }
  };

  if (error) {
    errorLbl = (
      <p
        style={{
          color: "#E94F37",
        }}>
        La contraseña no coincide.
      </p>
    );
  }

  const login = () => {
    const body = {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAufGa_G8iSpjSsu08ncty6z0ZfWcIDhSw";
    if (formSelected === "Ingresar") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAufGa_G8iSpjSsu08ncty6z0ZfWcIDhSw";
    }
    axios
      .post(url, body)
      .then((res) => {
        localStorage.setItem("token", res.data.idToken);
        props.changeLogged(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className='our-projects'>
      {props.isLog ? <Redirect to='/' /> : null}
      <div className='skew-arriba'></div>
      <div className='deg-background'></div>

      <div className='ejeZproject'>
        <div className='container-project'>
          <div className='project-title'>
            <div className='wrapper'>
              <div className='title-text'>
                <div className='title login'>Formulario de Sesión</div>
                <div className='title signup'>Signup Form</div>
              </div>
              <div className='form-container'>
                <div className='slide-controls'>
                  <input
                    type='radio'
                    name='slide'
                    id='login'
                    // checked={formSelected === "Ingresar"}
                  />
                  <input
                    type='radio'
                    name='slide'
                    id='signup'
                    // checked={formSelected !== "Ingresar"}
                  />
                  <label
                    htmlFor='login'
                    onClick={() => toogleForm("Ingresar")}
                    className='slide login'>
                    Ingresar
                  </label>
                  <label
                    htmlFor='signup'
                    onClick={() => toogleForm("Registrarse")}
                    className='slide signup'>
                    Registrarse
                  </label>
                  <div className='slider-tab'></div>
                </div>
                <div className='form-inner'>
                  <form onSubmit={handleSubmit} className='signup'>
                    <div className='field'>
                      <input
                        type='email'
                        placeholder='Email Address'
                        value={user.email}
                        onChange={(e) => handleEmailChange(e)}
                        required
                      />
                    </div>
                    <div className='field'>
                      <input
                        type='password'
                        placeholder='Password'
                        value={user.password}
                        onChange={(e) => handlePassswordChange(e)}
                        required
                      />
                    </div>
                    {formSelected === "Registrarse" ? (
                      <div className='field'>
                        <input
                          type='password'
                          placeholder='Confirm password'
                          value={user.passwordConfirm}
                          onChange={(e) => handlePassswordVerify(e)}
                          required
                        />
                        {errorLbl}
                      </div>
                    ) : null}
                    <div className='field btn'>
                      <div className='btn-layer'></div>
                      <input type='submit' value={formSelected} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='skew-abajo'></div>
        </div>
      </div>
    </section>
  );
};

export default Login;
