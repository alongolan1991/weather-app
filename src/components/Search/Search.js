import React from "react"
import styled from 'styled-components';

const serach = (props) => {
  return (
    <SearchSection>
      <label>
        <input onChange={props.changed} value={props.value} type="text" placeholder="Add City" />
      </label>
      <button onClick={props.clicked}>ADD</button>
    </SearchSection>
  );
};

const SearchSection = styled.section`
margin-top : 10px;
`;

export default serach;
