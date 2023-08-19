// import { StyledNavLink } from 'App.styled';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { logoutUserThunk, refreshUserThunk } from 'redux/operations';
import { selectAuthentificated, selectToken } from 'redux/authReducer';
import Loader from 'components/Loader/Loader';
import {
  Header,
  NavButton,
  Navigation,
  StyledNavLink,
} from 'components/Links.styled';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };
  return (
    <>
      <Header>
        <Navigation>
          <StyledNavLink to="/">Home</StyledNavLink>
          {authentificated ? (
            <>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <NavButton onClick={handleLogout}>Log Out</NavButton>
            </>
          ) : (
            <>
              <StyledNavLink to="/login">Login</StyledNavLink>
              <StyledNavLink to="/register">Register</StyledNavLink>
            </>
          )}
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
