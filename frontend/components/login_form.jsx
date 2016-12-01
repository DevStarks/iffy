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
  }

  handleChange(e) {
    e.preventDefault();
    const input = e.target;
    this.setState({ [input.name]: input.value });
  }

  render() {
    return (
      <form>
        <input type="text" name="email" placeholder="email"></input>
        <input type="password" name="password" placeholder="password"></input>
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
  mapDispatchToProps
)(LoginForm);
