import React, {Component} from 'react'

export class DefeatMessage extends Component {

render() {

  let defeatMessages = ['Uh oh', 'Baseball is bad right now', 'Maybe next time', 'Not today chief', 'Dang...', 'Unfortunately Not', 'NOOOOOO!', 'Ah, crap', '*#$@ no']
  let randomIndex = Math.floor(Math.random() * defeatMessages.length)
  let randomDefeatMessage = defeatMessages[randomIndex]

  return(
    <div>
    <p> {randomDefeatMessage}</p>
    </div>
  )
}


}

export default DefeatMessage
