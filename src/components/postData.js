import axiosInstance from '../config/axiosInstance';

// function startSocialLogin() {
//   return {
//     type: 'Start_Social_Login',
//   };

// function endSocialLogin (token) {
//   return {
//     type: 'End_Social_Login',
//     token:token,
//   };

const postData = (serviceProvider, userData) => {
  // dispatch(startSocialLogin);
  return axiosInstance.post(serviceProvider, userData)
    .then((res) => {
      console.log('res', res);
      // dispatch(endSocialLogin(res));
    })
    .catch((error) => error);
};

export default postData;
