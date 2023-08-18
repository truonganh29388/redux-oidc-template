import { NavLink } from 'custom-fields';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav,
  Navbar,
  NavbarBrand, NavbarToggler,
  NavItem, UncontrolledDropdown
} from 'reactstrap';
import './Header.scss';

Header.propTypes = {};

function Header() {
  const user = useSelector(state => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <Navbar expand="md" color="warning" fixed="top" container="md">
        <NavbarBrand href="/">Application</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar tabs>
            <NavItem>
              <NavLink to="/task-1" title="Task 1" />
            </NavItem>
            <NavItem>
              <NavLink to="/task-2" title="Task 2" />
            </NavItem>
          </Nav>
          {user ?
            <UncontrolledDropdown>
              <DropdownToggle nav caret>
                Hello {user?.name}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem><NavLink to="/signout" title="Sign Out" /></DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> :
            <NavLink to="/signin" title="Signin" />
          }
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;