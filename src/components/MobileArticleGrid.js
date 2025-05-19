import ArticleCard from './ArticleCard';
import styled from 'styled-components';
import backgroundImage from '../images/science-health-2025-background.png'

const GridContainer = styled.div`
    height: auto;
    color: #F0E8CE;
    text-align: center;
    display: flex;            /* Added display flex */
    flex-direction: column;   /* Set flex direction to column */
    align-items: center;      /* Center items horizontally */
    justify-content: center;  /* Center items vertically */
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
`;

const Articles = styled.div`
    display: flex;
    flex-direction: column;  /* Stack items vertically */
    align-items: center;     /* Center items horizontally */
    justify-content: center; /* Center items vertically */
    width: 100%;
`;

const ArticleCardContainer = styled.div`
    width: auto;             /* Ensure the card does not take full width */
    margin-bottom: 3vh;      /* Space between cards */
`;

const MobileArticleGrid = ({ articles }) => {
    return (
        <GridContainer>
            <Articles>
                {articles.map((article, index) => (
                    <ArticleCardContainer key={index}>
                        <ArticleCard props={article} />
                    </ArticleCardContainer>
                ))}
            </Articles>
        </GridContainer>
    );
};

export default MobileArticleGrid;