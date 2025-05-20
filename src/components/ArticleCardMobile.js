import styled from 'styled-components';
import emailImage from '../images/socials/fb.svg'; // TEMP test image

const Wrapper = styled.div`
  width: 75vw;
  height: 50vw;
  margin: 3vh 0;
`;

const Container = styled.div`
  border-radius: 4vh;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 3vh 4vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-size: cover;
  background-position: center;
  transition: background-image 0.3s ease;

  &:hover {
    background-image: url(${({ $img }) => $img});
  }
`;

const Title = styled.h2`
  font-family: 'Georgia', serif;
  font-size: 5.5vw;
  font-weight: bold;
  margin: 0;
  line-height: 1.3;
  text-align: left;
`;

const Byline = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 3.5vw;
  margin-top: 1vh;
  margin-bottom: 0;
  text-align: left;
  line-height: 1.4;
`;

const ArticleCardMobile = ({ props }) => {
  return (
    <Wrapper>
      <a
        href={props.article_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <Container $img={emailImage}>
          <Title>{props.article_title}</Title>
          <Byline>{props.article_byline}</Byline>
        </Container>
      </a>
    </Wrapper>
  );
};

export default ArticleCardMobile;
