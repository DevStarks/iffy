import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';

// Presentational component

class SignupForm extends React.Component {

  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const input = e.target;
    this.setState({ [input.name]: input.value });
  }

  render() {
    return (
      <form onChange={this.handleChange}>
        <input type="text" name="firstName" value={this.state.firstName} placeholder="first name"></input>
        <input type="text" name="lastName" value={this.state.lastName} placeholder="last name"></input>
        <input type="text" name="email" value={this.state.email} placeholder="email"></input>
        <input type="password" name="password" value={this.state.password} placeholder="password"></input>
      </form>
    );
  }
}

// Redux Mapping

const mapStateToProps = ({}) => ({

});

const mapDispatchToProps = dispatch => ({
  signup
});

export default connect(
  () => {},
  mapDispatchToProps
)(SignupForm);
