import React, { Component } from 'react';
import './HomeComponent.css';


export default class HomeComponent extends Component {
  render() {
    return (
      <div className='home'>
        <h4 className='quizApp'>Quiz App</h4>
        <button className='play'>Play</button>
      </div>
    )
  }
}
