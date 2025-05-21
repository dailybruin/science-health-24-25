import React from "react";
import styled from "styled-components";
import Background from "../images/ArticleLetterBackground.png";
import { mediaQueries } from "../shared/config";

const OuterContainer = styled.div`
    background: url(${Background});
    width: 100%;
    height: fit-content;
    padding: 20%;
    background-repeat: no-repeat;
    background-size: cover;
`;


//background: url(${Background});

const Container = styled.div`
    border-radius: 4vh;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 3vh 3.5vh 2vh 3.5vh; 
    display: flex;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

  ${mediaQueries.mobile} {
    width: 80%;
  }
`;

const Text = styled.div`
    font-family: Noto Sans Lao;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0%;
    vertical-align: middle;
    ${mediaQueries.mobile} {
        padding: 1em 1em;
    }
`;

const Content = styled.div`
  margin: 5%;
  margin-top: 0%;
  margin-bottom: 7%;
  font-family: "PT Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 21.1px;
  text-align: justify;
  color: #F6E4E1;
  ${mediaQueries.mobile} {
    font-size: 14px;
    
  }
`;

export default function EditorLetter(props) {
  return (
    <OuterContainer>
      <Container>
        <Text>
            {props.editor_letter}
        </Text>
      </Container>
    </OuterContainer>
  );
}