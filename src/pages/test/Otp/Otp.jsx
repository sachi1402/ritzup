import React, { useState } from 'react';
import "../Otp/Otp.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { login } from '../auth/authSlice';
import { useNavigate } from 'react-router-dom';
// import logo from "./../../Assets/Images/logo.png";
// import banner from "./../../Assets/Images/login.png";
import { FaGoogle, FaApple, FaFacebook, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

const Otp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("email");
  const [mobile, setMobile] = useState("");


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const OtpHandler = async () => {
    
  };
  const handleMethodSelection = (method) => {
    setSelectedMethod(method);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };


  return (
    <section className="otp-contender">
      {/* <div className="Login-box"> */}
      <div className="otp-orange">
        <div className="otp-Right-cont container p-4">
          <div className="form-container">
            <form className='otp-form'>
              {/* <img src={logo} alt=""  className="login-logo" /> */}
              <h1 className="otp-logo d-flex aline-item-left text-aline-left" >reztup</h1>
              <h3 className="otp-title d-flex justify-content-center aline-item-center" >Enter Otp</h3>
              <div className='input-cont  container  '>
              <div className='container d-flex justify-content-evenly'>

                    

              <div className='icon-cont container  '>
                <div className='col-3 '>
                  <img src="/google icon.png" alt="" />
                </div>
                <div className='col-3'>
                  <FaApple />
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
            </form>
            

          </div>
        </div>
        <div style={{ background: '#FF5923' , 'width':'55vw'}} className="otp-Left-img-cont">
          {/* <img src={banner} alt="Banner image" className="w-100 vh-100" /> */}
          <img src="https://wallpaperaccess.com/full/2690549.jpg" alt="Banner image" className="w-90 vh-100  " style={{'border-radius':'50px'}} />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Otp;
