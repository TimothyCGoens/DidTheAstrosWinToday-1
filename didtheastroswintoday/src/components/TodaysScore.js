import React, {Component} from 'react'
import axios from 'axios'
import './TodaysScore.css';

export class TodaysScore extends Component {
  constructor() {
    super()

    this.state = {
      games: []
    }
  }


  WinCheck = () => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.sportradar.us/mlb-t6/games/2019/07/02/boxscore.json?api_key=82zanc4f93d4xd6x96awntpw`,{crossdomain:true})
    .then(response => {
      console.log(response)
      this.setState({games: response.data.league.games})
    })
  }

  render(){


    return (
      <div>
      <button onClick={this.WinCheck}>Did they win?</button>
      </div>
    )
  }
}

export default TodaysScore
