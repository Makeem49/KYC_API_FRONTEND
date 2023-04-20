import { ColumnProvider, useColumnCtx } from './column_context';

import { toast } from '../utils';
import { useAuthCtx } from './auth_context';
import { useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { useNavigate } from 'react-router-dom';

// Context wrapper for all the context managers
const ContextProvider = (props: WithChildren) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthCtx();
  const token = localStorage.getItem('cuddie-access-token');

  let idleTimeout: any;
  useIdleTimer({
    timeout: 500000,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
  });
  function handleOnIdle() {
    toast(
      'info',
      'You will be logged out in 10 seconds if you do not perform any activity',
      'You have been inactive for some time'
    );
    idleTimeout = setTimeout(performLogout, 5 * 1000);
  }
  function performLogout() {
    // action('signout')
    navigate('/login');
    // console.log('hello');
  }
  function handleOnActive() {
    clearTimeout(idleTimeout);
  }

  useEffect(() => {
    if (!isAuthenticated || !token) {
      return navigate('login');
    }
    //eslint-disable-next-line
  }, [isAuthenticated]);
  return <ColumnProvider>{props.children}</ColumnProvider>;
};

export { useAuthCtx, useColumnCtx };

export default ContextProvider;
