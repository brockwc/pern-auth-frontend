import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useSpring, animated, useChain } from "react-spring"

const Home = () => {

  const springName = useSpring({
    delay: 1000,
    from: {opacity: 0, paddingTop: '20vh'},
    config: { mass: 30, friction: 50, tension: 80, clamp: true },
    to: {opacity: 1, paddingTop: '0vh'}
    
  })
  
  return (

    <div className="homePage">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/05/30/12/19/tea-2356764_960_720.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/11/29/13/04/beverage-1869716_960_720.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/01/19/18/03/tea-1150046_960_720.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h1 className="mainTitle">Welcome to</h1>
      <animated.h1 className="fade" style={springName}>Soul Sip'n</animated.h1>
    </div>
  )
}

export default Home
