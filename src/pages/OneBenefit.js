import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import BenefitModel from "../models/benefit"
import OneBenefitCard from "../components/OneBenefitCard"

const OneBenefit = (props) => {
  const [currentBenefit, setCurrentBenefit] = useState(props.match.params.id)
  const [allBenTeas, SetAllBenTeas] = useState([])

  useEffect(() => {
    fetchBenData()
  }, [])

  const fetchBenData = () => {
    BenefitModel.show(currentBenefit).then(data => {
      setCurrentBenefit( data.benefit[0].name )
      SetAllBenTeas( data.benefit[0].teas)
    })
  }

  const genBenTeas = () => {
    return allBenTeas.map((allBenTeas, index) => (
      <Col xs={4} key={allBenTeas.id}>
        <OneBenefitCard allBenTeas={allBenTeas} key={allBenTeas.id} />
      </Col>
    ))
  }

  return (
    <div>
    <h1>All Teas for {currentBenefit}</h1>
      { currentBenefit.length ?
        <Container fluid>
          <Row>
            {
              genBenTeas()
            }
          </Row>
        </Container>
      : "Loading..." }
    </div>
  )
}

export default OneBenefit
