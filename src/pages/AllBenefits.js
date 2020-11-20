import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import BenefitCard from "../components/BenefitCard"

import useBenefits from "../hooks/useBenefits";

const AllBenefits = (props) => {
  const [benefits, fetchBenefits] = useBenefits([])

  const generatedList = () => {
    return benefits.map((benefit, index) => (
      <Col xs = {4}>
        <Link to = {`/allbenefits/${benefit.id}`} key = {index}>
          <BenefitCard benefit = {benefit} />
        </Link>
      </Col>
    ))
  }

  return (
    <div>
      <h1>Here are benefits!</h1>
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
