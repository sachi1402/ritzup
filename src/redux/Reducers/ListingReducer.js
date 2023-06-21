import {
    ALL_LISTING_REQUEST,
    ALL_LISTING_SUCCESS,
    ALL_LISTING_FAIL,

    CLEAR_ERRORS,

} from '../Constants/ListingConstants'

const initialState = {
    listingData: null,
    loading: false,
    error: null
};

const listingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_LISTING_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ALL_LISTING_SUCCESS:
            return {
                ...state,
                loading: false,
                listingData: action.payload
            };
        case ALL_LISTING_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};

export default listingReducer;
