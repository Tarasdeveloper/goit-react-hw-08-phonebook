import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from '../redux/operations';
import { selectAuthentificated } from '../redux/authReducer';
import { Navigate } from 'react-router-dom';
import {
  Form,
  FormButton,
  FormInput,
  FormLabel,
  FormNames,
} from 'components/ContactForm/ContactForm.styled';
import Wrapper from 'components/Wrapper/Wrapper';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      loginUserThunk({
        email,
        password,
      })
    );
  };

  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <Wrapper>
      <h1>Login Into Your Account</h1>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          <FormNames>Email:</FormNames>
          <FormInput name="userEmail" type="email" required />
        </FormLabel>

        <FormLabel>
          <FormNames>Password:</FormNames>
          <FormInput
            name="userPassword"
            type="password"
            required
            minLength={7}
          />
        </FormLabel>

        <FormButton type="submit">Sign In</FormButton>
      </Form>
    </Wrapper>
  );
};

export default LoginPage;
