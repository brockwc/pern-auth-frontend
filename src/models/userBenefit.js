const REACT_APP_API_URL = "http://localhost:4000/api/v1"

class UserBenefitModel {

    static all = () => {
        // Calling the index method in the API controller
        return fetch(`${REACT_APP_API_URL}/profile`).then(res => res.json())
    }

    static show = (userBenefitId) => {
        return fetch(`${REACT_APP_API_URL}/profile/${userBenefitId}`).then(res => res.json())
    }
}


console.log('helllloooo')


export default UserBenefitModel;