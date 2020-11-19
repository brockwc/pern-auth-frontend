import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import TeaCard from "../components/TeaCard";

import useTeas from "../hooks/useTeas";

const AllTeas = (props) => {
  const [teas, fetchTeas] = useTeas()

  const generatedList = () => {
    return teas.map((tea, index) => (
      <Col xs={6}>
        <Link to = {`/allteas/${tea.id}`} key = {index}>
          <TeaCard tea = {tea} />
        </Link>
      </Col>
    ))
  }

  return (
    <div>
      <h1>Here's all of our teas</h1>
      { teas.length ? 
        <Container fluid>
          <Row>
            {
              generatedList()
            }
          </Row>
        </Container>
      : "Loading..." }
    </div>
  )
}

export default AllTeas
