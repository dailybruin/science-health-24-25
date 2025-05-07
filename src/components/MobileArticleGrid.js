// import ArticleCard from './ArticleCard';
// import styled from 'styled-components';

// const GridContainer = styled.div`
//     background-color: #08091F;
//     height: auto;
//     color: #F0E8CE;
//     text-align: center;
//     display: flex;            /* Added display flex */
//     flex-direction: column;   /* Set flex direction to column */
//     align-items: center;      /* Center items horizontally */
//     justify-content: center;  /* Center items vertically */
// `;

// const Title = styled.div`
//     h1 {
//         margin: 20px 0px 0px 0px;
//         font-family: 'Poppins';
//         font-size: 6vw;
//         font-weight: 600;
//         line-height: 96px;
//         flex-grow: 1;
//     }
//     img {
//         display: block;
//         width: 100%;
//         height: auto;
//         max-width: 100%;
//         object-fit: contain;
//         overflow: hidden;
//     }
//     display: flex;
//     justify-content: center;
//     column-gap: 1vw;
//     align-items: center;
//     align-content: center;
//     width: 100%;
// `;

// const Articles = styled.div`
//     display: flex;
//     flex-direction: column;  /* Stack items vertically */
//     align-items: center;     /* Center items horizontally */
//     justify-content: center; /* Center items vertically */
//     width: 100%;
// `;

// const ArticleCardContainer = styled.div`
//     width: auto;             /* Ensure the card does not take full width */
//     margin-bottom: 3vh;      /* Space between cards */
// `;

// const MobileArticleGrid = ({ articles }) => {
//     return (
//         <GridContainer>
//             <Title>
//                 <h1>ARTICLES</h1>
//             </Title>
//             <Articles>
//                 {articles.map((article, index) => (
//                     <ArticleCardContainer key={index}>
//                         <ArticleCard props={article} />
//                     </ArticleCardContainer>
//                 ))}
//             </Articles>
//         </GridContainer>
//     );
// };

// export default MobileArticleGrid;