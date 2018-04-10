import React, { Component } from 'react';
import '../stylesheets/madlibs.css'

class MadLibs extends Component {

  state = {
    error: null,
    isLoaded: false,
    title: null,
    blanks: [],
    value: [],
    storyGenerated: false,
  };

  getNewMadlib = () => {
    fetch("https://madlibz.herokuapp.com/api/random?minlength=8&maxlength=25").then((res) => {
    res.json().then((madLib) => {
      console.log(madLib);
      this.setState({title: madLib.title, blanks: madLib.blanks, value: madLib.value, storyGenerated: false})
    });
  });
  }

  componentDidMount = () => {
    this.getNewMadlib()
  }

  handleEnterWord = (e, index) => {
    const word = e.target.value
    const newBlanks = [...this.state.blanks]
    newBlanks[index] = word
    this.setState({blanks: newBlanks})
  }

  handleCreateStory = () => {
    this.setState(prevState => ({storyGenerated: !prevState.storyGenerated}));
    if(this.state.storyGenerated){
      this.getNewMadlib()
    }
  }

  story = () => {
    if (!this.state.storyGenerated) {
      return null;
    }
    const storyPieces = this.state.value
    storyPieces.pop()
    return (
      <div className='story'>
        <h2>{this.state.title}</h2>
        <p>
          {storyPieces.map((val, key) => {
          return <div className = 'storySection' key={key}>{val}<strong>{this.state.blanks[key]}</strong></div>})}
        </p>
      </div>)
  }

  renderBlanks = () => {
    if(this.state.storyGenerated){
      return null
    }
    return (
      <div className = 'madForm'>
        {this.state.blanks.map((blank, key) => {
          return <input className="blanks" key={key} placeholder={blank} onChange={(e)=>this.handleEnterWord(e, key)}/>
        })}
      </div>
    )
  }


  render() {
    return (
      <div className="madLibs">
        {this.renderBlanks()}
        {this.story()}
        <button className="storyButton" onClick={this.handleCreateStory}>
          {this.state.storyGenerated ? 'NEW MADLIB' : 'CREATE STORY'}
        </button>
      </div>
    );
  }
}
export default MadLibs;
