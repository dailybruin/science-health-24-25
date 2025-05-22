import React from "react";
import styled from "styled-components";
import SciHealthLanding from "../images/SciHealthLanding.gif";

const Container = styled.div`
  width: 100%;
  height: 850px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${SciHealthLanding}) no-repeat center center;
  background-size: cover;
  background-color: black;
`;

const Landing = () => {
  return (
    <Container/>
  );
};

export default Landing;