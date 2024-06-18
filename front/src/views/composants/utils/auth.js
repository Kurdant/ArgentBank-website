import { logout } from "../../../userSlice";

export const checkAuth = (dispatch, navigate) => {
  const token = sessionStorage.getItem('token');
  const user = sessionStorage.getItem('user');

  if (!token || !user) {
    dispatch(logoutAndRedirect(navigate));
  }
};

export const logoutAndRedirect = (navigate) => (dispatch) => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  dispatch(logout());
  navigate('/sign-in');
};
