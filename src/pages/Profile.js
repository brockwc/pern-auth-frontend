import React, { useState, useEffect } from 'react'
import UserBenefitCard from '../components/UserBenefitCard';
import UserBenefitModel from "../models/userBenefit";
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Profile = (props) => {
  const [userBenefits, setUserBenefits] = useState([])
  const [userInfo, setUserInfo] = useState(null)
  const [userId, setUserId] = useState(null)


  const fetchUserBenData = () => {
    UserBenefitModel.all().then(data => {
      setUserBenefits(data.userBenefits[0].benefits)
      setUserInfo(data.userBenefits[0].firstName)
      setUserId(data.userBenefits[0].id)
    })
  }

  useEffect(() => {
    fetchUserBenData()
  }, [])

  const generatedUserBenList = () => {
    return userBenefits.map((userBenefit, index) => (
      <Col xs={4}>
        <UserBenefitCard userBenefit={userBenefit} key={userBenefit.id} />
      </Col>
    ))
  }

  return (
    <div>
      <h1>Hello {userInfo}</h1>
      <Link to={`/user/${userId}`}>Edit Your Info</Link>
      <h1>Here are benefits!</h1>
      { userBenefits.length ?
        <Container fluid>
          <Row>
            {
              generatedUserBenList()
            }
          </Row>
        </Container>
        : "No benefits saved"}
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
