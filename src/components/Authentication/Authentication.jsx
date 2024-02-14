import { Login } from '../Login/Login';
import { Logout } from '../Logout/Logout';
import { Profile } from '../Profile/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import '../Authentication/Authenticatino.css';

export const Authentication = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="d-flex align-items-center">
      {isAuthenticated ? (
        <>
          <Profile />
          <Logout />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
};
