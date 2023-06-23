import React from 'react';
import { FaStar } from 'react-icons/fa';
import './reviewCard.css';

const ReviewCard = () => {
  return (
    <div className="review-card">
      <div className="review-card-body">
        <div className="row">
          <div className="col-3">
            <img src="profile-picture.jpg" alt="Profile" className="profile-picture" />
          </div>
          <div className="col-9">
            <div className="row">
                
              <div className="row">
                <h5 className="name">John Doe</h5>
              </div>
              <div className="row">
                <p className="date">June 23, 2023</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="description">Had a good day</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="stars">
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
