import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { isMobile } from 'react-device-detect';
import DesktopArticleGrid from "./components/DesktopArticleGrid";
import MobileArticleGrid from "./components/MobileArticleGrid";
import Landing from "./components/Landing";

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/science-health-24-25")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return data && (
    <div className="App">
      <Header/>
      <Landing/>
      {isMobile ? ( 
          <MobileArticleGrid articles={data.articles} />
        ) : (
          <DesktopArticleGrid articles={data.articles} />
        )}
      <Footer/>
    </div>
  );
}

export default App;
