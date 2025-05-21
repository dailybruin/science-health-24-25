import styled from 'styled-components';
import emailImage from '../images/socials/email.svg'; // fallback image

const Wrapper = styled.div`
  width: 40vw;
  height: 25vw;
  margin: 1.5%;
  margin-left: 7%;

  @media (max-width: 480px) {
    width: 75vw;
    height: 50vw;
    margin-left: 0%;
    margin-top: 20%;
  }
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
  padding: 3vh 3.5vh 2vh 3.5vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: background-image 0.1s ease;

  &:hover {
    background-image: url(${({ $img }) => $img});
  }

  &:hover > div {
    opacity: 0; // on hover, no title/byline text
  }
`;

const Content = styled.div`
  // wrapping title and byline in content styled component so that on hover, the text doesn't show
`;

const Title = styled.h2`
  font-family: 'Georgia', serif;
  font-size: 2.7vw;
  font-weight: bold;
  margin: 0;
  line-height: 1.4;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 6vw;
  }
`;

const Byline = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 2vw;
  margin-top: 1vh;
  margin-bottom: 0;
  line-height: 1.5;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;

const ArticleCard = ({ props }) => {
  return (
    <Wrapper>
      <a
        href={props.article_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <Container $img={props.article_image || emailImage}>
          <Content>
            <Title>{props.article_title}</Title>
            <Byline>{props.article_byline}</Byline>
          </Content>
        </Container>
      </a>
    </Wrapper>
  );
};

export default ArticleCard;
