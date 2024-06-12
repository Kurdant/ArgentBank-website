import { configureStore } from '@reduxjs/toolkit';
import userReducer, { setUser } from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Restaurer l'état d'authentification depuis le localStorage
const storedUser = localStorage.getItem('user');
if (storedUser) {
  store.dispatch(setUser(JSON.parse(storedUser)));
}

export default store;
