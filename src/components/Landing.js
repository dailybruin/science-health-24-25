import React from "react";
import styled from "styled-components";
import SciHealthLanding from "../images/SciHealthLanding.gif";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Background = styled.img`
  width: 100%;
  height: auto;
  max-height: 100vh;
  object-fit: contain;
`;

const Landing = () => {
  return (
    <Container>
      <Background src={SciHealthLanding} alt="SciHealth Landing" />
    </Container>
  );
};

export default Landing;