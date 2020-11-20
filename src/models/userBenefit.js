const REACT_APP_API_URL = "http://localhost:4000/api/v1"
const userId = localStorage.getItem('id')

class UserBenefitModel {

    static all = () => {
        // Calling the index method in the API controller
        return fetch(`${REACT_APP_API_URL}/profile/${userId}`).then(res => res.json())
    }

    static show = (userBenefitId) => {
        return fetch(`${REACT_APP_API_URL}/profile/${userBenefitId}`).then(res => res.json())
    }
}


export default UserBenefitModel;