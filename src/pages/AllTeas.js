import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import TeaCard from "../components/TeaCard";


import useTeas from "../hooks/useTeas";
import useBenefits from "../hooks/useBenefits";

const AllTeas = (props) => {
  const [teas] = useTeas('')
  const [benefits] = useBenefits('')

  
  const generatedList = () => {
    return teas.map((tea, index) => (
      <Col xs={12} sm={6} md={4} lg={3} >
          <TeaCard tea = {tea} benefits = {benefits} key={benefits.id} />
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
