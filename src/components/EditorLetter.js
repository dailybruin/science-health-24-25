import React from "react";
import styled from "styled-components";
import Background from "../images/ArticleLetterBackground.png";
import { mediaQueries } from "../shared/config";

const OuterContainer = styled.div`
    background: url(${Background}) no-repeat center center;
    width: 100%; 
    height: fit-content;
    padding: 25em 0;
    background-size: cover;
    ${mediaQueries.mobile} {
      padding: 15em 0;
    }
`;


const Container = styled.div`
    border-radius: 4vh;
    width: 50%;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    color: white;
    display: flex;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 25%;

  ${mediaQueries.mobile} {
    width: 70%;
    margin-left: 10%;
  }
`;

const Text = styled.div`
    font-family: Noto Sans Lao;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0%;
    vertical-align: middle;
    padding: 2em;
    ${mediaQueries.mobile} {
        padding: 1em 1em;
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