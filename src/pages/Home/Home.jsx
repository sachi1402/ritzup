import React, { useEffect, useState } from "react";
import "./home.scss";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/HomeBanner/Slider";
import Card from "../../components/Card/Card.jsx";
// import { fetchListingData } from "../../redux/Actions/ListingAction";
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer/index'

const Home = () => {
  const authState = useSelector((state) => state.auth);
  console.log("Authentication State:", authState);

  const [listingData, setListingData] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    if (authState?.token == null) {
      // if (!authState?.token == null) {
      console.log("Authentication 2State:", authState);
      Navigate("/login");
    }
  }, [authState, Navigate]);

  // comppp show

  //   const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // compp

  useEffect(() => {
    const fetchListingData = async () => {
      try {
        const authToken = authState.token; // Replace with your actual auth token

        const response = await fetch("https://api.reztup.com/api/listing", {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setListingData(data);
          console.log("Listing data:", data);
        } else {
          console.log("Failed to fetch listing data", authState);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchListingData();
  }, []);
  return (
    <>
      <Navbar />
      <Slider />
    <div style={{height:"3vw"}}></div>
      <div className="home-card-container">
        {listingData &&
          listingData.map((e) => (
            <Card
              key={e.id}
              img="https://picsum.photos/500/300"
              loc="New York, USA"
              orignalprice={600}
              rating={4.5}
              discountedprice={80}
              Noreview={50}
              title={e.title}
              comment={e.comment}
            />
          ))}
        {listingData &&
          listingData.map((e) => (
            <Card
              key={e.id}
              img="https://picsum.photos/500/300"
              loc="New York, USA"
              orignalprice={600}
              rating={4.5}
              discountedprice={80}
              Noreview={50}
              title={e.title}
              comment={e.comment}
            />
          ))}{" "}
        {listingData &&
          listingData.map((e) => (
            <Card
              key={e.id}
              img="https://picsum.photos/500/300"
              loc="New York, USA"
              orignalprice={600}
              rating={4.5}
              discountedprice={80}
              Noreview={50}
              title={e.title}
              comment={e.comment}
            />
          ))}
      </div>
      <Footer/>
    </>
  );
};

export default Home;
