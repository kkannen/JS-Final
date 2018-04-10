import React, { Component } from 'react';
import '../stylesheets/PigLatin.css';

class PigLatin extends Component {
  state = {
    clicked: false,
    translatedPhrase: '',
    renderedText: null,
  }

  pigLatin = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    word = word.trim().toLowerCase()
    const letters = word.split('')
    if (letters[0] === vowels[5]) {
      return word.slice(1) + 'yay'
    } else if (vowels.includes(letters[0])) {
      return word + 'yay'
    } else {
      const firstVowel = letters.findIndex(letter => vowels.includes(letter));
      const firstLetters = (letters.splice(0, firstVowel)).join('')
      const translatedWordAsArr = letters.push(firstLetters + 'ay')
      const translatedWord = letters.join('')
      return(translatedWord)
    }
  }

  sentenceTranslator = (e) => {
    const phrase = e.target.value
    const phraseArr = phrase.split(' ').map((word) => {
    return this.pigLatin(word)
    }).join(' ')
    this.setState({translatedPhrase: phraseArr})
  }

  handleTranslate = () => {
    console.log('click')
    const clicked = this.state.clicked
    const translated = this.state.translatedPhrase
    this.setState({clicked: true, renderedText: translated});
  }

  renderTranslated = () => {
    if (!this.state.clicked) {
      return null
    }
    return <h3>{this.state.renderedText}</h3>
  }

  render() {
    return (
      <div className="pigLatin">
        <div className='container'>
          <h2>PIG LATIN TRANSLATOR</h2>
          <input className = 'pigLatinInput' onChange = {this.sentenceTranslator}></input>
          <button className='pigButton' onClick = {this.handleTranslate}>TRANSLATE</button>
          {this.renderTranslated()}
        </div>

      </div>
    );
  }
}

export default PigLatin;
