import axios from 'axios';
import {
    ALL_LISTING_REQUEST,
    ALL_LISTING_SUCCESS,
    ALL_LISTING_FAIL,

    CLEAR_ERRORS,

} from '../Constants/ListingConstants'

export const fetchListingData = () => {
  return async (dispatch, getState) => {
    dispatch({ type: ALL_LISTING_REQUEST });

    try {
      const authToken = getState().auth.token; // Replace with your actual auth token

      const response = await axios.get('https://api.reztup.com/api/listing', {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });

      const data = response.data;
      dispatch({ type: ALL_LISTING_SUCCESS, payload: data });
      console.log('Listing data:', data);
    } catch (error) {
      dispatch({ type: ALL_LISTING_FAIL, payload: error.message });
      console.error('Error:', error);
    }
  };
};

export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
