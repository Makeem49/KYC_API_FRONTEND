import AuthProvider from '../../context/auth_context';
import LoginOverlay from './login';

const Authentication = () => {
  return (
    <AuthProvider>
      <div className="w-screen h-screen bg-white absolute top-0 left-0 right-0 ">
        <LoginOverlay />
      </div>
    </AuthProvider>
  );
};

export default Authentication;
