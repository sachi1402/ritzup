import React, { useState } from "react";
// import "./Login.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from "../../Assets/Images/logo.png";
// import banner from "../../Assets/Images/login.png";
import './../Login/Login'
import { useNavigate } from "react-router-dom";
import { FaApple, FaEnvelope } from "react-icons/fa";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      first_name: firstName,
      last_name: lastName,
      dob,
      email,
      mobile_number: mobileNumber,
      password,
    };

    console.log(userData);

    fetch("https://api.reztup.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Registration successful", response);
          Navigate("/login");
          // Perform necessary actions after successful registration
        } else {
          console.log("Registration failed");
          // Handle registration failure
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
    <section className="vh-100 d-flex">
      <div className="container-fluid">
        <div className="row">
          <div id="leftcompo" className="col-sm-6 text-black">
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-xl-0 mt-xl-n5">
              <form onSubmit={handleSubmit}>
                <img id="topLogo" src={'/google icon.png'} alt="" />
                <h3 className="fw-normal mb-3 pb-3">Create an account</h3>
                <p>Let's get started with your journey</p>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="firstName"
                        className="form-control form-control-lg"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="lastName"
                        className="form-control form-control-lg"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div  className="form-outline mb-4">
                  <input 
                    type="date"
                    id="dob"
                    className="form-control form-control-lg"
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="tel"
                    id="mobileNumber"
                    className="form-control form-control-lg"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="pt-1 mb-3">
                <button style={{ width: '100%', background: '#F1450E', color: '#fff' }} className="Login-btn" type="submit">
                    Sign-Up
                  </button>
                </div>
                <div className='orline'>or</div>

                <div className="icon-cont" style={{width:"100%"}}>
                  <div>
                    <img src="/google icon.png" alt="" />
                  </div>
                  <div>
                    <FaApple />
                  </div>
                  <div>
                    <img src="/facebook icon.png" alt="" />
                  </div>
                  <div>
                    <FaEnvelope />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="input-cont"></div>

          <div
            style={{ background: "#F1450E" }}
            className="Login-Left-img-cont"
          >
            <img src={'https://wallpaperaccess.com/full/2690549.jpg'} alt="Banner image" className="w-100 vh-100" />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Register;
