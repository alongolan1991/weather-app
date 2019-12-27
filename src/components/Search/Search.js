import React from "react"
import styled from 'styled-components';

const serach = () => {
  return (
    <SearchSection>
      <label>
        <input type="text" placeholder="Add City" />
      </label>
      <button >ADD</button>
    </SearchSection>
  );
};

const SearchSection = styled.section`
margin-top : 10px;
`;

export default serach;
