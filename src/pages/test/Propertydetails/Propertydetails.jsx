import React from 'react';
// import './Propertydetails.scss';
import Nav from './../../../components/Navbar2/Navbar';
import './Propertydetails.scss'
import { FaShareSquare } from 'react-icons/fa';
import { AiOutlineBook } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import ReviewCard from '../../../components/ReviewCard/reviewCard';
const PropertyDetails = () => {
  return (
    <>
    <Nav/>
    <div className=" container PropertyDetails">
      <div className="row ">
        <div className="col-8">
          <div className="page-disc-povider ">
            <p>Home {"  > "} Category {" - "} Frames {" > "} <span>Property Details</span></p>
          </div>
          <div className="container img-carasol ml-2 ">
          <div className="row ">
            <img src="https://picsum.photos/500/302" alt="img" className="col-7 h-100 main-img " />
            <div className="col-5" >
              <div className="row h-100  ">
                <div className="col-6 imag-l-col ">
                  <img src="https://picsum.photos/500/302" alt="img" className="img-fluid h-50 ml-1 mt-0 " />
                  <img src="https://picsum.photos/500/302" alt="img" className="img-fluid h-50 ml-1 mt-1 " />
                </div>
                <div className="col-6 img-r-col">
                  <img src="https://picsum.photos/500/302" alt="img" className="img-fluid h-50 ml-2 mt-0" />
                  
                  {/* <img src="https://picsum.photos/500/302" alt="img" className="img-fluid h-50 ml-2 mt-1 view-more" /> */}
                  <div class=" view-image-container h-50">
                    <img src="https://picsum.photos/500/304" alt="Image" class=" img-fluid  h-100 ml-2 mt-1 image" />
                    <div class="image-overlay ml-2 mt-1">
                      <h3 class="overlay-text">View all images</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container amanitystext ">
        <div className="row">
            <div className="col-6">
              12 guest <span>·</span> 3 bedrooms  <span>·</span> 3 bathrooms
            </div>
        </div>

        </div>
        <div className="container title-c-pd ">
          <div className="row">
            <h1 className="col-10 titlePD">Jannat 100% Pet Friendly Pool villa with 
              Lake View</h1>
              <div className="col-2 share-c-pd">
                 <FaShareSquare />|<AiOutlineBook/>
              </div>
          </div>
        </div>
        <div className="col-6 loc-pd">
       < FiMapPin /> Pimplad Nasik, Maharashtra, India
        </div>
        <p className="disc-pd ml-4">
        Everest Sherpa Resort welcomes you to your home away from home in 
        comfort and luxury amidst the stunning natural beauty of the Khumbu 
        Himalaya. Allow us to welcome and pamper you after a tiring trek with 
        our friendly Sherpa hospitality with delicious home cooked local an intl. 
        delicacies. At ESR we go one step further than just offering the best 
        hospitality; we also make sure our resort complies with sustainable 
        tourism practices.We offer 22 well apointed rooms
        </p>
        <hr/>
        <div className='container w-100  justify-content-space-between'>
          <div className='row d-flex justify-content-space-between rv-pd'>
          <div className='col-5 '>
            <div className='row '>
            <FaStar  className='col'/>
            <FaStar  className='col'/>
            <FaStar  className='col'/>
            <FaStar  className='col'/>
            <FaStar  className='col'/>
            </div>
            <div className='row'>Show all 47 Reviews</div>
          </div>
          <div className='col-2'>
            <div className='row'>
            4.5
            </div>
            <div className='row'>
            Review score
            </div>
          </div>
          </div>
        </div>
        <div className='container'>
        <div className='row'>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
        </div>
        <div className='container '>
          <div className='row'>
          <h1 className='col-9 offer' >What this place offers</h1>
          </div>
          <div className='row pt-2 pb-3'>
            <div className='col-2 amntcard'> Kitchen</div>
            <div className='col-2 amntcard' > wi-fi</div>
            <div className='col-2 amntcard'> pool</div>
            <div className='col-2 amntcard'> Dryer</div>
          </div>
          <div className='row pt-2 pb-3'>
            <div className='col-5 amntcard '> Free parking on premises</div>
            <div className='col-4 amntcard'> Washing machine</div>
          </div>
          
          <div className='row pt-2 pb-3'>
            <div className='col-5 amntcard'> TV with standard cable/satellite</div>
            <div className='col-4 amntcard'> Air conditioning</div>
          </div>
          <div className='row pt-2 pb-3'>
            <div className='col-5 amntcard'> Patio or balcony</div>
          </div>
          <div className='row shoall'>
          Show all 10 amenities
          </div>
        </div>
        <div className='container sleep'>
          <div className='row'>
            <h1>Where you’ll sleep</h1>
          </div>
          
          <div class="container">
          <div class="row m-2">
            <div className='col-3 beddisc'>
                <h1>Bedroom 1</h1>
                <h4>1 Queen Bed</h4>
            </div>
            <div className='col-3 beddisc'>
                <h1>Bedroom 1</h1>
                <h4>1 Queen Bed</h4>
            </div>
            <div className='col-3 beddisc'>
                <h1>Bedroom 1</h1>
                <h4>1 Queen Bed</h4>
            </div>
          </div>
          <div class="row m-2">
            <div className='col-3 beddisc'>
                <h1>Bedroom 1</h1>
                <h4>1 Queen Bed</h4>
            </div>
            <div className='col-3 beddisc'>
                <h1>Bedroom 1</h1>
                <h4>1 Queen Bed</h4>
            </div>
            <div className='col-3 beddisc'>
                <h1>Bedroom 1</h1>
                <h4>1 Queen Bed</h4>
            </div>
          </div>
        <hr/>
          <div className='container host'>
          <div className='row hosttitle'>
            <h1 className='col-10'>Host Profile</h1> 
            <p className='col-2'>\/</p>
          </div>
          <div className='row hostrow2 '>
            <div className='col-8 hostpfp'>
              <img src='data:image/png;base64,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'/>
              <div className=''>
                <h1>Hosted by Ravi</h1>
                <p>Joined in August 2019</p>
              </div>
            </div>
            <div className="col-3 hostbtnc">
              <button>Contact host</button>
            </div>
          </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-4">
          <div className='container'>
            <div className='row'>
              <div className='col'>Price</div>
              <div className='col'>₹ 11,500  <span>Night</span></div>
            </div>
            <div className='row'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='row'></div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default PropertyDetails;
