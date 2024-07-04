import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: !!sessionStorage.getItem('token') && !!sessionStorage.getItem('user'),
  user: JSON.parse(sessionStorage.getItem('user')) || null,
  userName: null,
  firstName: null,
  lastName: null,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { email, firstName, lastName, userName } = action.payload;
      state.user = action.payload;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.userName = userName;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.userName = null;
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
