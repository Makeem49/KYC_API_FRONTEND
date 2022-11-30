import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../api';

interface AuthInterface {
  isAuthenticated: boolean;
  login: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => void;
  logout: () => void;
}

const AuthCtx = createContext({} as AuthInterface);

const AuthProvider = (props: WithChildren) => {
  const navigate = useNavigate();
  const authStatus: string =
    localStorage.getItem('cuddie-auth-status') ?? 'false';

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    authStatus === 'true'
  );

  const login = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const resp = await authenticate(username, password);

    if (!resp) return;

    localStorage.setItem('cuddie-access-token', resp);
    localStorage.setItem('cuddie-auth-status', 'true');
    setIsAuthenticated(true);

    return window.location.assign('/');

    // console.log(username, password);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('cuddie-auth-status');
    setIsAuthenticated(false);
    navigate('/auth');
  };

  return (
    <AuthCtx.Provider value={{ isAuthenticated, login, logout }}>
      {props.children}
    </AuthCtx.Provider>
  );
};

export const useAuthCtx = () => useContext(AuthCtx);

export default AuthProvider;
