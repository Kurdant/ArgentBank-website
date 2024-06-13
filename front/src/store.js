// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer, { setUser } from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const getStoredUser = () => {
  return JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));
};

const storedUser = getStoredUser();
if (storedUser) {
  store.dispatch(setUser(storedUser));
}

export default store;
