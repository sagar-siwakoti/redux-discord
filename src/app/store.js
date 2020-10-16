import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/apSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    app:appReducer,
  },
});
