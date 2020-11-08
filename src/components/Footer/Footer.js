import React from "react";

const Footer = (props) => {
  return (
    <div>
      <footer className='footer'>
        <div className='skew-arriba'></div>
        <div className='deg-footer'></div>
        {props.showContact ? (
          <div className='ejeZfooter'>
            <div className='footer-content'>
              <div className='footer-title'>
                <h1>Contáctanos</h1>
                <hr />
                <br />
                <div className='card-content'>
                  <div className='info-headings'>
                    <h4 className='text-uppercase left'>YUMMY</h4>
                    <h6 className='text-capitalize left'>FOOD IS GOOD</h6>
                  </div>

                  <div className='infos'>
                    <ul
                      style={{
                        listStyle: "none",
                      }}
                      className='profile-list'>
                      <li className='clearfix'>
                        <span className='title'>
                          <i className='material-icons'>email</i>
                        </span>
                        <span className='content'>contato@YUMMY.com</span>
                      </li>
                      <li className='clearfix'>
                        <span className='title'>
                          <i className='material-icons'>phone</i>
                        </span>
                        <span className='content'>+503 5555-2222</span>
                      </li>
                      <li className='clearfix'>
                        <span className='title'>
                          <i className='material-icons'>place</i>
                        </span>
                        <span className='content'>Av.Bernal casa #1800</span>
                      </li>
                    </ul>
                  </div>

                  <div className='links'>
                    <a
                      href='https://www.facebook.com/rafaelggeronimo'
                      id='first_one'
                      className='social btn-floating indigo'>
                      <i className='fa fa-facebook'></i>
                    </a>
                    <a
                      href='https://twitter.com/rafaelger0nim0'
                      className='social  btn-floating blue'>
                      <i className='fa fa-twitter'></i>
                    </a>
                    <a
                      href='https://plus.google.com/102422958435502725110'
                      className='social  btn-floating red'>
                      <i className='fa fa-google-plus'></i>
                    </a>
                    <a
                      href='https://www.linkedin.com/in/rafael-geronimo-9b1b0a23?trk=hp-identity-name'
                      className='social  btn-floating blue darken-3'>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        )
        <div className='footer-text'>
          <p>
            &copy; Naomi Iglesias- Josué Rauda - 2020 | Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
