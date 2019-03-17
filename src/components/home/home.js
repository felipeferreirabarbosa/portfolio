// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

import pdf from '../artigos/Curriculim_Vitae_Felipe_Ferreira_Barbosa.pdf'
const Home = () => (
  <Row>
    <Col m={3} s={12}>
      {/* <UserProfile /> */}
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">About Me</h5>
        <Card>
          <div>
            <a href={pdf}>Click here for my pdf</a>
          </div>
        </Card>
        <h5 className="subtitle">Experiences</h5>
        {/* <Experience />
        <Experience /> */}
    </Col>
  </Row>
);

export default Home;
