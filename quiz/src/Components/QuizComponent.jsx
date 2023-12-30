import React, { Component, useState } from "react";
import "./QuizComponent.css";
import Questions from "./../resources/quizQuestion.json";

export default class QuizComponent extends Component {
  constructor() {
    super();
    this.state = {
      currIndex: 1,
    };
  }
  next = () => {
    if (this.state.currIndex < 15) {
      this.setState((prev) => ({ currIndex: prev.currIndex + 1 }));
    }else if(this.state.currIndex==15){
      alert("Yayyy !! You attempted all the questions")
      this.setState((prev)=>({currIndex: prev.currIndex=1}))
    }
  };
  previous = () => {
    if (this.state.currIndex > 1) {
      this.setState((prev) => ({ currIndex: prev.currIndex - 1 }));
    }
  };
  quit = () => {
    // this.setState((prev)=>({currIndex: prev.currIndex+1}));
    let quit_confirm = confirm("Are you sure you want to quit?");
    if (quit_confirm) {
      this.setState((prev)=>({currIndex: prev.currIndex=1}))
      // console.log('State', this.setState)
    }
  };

  render() {
    return (
      <div className="quizBg">
        <div className="box">
          <h2 className="ques">Question</h2>
          <p className="quizNumber">{this.state.currIndex} of 15</p>
          <p>{Questions[this.state.currIndex - 1].question}</p>
          <div className="buttons">
            <button onClick={this.next} className="btn1">
              {Questions[this.state.currIndex - 1].optionA}
            </button>
            <button onClick={this.next} className="btn2">
              {Questions[this.state.currIndex - 1].optionB}
            </button>
            <button onClick={this.next} className="btn3">
              {Questions[this.state.currIndex - 1].optionC}
            </button>
            <button onClick={this.next} className="btn4">
              {Questions[this.state.currIndex - 1].optionD}
            </button>
          </div>
          <div className="stages">
            <button className="previous" onClick={this.previous}>
              Previous
            </button>
            <button className="next" onClick={this.next}>
              Next
            </button>
            <button className="quit" onClick={this.quit}>
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
