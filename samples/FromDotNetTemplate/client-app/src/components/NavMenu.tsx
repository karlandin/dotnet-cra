import React, { Reducer, useReducer } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

interface IState {
  collapsed: boolean;
}

interface IAction {
  type: 'toggle';
}

const reducer: Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { collapsed: !state.collapsed };
    default:
      throw new Error();
  }
}

export const NavMenu: React.FC = () => {

  const [state, dispatch] = useReducer(reducer, { collapsed: true });

  const toggleNavbar = () => {
    dispatch({ type: 'toggle' });
  }

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">DotnetReact</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
