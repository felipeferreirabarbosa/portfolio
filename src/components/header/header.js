// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';

const Header = () => (
  <Row>
    <Navbar className="blue-grey darken-4">
      <NavItem href='/'>Início</NavItem>
      <NavItem href='/projects'>Projetos</NavItem>
      <NavItem href='/social_media'>Redes Socias</NavItem>
      <NavItem href='/curriculo'>Currículo</NavItem>
    </Navbar>
  </Row>
);

export default Header;
