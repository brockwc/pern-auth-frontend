import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import BenefitCard from "../components/BenefitCard"

import useBenefits from "../hooks/useBenefits";

const AllBenefits = (props) => {
  const [benefits] = useBenefits([])

  const generatedList = () => {
    return benefits.map((benefit, index) => (
      <Col xs={12} sm={6} md={4} lg={3} key={benefit.id}>
        <BenefitCard benefit = {benefit} key={benefit.id}/>
      </Col>
    ))
  }

  return (
    <div>
      <h1>Here are our benefits!</h1>
      { benefits.length ?
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

export default AllBenefits
