const REACT_APP_API_URL = "http://localhost:4000/api/v1"

class UserModel {

  // Accessed as UserModel.all()
  static all = () => {
    // Calling the index method in the API controller
    return fetch(`${REACT_APP_API_URL}/allteas`).then(res => res.json())
  }

  // Accessed as GameModel.show(gameId)
  static show = (teaId) => {
    return fetch(`${REACT_APP_API_URL}/teas/${teaId}`).then(res => res.json())
  }

  static create(data) {
    return fetch(`${REACT_APP_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }

  static login(credentials) {
    // remember to send authorization headers
    return fetch(`${REACT_APP_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      // auth headers - included with any request requiring authentication
      credentials: 'include'
    }).then(res => res.json())
  }

  static logout() {
    return fetch(`${REACT_APP_API_URL}/auth/logout`, {
      method: "DELETE",
      credentials: 'include'
    })
  }
}

export default UserModel;