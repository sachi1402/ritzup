import React from 'react'
// import './../Hero/Hero.css'
import './index.scss'
// import logo from './../../Assets/Images/logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer  className="main-panel card border footer-bg old_home_footer container " id="footer" style={{'width': '100vw' , 'background-color': '#fff'}}>
    <div className="container-fluid container-fluid-90  sv_footer_popup " style={{'width': '100%' , 'background-color': '#fff'}} >
        <div className="row ">
            <div className="col-6 col-sm-3 mt-4">
                <div className="row" >
                    <div className="col-md-12 text-center">
                        <div className="container row align-items-start">
                        <div className="footerlogo-img-cont">
                            <img src={'/logo.png'} className="img-foot"  style={{'width':'100px', "height":'30px','objectFit':'contain'}}alt="logo" />
                            <p style={{ "justifyContent": 'flex-start' , textAlign: 'left'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <div className=' container footersocial  row align-items-start '>
                            <div><FaFacebook /> Riztup</div>
                            <div><FaInstagram /> Riztup</div>
                            <div><FaTwitter /> Riztup</div>
                            <div><FaLinkedin /> Riztup</div>
                            </div>
                        </div>
                        </div>
                        <ul className="list-inline text-center sv_social mt-3">
                            <li className="list-inline-item">
                                <a className="social-icon text-color text-18" target="_blank" href="#" aria-label="facebook"><i className="fab fa-facebook"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a className="social-icon text-color text-18" target="_blank" href="#" aria-label="google_plus"><i className="fab fa-google-plus"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a className="social-icon text-color text-18" target="_blank" href="#" aria-label="twitter"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a className="social-icon text-color text-18" target="_blank" href="#" aria-label="linkedin"><i className="fab fa-linkedin"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a className="social-icon text-color text-18" target="_blank" href="#" aria-label="pinterest"><i className="fab fa-pinterest"></i></a>
                            </li>
                            <li className="list-inline-item"></li>
                            <li className="list-inline-item"></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-6 col-sm-3 mt-4">
                <h2 className="font-weight-600 text-uppercase text-13">Popular Cities</h2>
                <div className="row">
                    <div className="col p-0">
                        <ul className="mt-1">
                            <li className="pt-3 text-14">
                                <a href="search?location=New York&checkin=09-05-2023&checkout=09-05-2023&guest=1">New York</a>
                            </li>
                            <li className="pt-3 text-14">
                                <a href="search?location=Sydney&checkin=09-05-2023&checkout=09-05-2023&guest=1">Sydney</a>
                            </li>
                            <li className="pt-3 text-14">
                                <a href="search?location=Paris&checkin=09-05-2023&checkout=09-05-2023&guest=1">Paris</a>
                            </li>
                            <li className="pt-3 text-14">
                                <a href="search?location=Barcelona&checkin=09-05-2023&checkout=09-05-2023&guest=1">Barcelona</a>
                            </li>
                            <li className="pt-3 text-14">
                                <a href="search?location=Berlin&checkin=09-05-2023&checkout=09-05-2023&guest=1">Berlin</a>
                            </li>
                            <li className="pt-3 text-14">
                                <a href="search?location=Budapest&checkin=09-05-2023&checkout=09-05-2023&guest=1">Budapest</a>
                            </li>
                            <li className="pt-3 text-14">
                                <a href="search?location=Singapore&checkin=09-05-2023&checkout=09-05-2023&guest=1">Singapore</a>
                            </li>
                            <li className="pt-3 text-14">
                                <a href="search?location=New Delhi&checkin=09-05-2023&checkout=09-05-2023&guest=1">New Delhi</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-6 col-sm-3 mt-4">
                <h2 className="font-weight-600 text-uppercase text-13">Hosting</h2>
                <div className="row">
                    <div className="col p-0">
                        <ul className="mt-1">
                            <li className="pt-3 text-14">
                                <a href="help"> Help </a>
                            </li>

                            <li className="pt-3 text-14">
                                <a href="about"> About </a>
                            </li>

                            <li className="pt-3 text-14">
                                <a href="contact-us"> Contact Us </a>
                            </li>

                            <li className="pt-3 text-14">
                                <a href="terms-of-service"> Terms of Service </a>
                            </li>

                            <li className="pt-3 text-14">
                                <a href="become-host"> Become Host </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-6 col-sm-3 mt-4">
                <h2 className="font-weight-600 text-uppercase text-13">Company</h2>
                <div className="row">
                    <div className="col p-0">
                        <ul className="mt-1">
                            <li className="pt-3 text-14">
                                <a href="policies"> Policies </a>
                            </li>

                            <li className="pt-3 text-14">
                                <a href="privacy"> Privacy </a>
                            </li>

                            <li className="pt-3 text-14">
                                <a href="guest-refund"> Guest Refund </a>
                            </li>

                            <li className="pt-3 text-14">
                                <a href="cancellation-policies"> Cancellation Policies </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            
        </div>
    </div>

    <div className="border-top p-0 foot-content">
        <div className="container-fluid container-fluid-90 justify-content-between p-2 foot-padding ">
            <div className="row">
                <div className="col-lg-6 col-sm-6 mb-0 mt-4 mb-4 text-14 sv_copyright">
                    © 2023 Reztup. All Rights Reserved
                </div>

                <div className="col-lg-6 col-sm-6 mb-0 mt-4 text-14 mb-4 text-right sv_footer_currency">
                    <div className="text-underline mb-0">
                        <a className="pr-4 text-danger" target="_blank" href="new-home">Switch to New Home Page</a>

                        <a href="#" aria-label="modalLanguge" data-toggle="modal" data-target="#languageModalCenter"> <i className="fa fa-globe"></i> <u>English </u></a>
                        <a href="#" aria-label="modalCurrency" data-toggle="modal" data-target="#currencyModalCenter">
                            <span className="ml-4">&#36; - <u>USD</u> </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
