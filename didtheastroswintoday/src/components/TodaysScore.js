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
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.sportradar.us/mlb-t6/games/2019/07/07/boxscore.json?api_key=82zanc4f93d4xd6x96awntpw`,{crossdomain:true})
    .then(response => {
      console.log(response)
      this.setState({games: response.data.league.games})
    })
  }

  render(){

    const gameinfo = this.state.games.map((info, index) => {
      if (index === 1 || index === 2 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7 || index === 8 || index === 9 || index === 10 || index === 11 || index === 12 || index === 13 || index === 14 || index === 15)


    {return(
      <div>
      <ul className="ScoresList">
      <li>
      <p> {info.game.home.name} - {info.game.home.runs} </p>
      <p> {info.game.away.name} - {info.game.away.runs} </p>
      </li>
      </ul>
      </div>
      )
    }
  })

    return (
      <div className="WinButton">
      <button onClick={this.WinCheck}>Did they win?</button>
      {gameinfo}
      </div>
    )
  }
}

export default TodaysScore
