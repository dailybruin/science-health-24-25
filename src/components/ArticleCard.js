import styled from 'styled-components';

/**************** 
TEMPLATE ARTICLE CARD TO TEST OUT THE ARTICLE GRID
****************/

const Container = styled.div`
    border-radius: 4vh;
    margin: 1.5%;
    margin-left: 7%;
    background-color: #051626;
    z-index: 2;
    width: 40vw;
    height: 25vw;
    transition: box-shadow 0.3s ease, width 0.3s ease, height 0.3s ease;
    &:hover {
        box-shadow: 0 0 20px 5px rgba(201, 83, 174, 0.7);
    }
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-size: cover;
    background-position: center;


    @media (max-width: 480px) {
        width: 75vw;
        height: 50vw;
        margin-left: 0%;
        margin-top: 20%;        //adjusts vertical gap between cards on mobile
    }
`;


const ArticleCard = ({props}) => {
    return (
        <Container>
            <p>{props.article_title}</p>
            {/* <p>Hello Daily Bruin!</p> */}
        </Container>
    );
};

export default ArticleCard;