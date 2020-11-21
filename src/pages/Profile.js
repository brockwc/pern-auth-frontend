import React, { useState, useEffect } from 'react'
import UserBenefitCard from '../components/UserBenefitCard';
import UserBenefitModel from "../models/userBenefit";
import { Container, Row, Col } from "react-bootstrap"

const Profile = (props) => {
  const [userBenefits, setUserBenefits] = useState([])
  const [userInfo, setUserInfo] = useState(null)

  const fetchUserBenData = () => {
    UserBenefitModel.all().then(data => {
      { console.log(data.userBenefits[0].benefits) }
      { console.log(data.userBenefits[0].firstName) }
      setUserBenefits(data.userBenefits[0].benefits)
      setUserInfo(data.userBenefits[0].firstName)
    })
  }

  useEffect(() => {
    fetchUserBenData()
  }, [])

  const generatedUserBenList = () => {
    return userBenefits.map((userBenefit, index) => (
      <Col xs={4}>
        <UserBenefitCard userBenefit={userBenefit.name} key={userBenefit.id} />
      </Col>
    ))
  }

  return (
    <div>
      <h1>Hello {userInfo}</h1>
      <h1>Here are benefits!</h1>
      { userBenefits.length ?
        <Container fluid>
          <Row>
            {
              generatedUserBenList()
            }
          </Row>
        </Container>
        : "Loading..."}
    </div>
  )
}








// return (
//   <div>
//     {userBenefits.map((userBenefit, index) => {
//       return <p>{userBenefit.name}</p>
//     })}
//   </div>

// )
// }

export default Profile
