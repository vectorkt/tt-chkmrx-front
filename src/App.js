import './App.css';
import AppRoutes from './routes/AppRoutes';
import { createContext, useState } from 'react';
import { getLoginCookie } from './utils/cookies/cookies';

export const LoginContext = createContext();

function App() {

  const [loginState, setLoginState] = useState(
    {
      isLogged: getLoginCookie() === "true",
    }
  );

  const value = { loginState, setLoginState };

  return (
    <LoginContext.Provider {...{ value }}>
      <AppRoutes />
    </LoginContext.Provider>
  );
}

export default App;
