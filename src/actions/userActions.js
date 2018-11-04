import axiosInstance from '../config/axiosInstance';
import {
  socialLoginInitiated,
  socialLoginSuccess,
} from './actionCreators';

const googleLoginUser = (serviceProvider, userData) => (dispatch) => {
  dispatch(socialLoginInitiated(true));
  return axiosInstance.post(serviceProvider, userData)
    .then((res) => {
      console.log('res', res);
      localStorage.setItem('token', res.data.user.access_token);
      dispatch(socialLoginSuccess(res));
    })
    .catch((error) => error);
};

export default googleLoginUser;
