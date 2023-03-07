import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import InitialOverlay from './overlay';
import LoginOverlay from './login';
import AuthProvider from '../../context/auth_context';

const Authentication = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const [showLogin, setShowLogin] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowOverlay(false);
      setShowLogin(true);
    }, 3000);
  }, []);
  return (
    <AuthProvider>
      <AnimatePresence>
        <div className='w-screen h-screen bg-white absolute top-0 left-0 right-0 '>
          <InitialOverlay isVisible={showOverlay} />
          <LoginOverlay isVisible={showLogin} />
        </div>
      </AnimatePresence>
    </AuthProvider>
  );
};

export default Authentication;
