import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {NavWrap, NavItem} from '../Styled'

function Navigation(){
    const location = useLocation();
    return (
        <NavWrap>
            <NavItem active={location.pathname === '/list'}><Link to='/list' >List Users</Link></NavItem>
            <NavItem active={location.pathname === '/add'}><Link to='/add' >Add User</Link></NavItem>
        </NavWrap>
    );
}
export default Navigation;