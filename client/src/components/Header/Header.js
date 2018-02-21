import React from "react";
import {Navbar, NavItem, Icon} from "react-materialize";


const Header = props => (
    <Navbar brand="WebScraper" right>
      <NavItem href="get-started.html">
        <Icon>search</Icon>
      </NavItem>
      <NavItem href="get-started.html">
        <Icon>view_module</Icon>
      </NavItem>
      <NavItem href="get-started.html">
        <Icon>refresh</Icon>
      </NavItem>
      <NavItem href="get-started.html">
        <Icon>more_vert</Icon>
      </NavItem>
    </Navbar>
);


export default Header;




