import React, { Component } from "react";
import './AutoComplete.css';
import debounce from 'lodash.debounce';
import nextid from 'react-id-generator';
import styled from 'styled-components';
class Autocomplete extends Component {
  state = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ""
  };

  changedHandler = debounce((text) => {
    console.log(text);
    const tempUserInput = text;
    const filteredSuggestions = this.props.suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(text.toLowerCase()) > -1
    );
 

    console.log(filteredSuggestions);
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: filteredSuggestions,
      showSuggestions: true,
      userInput: tempUserInput
    });
  },500);

  clicked = suggestName => {
    console.log(suggestName);
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: suggestName
    });
    this.inputElement.value= suggestName;
  };

  render() {
  
    let  suggestionsListComponent = null;
    if (this.state.showSuggestions && this.state.userInput) {
      if (this.state.filteredSuggestions.length) {
        
       suggestionsListComponent = (
          <ul className="suggestions">
            {this.state.filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === this.state.activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={nextid()} onClick={(e) => this.clicked(e.currentTarget.innerText)}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
          
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }
    return (
      <StyledAutoComplete>
        <input type="text" ref={inputEl => this.inputElement = inputEl} onChange={(e) => this.changedHandler(e.target.value)}/>
        <button className="add-button" onClick={() => this.props.clicked(this.state.userInput)}>ADD</button>
        {suggestionsListComponent}
      </StyledAutoComplete>
    );
  }
}


const StyledAutoComplete = styled.div`
margin-top : 10px;
`;
export default Autocomplete;
