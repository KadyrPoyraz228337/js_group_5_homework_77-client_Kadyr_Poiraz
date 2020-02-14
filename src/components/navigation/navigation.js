import React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand tag={RouterNavLink} to='/'>forum</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to='/new' >Create new message</NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Navigation;