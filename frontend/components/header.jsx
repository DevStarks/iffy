import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import SignupForm from './signup_form';
import LoginForm from './login_form';

// Presentational component

class Header extends React.Component {

  constructor() {
    super();

    this.state = {
      loginModalVisible: false,
      signupModalVisible: false
    };

    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
  }

  authHelper() {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <h2>{currentUser.firstName}</h2>
      );
    } else {
      return (
        <div>
          <button onClick={this.openLoginModal}>Log In</button>
          <button onClick={this.openSignupModal}>Sign Up</button>

          {this.signupModal()}
          {this.loginModal()}
        </div>
      );
    }
  }

  openSignupModal() {
    this.setState({ signupModalVisible: true });
  }

  openLoginModal() {
    this.setState({ loginModalVisible: true });
  }

  closeSignupModal() {
    this.setState({ signupModalVisible: false });
  }

  closeLoginModal() {
    this.setState({ loginModalVisible: false });
  }

  signupModal() {
    return (
      <Modal
          isOpen={this.state.signupModalVisible}
          onRequestClose={this.closeSignupModal}
          style={{
            overlay: {},
            content: {
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0
            }
          }}
        >
        <SignupForm />
      </Modal>
    );
  }

  loginModal() {
    return (
      <Modal
          isOpen={this.state.loginModalVisible}
          onRequestClose={this.closeLoginModal}
          style={{
            overlay: {},
            content: {
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0
            }
          }}
        >
        <LoginForm />
      </Modal>
    );
  }

  render() {
    return(
      <header>
        <h2>LOGO</h2>
        <h2>SearchBar</h2>
        {this.authHelper()}
      </header>
    );
  }
}

// Redux Mapping

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

export default connect(
  mapStateToProps,
  {}
)(Header);
