// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
import avatar from '../../images/foto_perfil.jpg';

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >Felipe Ferreira</h5>
        <p className="blue-grey darken-4 white-text">Desenvolvedor Java</p>
        <p className="blue-grey darken-3 white-text">Pesquisador: Visão Computacional</p>
        <p className="blue-grey darken-4 white-text">Mestrando: Engenharia Mecatrônica</p>
      </Row>
  </Card>
);

export default UserProfile;
