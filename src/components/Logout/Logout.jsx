import { useAuth0 } from '@auth0/auth0-react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

export const Logout = () => {
  const { logout } = useAuth0();

  const renderTooltip = (props) => (
    <Tooltip id="logout-tooltip" {...props}>
      Cerrar Sesión
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        <FaTimes /> 
      </button>
    </OverlayTrigger>
  );
};
