// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';
import pdf_curriculo from '../artigos/Curriculim_Vitae_Felipe_Ferreira_Barbosa.pdf'

const Header = () => (
  <Row>
    <Navbar className="blue-grey darken-4">
      <NavItem href='/'>Início</NavItem>
      <NavItem href='/projects'>Projetos</NavItem>
      <NavItem href='/social_media'>Redes Socias</NavItem>
      <NavItem href={pdf_curriculo}>Currículo</NavItem>
      <NavItem href='/artigos'>Artigos</NavItem>
    </Navbar>
  </Row>
);

export default Header;
