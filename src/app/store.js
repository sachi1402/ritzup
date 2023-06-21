import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import authReducer from '../pages/test/auth/authSlice'
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth: authReducer,
  },
});


export default store