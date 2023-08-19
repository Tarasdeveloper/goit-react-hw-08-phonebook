import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserThunk } from '../redux/operations';
import { selectAuthentificated } from '../redux/authReducer';
import { Navigate } from 'react-router-dom';
import Wrapper from 'components/Wrapper/Wrapper';
import {
  Form,
  FormButton,
  FormInput,
  FormLabel,
  FormNames,
} from 'components/ContactForm/ContactForm.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
  };

  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <Wrapper>
      <h1>Register Your Account</h1>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          <FormNames>Name:</FormNames>
          <FormInput name="userName" type="text" required minLength={2} />
        </FormLabel>
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
        <FormButton type="submit">Sign Up</FormButton>
      </Form>
    </Wrapper>
  );
};

export default RegisterPage;
