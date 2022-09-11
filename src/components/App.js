import { useState, useEffect } from 'react';
import '../styles/App.scss';
import styled from 'styled-components';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import Main from './Main';
import AuthPage from '../pages/AuthPage';
import Header from './Header';
import ProtectedRoute from './ProtectedRoute';

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
background-color: #fff;
`

function App() {
  const [loggedIn, inLoggeIn] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (loggedIn) {
      history.push('/');
    }
  }, [loggedIn, history])

  return (
    <AppWrapper>
      <Header />
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          component={Main}
        />
        <Route path="/sign-in">
          <AuthPage />
        </Route>
        <Route>
          {loggedIn ? (
            <Redirect to="/" />
          ) : (
            <Redirect to="sign-in" />
          )}
        </Route>
      </Switch>
    </AppWrapper >
  );
}

export default App;