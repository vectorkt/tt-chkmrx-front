import logo from './logo.svg';
import './App.css';
import APItest from './test/components/APItest/APItest';
import TokenTest from './test/components/TokenTest/TokenTest';
import MainLayout from './components/Layout/MainLayout';
import AppRoutes from './routes/AppRoutes';
import { createContext, useState } from 'react';
import { getAuthCookie, getLoginCookie } from './utils/cookies/cookies';

export const LoginContext = createContext();

function App() {

  const [loginState, setLoginState] = useState(
    {
      isLogged: getLoginCookie() === "true",
      isLoading: false,
    }
  );

  const value = { loginState, setLoginState };

  return (
    // <APItest/>
    // <TokenTest/>
    <LoginContext.Provider {...{ value }}>
      <AppRoutes />
    </LoginContext.Provider>
  );
}

export default App;
