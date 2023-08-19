import styled from 'styled-components';

export const ListContacts = styled.ul`
  text-align: left;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 15px;
`;

export const ContactsItem = styled.li`
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;
export const ContactsName = styled.span``;

export const ContactsNumber = styled.span``;

export const DeleteBtn = styled.button`
  margin-left: 20px;
  cursor: pointer;
  background-color: tomato;
  border-radius: 5px;
  border: none;
`;
