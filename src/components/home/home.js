// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

import UserProfile from "../user_profile/user_profile"
import pdf_curriculo from '../artigos/Curriculim_Vitae_Felipe_Ferreira_Barbosa.pdf'
const Home = () => (
  <Row>
  <Col m={3} s={12}>
    <UserProfile />
  </Col>
    <Col m={3} s={12}>
      {/* <UserProfile /> */}
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">A Meu Respeito / About Me </h5>
        <Card>
          <div>
          <p>Sou formado em Engenharia de Computação pela Universidade Federal do Rio Grande do Norte, atualmente estou no mestrado em Engenharia Mecatrônica pela mesma. </p>
          <p>As áreas que mais me interessam são relacionadas a Machine Learning, Visão Computacional (sendo esta minha atual linha de pesquisa) além de Desenvolvimento Web-Mobile.</p>
          <p><a href={pdf_curriculo}>Clique aqui</a> para ter uma visão geral dos meus projetos ou acesse as abas "Projetos" e "Artigos" para uma visão mais detalhada.</p>
          </div>
        </Card>
        <Card>
          <div>
          <p>I have a degree in Computer Engineering from the Federal University of Rio Grande do Norte, currently I am in the master's program in Mechatronics Engineering. </p>
          <p>The areas that interest me most are related to Machine Learning, Computational Vision (this being my current line of research) in addition to Web-Mobile Development.</p>
          <p><a href={pdf_curriculo}>Click here</a> to get an overview of my projects or go to the "Projetos" and "Artigos" tabs for a more detailed view.</p>
          </div>
        </Card>
        <h5 className="subtitle">Experiencias / Experiences</h5>
        {/* <Experience />
        <Experience /> */}
    </Col>
  </Row>
);

export default Home;
