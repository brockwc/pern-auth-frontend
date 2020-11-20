import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
// import { Link } from "react-router-dom";
import TeaCard from "../components/TeaCard";
import AllBenefits from "../pages/AllBenefits"
// import BenefitCard from "../components/BenefitCard";

import useTeas from "../hooks/useTeas";
import useBenefits from "../hooks/useBenefits";

const AllTeas = (props) => {
  const [teas, fetchTeas] = useTeas()
  const [benefits, fetchBenefits] = useBenefits()
  // const [teaBens, fetchTeaBens] = useTeaBens()

  // console.log(teas.length && teas[1].benefits[0].name)

  // const test = () => {
  //   teas[1].benefits.forEach(element => console.log(element.name));
  // }
  
  const generatedList = () => {
    return teas.map((tea, index) => (
      <Col xs={4}>
          <TeaCard tea = {tea} benefits = {benefits} />
      </Col>
    ))
  }

  // const generateBensList = () => {
  //   return teaBens.map((teaBen, index) => (
  //     <BenefitCard teaBen={teaBen} />
  //   ))
  // }

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
