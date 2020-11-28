import {useState, useEffect} from "react"
import TeaModel from "../models/tea"

const useTeas = () => {
  const [teas, setTeas] = useState ([])

  const fetchTeas = () => {
    TeaModel.all().then(data => {
      setTeas( data.teas )
    })
  }

  useEffect(() => {
    fetchTeas();
  }, [])

  // return state and our updater function
  return [teas, fetchTeas]
}

export default useTeas