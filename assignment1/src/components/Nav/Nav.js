import React from "react";
import { Menu } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
  return (
    <Menu color= 'black' stackable inverted>
    <Menu.Item>
      <img src='images/Pokeball PNG.png' alt='Pokeball Logo' />
    </Menu.Item>

    <Menu.Item as={NavLink} to="/" exact>
    PokePlug
  </Menu.Item>

  <Menu.Item as={NavLink} to="/orders">
    Your Orders
  </Menu.Item>

  <Menu.Item as={NavLink} to="/users/12345678">
        Your Account
      </Menu.Item>

  </Menu>
  )
};

export default Nav;