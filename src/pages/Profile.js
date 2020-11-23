import React, { Component } from 'react';
import Brewery from '../models/brewery';
import BreweryPost from '../components/BreweryPost';
import BeerPost from '../components/BeerPost'
import './App.scss';
import BeerModel from '../models/beer';

class Profile extends Component {
  state = {
    breweryComments: [],
    beerComments: [],
    currentUser: localStorage.getItem('id')
  }

  componentDidMount() {
    this.fetchCommentData()
    this.fetchBeerData()
  }

  fetchCommentData = () => {
    Brewery.showPost(this.state.currentUser).then(data => {
        // console.log(data)
        this.setState({ breweryComments: data.user })
    })
  }

  fetchBeerData = () => {
    BeerModel.showPost(this.state.currentUser).then(data => {
      console.log(data)
      // debugger
      // console.log(data.user)
      this.setState({ beerComments: data.beer })
    })
  }

  render() {
    console.log(this.state.beerComments)
    let breweryCommentList = this.state.breweryComments && this.state.breweryComments.map((comment,index) => {
        return (
          <BreweryPost {...comment} key={index}/>
        )
    })

    let beerCommentList = this.state.beerComments && this.state.beerComments.map((comment, index) => {
      return (
        <BeerPost {...comment} key={index} />
      )
    })

    return (
      <div className="profile">
        <h1 className="profileHead">Welcome to your Profile!</h1>
        <h2 className="profileSubhead"> User { this.state.currentUser } (Change to user name)</h2>
        { this.state.breweryComments ? breweryCommentList : 'Loading..'}
        { this.state.beerComments ? beerCommentList : 'Loading...'}
        <div className="yourPosts">
          <div className="breweryContainer">
            <h3 id="breweryPosts">Your Brewery Check-ins</h3>
            <BreweryPost />
          </div>
          <div className="beerContainer">
            <h3 id="beerPosts">Your beer reviews</h3>
            <BeerPost />
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;