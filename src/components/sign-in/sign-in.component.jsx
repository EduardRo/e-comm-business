import React, { Component } from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  signInWithGoogle,
  auth,
} from '../../components/firebase/firebase.utils';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already I have account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            className='form-input'
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            className='form-input'
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>{' '}
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
