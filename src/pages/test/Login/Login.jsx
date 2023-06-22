import React, { useState } from 'react';
import "../Login/Login.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { login } from '../auth/authSlice';
import { useNavigate } from 'react-router-dom';
// import logo from "./../../Assets/Images/logo.png";
// import banner from "./../../Assets/Images/login.png";
import { FaGoogle, FaApple, FaFacebook, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("email");
  const [mobile, setMobile] = useState("");


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = async () => {
    try {
      let loginData = {
        email,
        password
      };

      if (selectedMethod === "mobile") {
        loginData = {
          mobile
        };
      }

      const response = await axios.post("https://api.reztup.com/api/login", loginData);
      const { token } = response.data;
      dispatch(login(token));
      navigate('/');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
      console.log("Error:", err);
    }
  };
  const handleMethodSelection = (method) => {
    setSelectedMethod(method);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };


  return (
    <section className="Login-contender">
      {/* <div className="Login-box"> */}
      <div className="Login-orange">
        <div className="Login-Right-cont container p-4">
          <div className="form-container">
            <form className='login-form'>
              {/* <img src={logo} alt=""  className="login-logo" /> */}
              <h1 className="login-logo" >reztup</h1>
              <h3 className="login-title" >Log in or sign up to Reztup</h3>
              <div className='input-cont  container  '>
              <div className='container d-flex justify-content-evenly'>
                <div className="EmailOrMobile container  col">
                  <div className={`emailCont ${selectedMethod === 'email' ? 'selected' : ''}`}>
                    <a id="email" onClick={() => handleMethodSelection('email')}>
                      <h6 className="emailtext">Email Address</h6>
                    </a>
                  </div>
                  <div className={` MobleCont ${selectedMethod === 'mobile' ? 'selected' : ''}` }>
                    <a href="#" id="mobile" onClick={() => handleMethodSelection('mobile')}>
                      <h6 className="pwdtext" >Mobile</h6>
                    </a>
                  </div> 
              </div>
                </div>

                {selectedMethod === 'email' && (
                  <>

                    <div className="login-form-input-cont ">
                      <input type="email" id="form2Example18" className="Login-email-input form-control form-control-lg" placeholder="Email Address" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="login-form-input-cont">
                      <input type="password" id="form2Example28" className="Login-pwd-input  form-control form-control-lg" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <div className="login-form-input-cont">
                      <button style={{ width: '100%', background: '#F1450E', color: '#fff' }} className="Login-btn" type="button"
                        onClick={loginHandler}>Log in</button>

                      <div className="login-form-fp">
                        <p className="login-forgotpass" onClick={() => console.log("navigate('/forgotpass')")}>Forgot your password?</p>
                      </div>
                    </div>
                    <div className="login-form-input-cont">
                      <button className="Login-register-btn" type="button" onClick={() => navigate('/register')}>Create an Account</button>
                      <div className='orline'>or</div>
                    </div>
                  </>

                )}

                {selectedMethod === 'mobile' && (
                  <>
                    <div className="login-form-input-cont">
                      <input
                        type="tel"
                        id="form2Example18"
                        className="Login-email-input  form-control form-control-lg"
                        placeholder="Phone Number"
                        value={mobile}
                        onChange={handleMobileChange}
                      />
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <div className="login-form-input-cont">
                      <button style={{ width: '100%', background: '#F1450E', color: '#fff' }} className="Login-btn" type="button"
                        onClick={loginHandler}>Log in</button>

                      <div className="login-form-fp">
                        <p className="login-forgotpass" onClick={() => console.log("navigate('/forgotpass')")}>Forgot your password?</p>
                      </div>
                    </div>
                    <div className="login-form-input-cont">
                      <button className="Login-register-btn " type="button" onClick={() => navigate('/register')}>Create an Account</button>
                      <div className='orline'>or</div>
                    </div>
                  </>
                )}


              </div>
            </form>
            <div className='input-cont'>


              <div className='icon-cont container  '>
                <div className='col-3 '>
                  
                </div>
                <div className='col-3'>
                
                </div>
                <div className='col-3'>
                  <img src="/facebook icon.png" alt="" />
                </div>
                <div className='col-3'>
                  <FaEnvelope />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div style={{ background: '#FF5923' , 'width':'55vw'}} className="Login-Left-img-cont">
          {/* <img src={banner} alt="Banner image" className="w-100 vh-100" /> */}
          <img src="https://wallpaperaccess.com/full/2690549.jpg" alt="Banner image" className="w-90 vh-100  " style={{'border-radius':'50px'}} />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Login;
