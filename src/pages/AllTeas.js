import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import TeaCard from "../components/TeaCard";
import BenefitCard from "../components/BenefitCard";

import useTeas from "../hooks/useTeas";

const AllTeas = (props) => {
  const [teas, fetchTeas] = useTeas()
  // const [teaBens, fetchTeaBens] = useTeaBens()

  // console.log(teas.length && teas[1].benefits[0].name)

  // const test = () => {
  //   teas[1].benefits.forEach(element => console.log(element));
  // }
  
  const generatedList = () => {
    return teas.map((tea, index) => (
      <Col xs={4}>
        <Link to = {`/allteas/${tea.id}`} key = {index}>
          <TeaCard tea = {tea} />
        </Link>
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
