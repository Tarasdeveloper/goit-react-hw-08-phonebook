import PropTypes from 'prop-types';
import { Container } from './Wrapper.styled';

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Wrapper;
