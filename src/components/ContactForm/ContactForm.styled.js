import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 20px;
  text-align: left;
  align-items: center;
`;

export const FormInput = styled.input`
  margin-bottom: 20px;
  font-size: 15px;
  width: 300px;
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
`;

export const FormNames = styled.p`
  margin: 0;
  text-shadow: rgb(67, 60, 60) 2px 2px 20px, rgba(30, 30, 30, 0.8) 2px 2px 2px;
`;

export const FormButton = styled.button`
  margin-bottom: 20px;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  background-color: rgb(137, 126, 133);
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  color: #fff;
`;
