import React, { Component } from 'react'
import './ResultComponent.css'

export default class ResultComponent extends Component {
  render() {
    return (
      <div className='result'>
        <h1>Result</h1>
        <div className="box">
          <h4>You need more practice!</h4>
          <h1>Your score is 20%</h1>
          <div className="info">
            <div className="infoTag">
              <p>Total number of questions</p>
              <p>15</p>
            </div>
            <div className="infoTag">
              <p>Number of attempted questions</p>
              <p>9</p>
            </div>
            <div className="infoTag">
              <p>Number of correct answers</p>
              <p>3</p>
            </div>
            <div className="infoTag">
              <p>Number of wrong answers</p>
              <p>6</p>
            </div>
          </div>
        </div>
        <div className="resultButton">
          <button className="play-again">Play Again</button>
          <button className="backtohome">Back to home</button>
        </div>
      </div>
    ) 
  }
}
