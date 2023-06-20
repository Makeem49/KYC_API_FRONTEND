import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { authenticate } from '../api';

interface AuthInterface {
  isAuthenticated: boolean;
  login: ({ email, password }: { email: string; password: string }) => void;

  logout: () => void;
  loading: boolean;
}

const AuthCtx = createContext({} as AuthInterface);

const AuthProvider = (props: WithChildren) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const authStatus: string =
    localStorage.getItem('sinbad-kyc-auth-status') ?? 'false';

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    authStatus === 'true'
  );

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    const resp = await authenticate(email, password);
    setLoading(false);

    localStorage.setItem('sinbad-kyc-token', resp.access);
    console.log(resp.data, 'is responding');

    localStorage.setItem('sinbad-kyc-auth-status', 'true');
    setIsAuthenticated(true);
    setLoading(false);

    return window.location.assign('/');
  };

  const logout = () => {
    localStorage.removeItem('token');

    localStorage.removeItem('sinbad-kyc-auth-status');
    setIsAuthenticated(false);

    navigate('/login');
  };

  return (
    <AuthCtx.Provider value={{ isAuthenticated, login, logout, loading }}>
      {props.children}
    </AuthCtx.Provider>
  );
};

export const useAuthCtx = () => useContext(AuthCtx);

export default AuthProvider;
