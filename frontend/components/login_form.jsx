import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';

// Presentational component

class LoginForm extends React.Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const input = e.target;
    this.setState({ [input.name]: input.value });
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <input type="text" name="email" placeholder="email"></input>
        <input type="password" name="password" placeholder="password"></input>
        <button type="submit"></button>
      </form>
    );
  }
}

// Redux Mapping

const mapStateToProps = ({}) => ({

});

const mapDispatchToProps = dispatch => ({
  login
});

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
