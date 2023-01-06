import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../api';
import { toast } from '../utils';

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
  loading: boolean;
}

const AuthCtx = createContext({} as AuthInterface);

const AuthProvider = (props: WithChildren) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const resp = await authenticate(username, password);

    if (resp.message !== 'Authenticated') {
      console.log(resp.message);
      toast('error', 'Request failed!!!', 'invalid username or password');

      // toast(
      //   'success',
      //   'Sucess!!',
      //   'You have successfully created a third party dispatch'
      // );
      setLoading(false);

      return;
    }

    // Drop success toast
    console.log(resp.message);
    localStorage.setItem('cuddie-access-token', resp.access_token);
    localStorage.setItem('cuddie-auth-status', 'true');
    setIsAuthenticated(true);
    setLoading(false);
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
    <AuthCtx.Provider value={{ isAuthenticated, login, logout, loading }}>
      {props.children}
    </AuthCtx.Provider>
  );
};

export const useAuthCtx = () => useContext(AuthCtx);

export default AuthProvider;
