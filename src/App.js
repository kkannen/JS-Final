import React, { Component } from 'react';
import './App.css';
import TicTac from './components/TicTac'
import MadLibs from './components/MadLibs'
import PigLatin from './components/PigLatin'
import pigpic from './images/pigPicture.jpg'
import confetti from './images/confetti.jpg'
import pretty from './images/pretty.jpg'
import bus from './images/bus.jpg'

class App extends Component {

  state = {
    madLibsOut: false,
    ticTacOut: false,
    pigLatinOut: false,
    appStyle: {
      backgroundImage: `url(${bus})`,
      backgroundSize: 'cover',
      height: "100vh",
      width: "100%",
    }
  }

  handleClickTic = () => {
    const out = this.state.ticTacOut
    const newStyle = { ...this.state.appStyle, backgroundImage: `url(${confetti})`}
    this.setState({ticTacOut: out == false ? true : false, pigLatinOut: false, madLibsOut: false, appStyle: newStyle})
  }

  handleClickMad = () => {
    const out = this.state.madLibsOut
    const newStyle = { ...this.state.appStyle, backgroundImage: `url(${pretty})`}
    this.setState({madLibsOut: out == false ? true : false, ticTacOut: false, pigLatinOut: false, appStyle: newStyle})
  }

  handleClickPig = () => {
    const out = this.state.pigLatinOut
    const newStyle = { ...this.state.appStyle, backgroundImage: `url(${pigpic})`}
    this.setState({pigLatinOut: out == false ? true : false, ticTacOut: false, madLibsOut: false, appStyle: newStyle})
  }

 getTicTac = () => {
   if (!this.state.ticTacOut) {
     return null
   } else {
     return <TicTac/>
   }
 }

 getMadLibs = () => {
   if (!this.state.madLibsOut) {
     return null
   } else {
     return <MadLibs/>
   }
 }

 getPigLatin = () => {
   if (!this.state.pigLatinOut) {
     return null
   } else {
     return <PigLatin/>
   }
 }

 renderButtons = () => {
   if(!this.state.madLibsOut && !this.state.pigLatinOut && !this.state.ticTacOut) {
     const buttonStyle = {
       height: 400,
       marginLeft: '33%',
       width: '33%',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'space-around',
       paddingTop:200,
       color:'#22374',
     }
     return (
       <div className = 'buttons' style={buttonStyle}>
         <h1>PLEASE CHOOSE A POINTLESS ACTIVITY FROM THIS LIST:</h1>
         <button className ="gameButtons" style={{width: '100%'}} onClick={this.handleClickMad}>{this.state.madLibsOut ? 'PUT AWAY MADLIBS' : 'MADLIBS'}</button>
         <button className ="gameButtons" style={{width: '100%'}} onClick={this.handleClickTic}>{this.state.ticTacOut ? 'PUT AWAY TIC-TAC-TOE' : 'TIC-TAC-TOE'}</button>
         <button className ="gameButtons" style={{width: '100%'}} onClick={this.handleClickPig}>{this.state.pigLatinOut ? 'PUT AWAY PIG LATIN' : 'PIG LATIN TRANSLATOR'}</button>
       </div>
     )
   } else {
     return (
       <div className = 'buttons'>
         <button className ="gameButtons" onClick={this.handleClickMad}>{this.state.madLibsOut ? 'PUT AWAY MADLIBS' : 'MADLIBS'}</button>
         <button className ="gameButtons" onClick={this.handleClickTic}>{this.state.ticTacOut ? 'PUT AWAY TIC-TAC-TOE' : 'TIC-TAC-TOE'}</button>
         <button className ="gameButtons" onClick={this.handleClickPig}>{this.state.pigLatinOut ? 'PUT AWAY PIG LATIN' : 'PIG LATIN TRANSLATOR'}</button>
       </div>
     )
   }
 }

  render() {
    return (
      <div className="App" style={this.state.appStyle}>
        {this.renderButtons()}
        {this.getTicTac()}
        {this.getMadLibs()}
        {this.getPigLatin()}
      </div>
    );
  }
}

export default App;
