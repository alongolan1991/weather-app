import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";

const header = () => {
  return (
    <Heaher>
      <Logo />    
    </Heaher>
  );
};

const Heaher = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: #f5f5f5;
  text-align: left;
`;

export default header;
