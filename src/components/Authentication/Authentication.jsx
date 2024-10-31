/* import { useAuth0 } from '@auth0/auth0-react';
import { Login } from '../Login/Login';
import { Logout } from '../Logout/Logout';
import { Profile } from '../Profile/Profile';
import '../Authentication/Authentication.css';

export const Authentication = () => {
  const { isAuthenticated, user } = useAuth0();

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
}; */
