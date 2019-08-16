import React, {Component} from 'react'
import './nav.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn : false
        };
    }
    render() {
        return(
         <div>
             <div className="Nav-LinkGroup">
                 <Nav className="mr-auto">
                 <NavLink exact className="NavLink Nav-HomeLink" href="/">Home</NavLink>
                 <NavLink className="NavLink Nav-Navlink" href="/about">About me</NavLink>
                 </Nav>
                
             </div>


         </div>
        )
    }
}