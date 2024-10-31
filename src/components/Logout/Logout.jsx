/* import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Dropdown } from 'react-bootstrap';
import { FaUser, FaSignOutAlt, FaHeart, FaShoppingCart } from 'react-icons/fa';

export const Logout = () => {
  const { logout } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <Dropdown
      show={showDropdown}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <Dropdown.Toggle variant="link" id="dropdown-basic">
        <FaUser />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <FaHeart /> Lista de Deseos
        </Dropdown.Item>
        <Dropdown.Item>
          <FaShoppingCart /> Mis Compras
        </Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>
          <FaSignOutAlt /> Cerrar Sesión
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
 */