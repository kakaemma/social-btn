import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import facebookLoginUser from '../../actions/facebookActions';

class Facebook extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  signup = (userToken, serviceProvider) => {
    let userData;
    userData = {
      user: {
        access_token: userToken,
      },
    };
    if (userData) {
      // const { facebookLoginUser } = this.props;
      facebookLoginUser(serviceProvider, userData);
    }
  }

  responseFacebook = (response) => {
    const token = response.accessToken;
    this.signup(token, 'facebook/');
  }

  render() {
    const value = this.state;
    if (value.redirect) {
      const to = { pathname: '/' };
      return (
        <Redirect to={to} />
      );
    }
    return (
      <FacebookLogin
        appId="2147542838793839"
        fields="name,email,picture"
        callback={this.responseFacebook}
        icon="fa fa-facebook-square icon-with-margin"
        cssClass="facebook"
        textButton="Facebook"

      />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  loading: state.user.loading,
});

Facebook.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  facebookLoginUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { facebookLoginUser })(Facebook);
