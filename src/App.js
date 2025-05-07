import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import { isMobile } from 'react-device-detect';
import DesktopArticleGrid from "./components/DesktopArticleGrid";

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/science-health-24-25")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  const tempArticles = [
    {article_title: "ARTICLE 1",
    article_byline: "Aaron Doyle",
    article_url: "https://dailybruin.com/2024/02/23/the-mcdonald-effect-janelle-mcdonalds-journey-reigniting-ucla-gymnastics/",
    article_image:  "https://assets3.dailybruin.com/images/gymnastics-2024/coach2-34ef24f9e9bdeb3e051a7540d5c78893.png",
    illustration_byline: "placeholder"
    },
    {article_title: "ARTICLE 2",
    article_byline: "Aaron Doyle",
    article_url: "https://dailybruin.com/2024/02/23/the-mcdonald-effect-janelle-mcdonalds-journey-reigniting-ucla-gymnastics/",
    article_image:  "https://assets3.dailybruin.com/images/gymnastics-2024/coach2-34ef24f9e9bdeb3e051a7540d5c78893.png",
    illustration_byline: "placeholder"
    },
    {article_title: "ARTICLE 3",
    article_byline: "Aaron Doyle",
    article_url: "https://dailybruin.com/2024/02/23/the-mcdonald-effect-janelle-mcdonalds-journey-reigniting-ucla-gymnastics/",
    article_image:  "https://assets3.dailybruin.com/images/gymnastics-2024/coach2-34ef24f9e9bdeb3e051a7540d5c78893.png",
    illustration_byline: "placeholder"
    }
]

  return data && (
    <div className="App">
      <Header/>
      Hello Daily Bruin!
      <DesktopArticleGrid articles={data.articles} />
      <Footer/>
    </div>
  );
}

export default App;
