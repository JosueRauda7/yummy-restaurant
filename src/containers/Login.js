import React, { useState } from "react";

const Login = (props) => {
  const [formSelected, setFormSelected] = useState("Ingresar");
  const [user, setUser] = useState(null);

  const toogleForm = () => {
    if (formSelected === "Ingresar") {
      setFormSelected("Registrarse");
    } else {
      setFormSelected("Ingresar");
    }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const login = async () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAufGa_G8iSpjSsu08ncty6z0ZfWcIDhSw",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          email: user.email,
          password: user.password,
          returnSecureToken: true,
        },
      }
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <section className='our-projects'>
      <div className='skew-arriba'></div>
      <div className='deg-background'></div>

      <div className='ejeZproject'>
        <div className='container-project'>
          <div className='project-title'>
            <div className='wrapper'>
              <div className='title-text'>
                <div className='title login'>Login Form</div>
                <div className='title signup'>Signup Form</div>
              </div>
              <div className='form-container'>
                <div className='slide-controls'>
                  <input
                    type='radio'
                    name='slide'
                    id='login'
                    checked={formSelected === "Ingresar"}
                  />
                  <input
                    type='radio'
                    name='slide'
                    id='signup'
                    checked={formSelected !== "Ingresar"}
                  />
                  <label
                    for='login'
                    onClick={toogleForm}
                    className='slide login'>
                    Login
                  </label>
                  <label
                    for='signup'
                    onClick={toogleForm}
                    className='slide signup'>
                    Signup
                  </label>
                  <div className='slider-tab'></div>
                </div>
                <div className='form-inner'>
                  <form onSubmit={handleSubmit} className='signup'>
                    <div className='field'>
                      <input
                        type='email'
                        placeholder='Email Address'
                        onChange={(e) => handleEmailChange(e)}
                        required
                      />
                    </div>
                    <div className='field'>
                      <input
                        type='password'
                        placeholder='Password'
                        onChange={(e) => handlePassswordChange(e)}
                        required
                      />
                    </div>
                    {formSelected === "Registrarse" ? (
                      <div className='field'>
                        <input
                          type='password'
                          placeholder='Confirm password'
                          required
                        />
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
