const REACT_APP_API_URL = "http://localhost:4000/api/v1"

class BenefitModel {

  static all = () => {
    // Calling the index method in the API controller
    console.log("Skadoosh")
    return fetch(`${REACT_APP_API_URL}/allbenefits`).then(res => res.json())
  }

  static show = (benefitId) => {
    return fetch(`${REACT_APP_API_URL}/allbenefits/${benefitId}`).then(res => res.json())
  }

  static create = (userBenefitData) => {
    return fetch(`${REACT_APP_API_URL}/allbenefits`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userBenefitData)
    })
      .then(res => res.json())
  }
}



export default BenefitModel;