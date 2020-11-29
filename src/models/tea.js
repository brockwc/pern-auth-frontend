const REACT_APP_API_URL = "http://localhost:4000/api/v1"

class TeaModel {

  static all = () => {
    // Calling the index method in the API controller
    return fetch(`${REACT_APP_API_URL}/allteas`).then(res => res.json())
  }

  static show = (teaId) => {
    return fetch(`${REACT_APP_API_URL}/allteas/${teaId}`).then(res => res.json())
  }
}

export default TeaModel
