import { logout } from "./userSlice";

export const logoutAndRedirect = (navigate) => (dispatch) => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  dispatch(logout());
  navigate('/');
};
