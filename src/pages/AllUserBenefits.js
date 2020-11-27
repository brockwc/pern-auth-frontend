import React from 'react'
import useUserBenefits from "../hooks/useUserBenefits";

const AllUserBenefits = () => {
    const [userBenefits, fetchUserBenData] = useUserBenefits([])

    const generatedUserBenList = () => {
        return userBenefits.map((userBenefit, index) => (
            <Col xs={12} sm={6} md={4} lg={3}>
                <UserBenefitCard userBenefit={userBenefit} key={userBenefit.id} />
            </Col>
        ))
    }
    return (
        <div>
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


export default AllUserBenefits