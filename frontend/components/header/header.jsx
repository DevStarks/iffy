import React from 'react';
import { connect } from 'react-redux';

// Presentational component

class Header extends React.Component {

  authHelper() {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <h2>{currentUser.firstName}</h2>
      );
    } else {
      return (
        <div>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      );
    }
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

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
