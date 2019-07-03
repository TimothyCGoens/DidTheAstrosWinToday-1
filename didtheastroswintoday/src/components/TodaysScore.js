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

    const gameinfo = this.state.games.map((info, index) => {
      if (index == 8)


    {return(
      <div>
      <ul>
      <li className="ScoresList">
      <p> HELLLLL YEEEAAAA </p>
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
