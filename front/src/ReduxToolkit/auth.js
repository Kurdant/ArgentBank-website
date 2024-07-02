import { logout } from "./userSlice";

export const checkAuth = (dispatch, navigate) => {
  const token = sessionStorage.getItem('token');
  const user = sessionStorage.getItem('user');
  const currentPath = window.location.pathname;

  if ((!token && !user) && currentPath === '/user') {
    dispatch(logoutAndRedirect(navigate));
}
};

export const logoutAndRedirect = (navigate) => (dispatch) => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  dispatch(logout());
  navigate('/');
};
