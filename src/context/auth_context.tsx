import React, { createContext, useContext, useState } from 'react';

import { authenticate } from '../api';
import decodeJwt from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

// import { toast } from '../utils';
// import UseInvalidateAll from '../hooks/useInvalidateAll';

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
    setLoading(false);

    if (resp.message !== 'Authenticated') {
      // toast('error', 'Request failed!!!', 'invalid username or password');
      return;
    }
    // toast('success', 'Sucess!!', 'Login successfully');

    // Drop success toast

    const decodedToken: any = decodeJwt(resp.access_token);
    decodedToken.providers.sort((a: any, b: any) => {
      return a.id > b.id ? 1 : -1;
    });

    console.log(decodedToken, 'here');
    localStorage.setItem(
      'decoded-token_providers',
      decodedToken.providers[0].id
    );

    localStorage.setItem(
      'decoded-token_providers_name',
      decodedToken.providers[0].name
    );

    localStorage.setItem(
      'decoded-country-code',
      decodedToken.providers[0].countryCode
    );

    localStorage.setItem('decoded-user-permissions', decodedToken.permissions);

    localStorage.setItem('default_lang', 'EN');

    const myArrayString = JSON.stringify(decodedToken);
    localStorage.setItem('decoded-arrays', myArrayString);

    localStorage.setItem('cuddie-access-token', resp.access_token);

    localStorage.setItem('cuddie-auth-status', 'true');
    setIsAuthenticated(true);
    setLoading(false);
    return window.location.assign('/');
    // UseInvalidateAll(decodedToken.providers[0].id)

    // console.log(username, password);
  };

  const logout = () => {
    localStorage.removeItem('token');
    // localStorage.removeItem('permissions');
    localStorage.removeItem('cuddie-auth-status');
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
