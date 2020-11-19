import {useState, useEffect} from "react"
import UserModel from "../models/user"

const useTeas = () => {
  const [teas, setTeas] = useState ([])

  const fetchTeas = () => {
    UserModel.all().then(data => {
      setTeas( data.teas )
    })
  }

  useEffect(() => {
    fetchTeas();
  }, [])

  // return state and our updater function
  return [teas, fetchTeas]
}

export default useTeas;