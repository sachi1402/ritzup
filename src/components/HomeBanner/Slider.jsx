import React from "react";
import "./slider.scss";

const Slider = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/beautiful-city-landscape-with-tall-buildings-high-angle_23-2149444885.jpg?w=2000"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fs-1">Book Top Hill Tent</h5>
              <h5 className="fs-1">
                Experiences Local things to do, wherever you are.
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://free4kwallpapers.com/uploads/originals/2019/12/14/empire-state-building-wallpaper.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fs-1">Second slide label</h5>
              <h5 className="fs-1">
                Some representative placeholder content for the second slide.
              </h5>
            </div>
          </div>
          {/* <div className="carousel-item">
    <img src="https://img.freepik.com/free-photo/beautiful-city-landscape-with-tall-buildings-high-angle_23-2149444885.jpg?w=2000" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
