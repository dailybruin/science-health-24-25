import React from "react";
import styled from "styled-components";
import SciHealthLanding from "../images/SciHealthLanding.gif";

const Container = styled.div`
//   width: 100%;
//   height: 100em;
//   margin: auto;
    width: 1440px;
  height: 850px;
  margin: 25px auto 0 auto;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${SciHealthLanding}) no-repeat center center;
  background-size: cover;
`;

const Landing = () => {
  return (
    <Container/>
  );
};

export default Landing;