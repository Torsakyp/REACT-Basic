import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import FootballItem from './components/FootballItem';
import FootballPost from './components/FootballPost';
import footballs from './data/football';
import AppSearch from './components/AppSearch';


function App() {
  const [selectedFootball, setselectedFootball] = useState(null);
  const [searchText, setsearchText] = useState("");
  const TITLE = "Test"
  function onFootballOpenClick(thefootball) {
    setselectedFootball(thefootball);
  }
  function onFootballCloseClick() {
    setselectedFootball(null);
  }
  const footballElement = footballs.filter((football) => {
    return football.title.includes(searchText);
  }).map((football, index) => {
    return <FootballItem key={index} football={football} onFootballClick={onFootballOpenClick} />;
  });

  let footballpost = null;
  if (!!selectedFootball) {
    footballpost = <FootballPost football={selectedFootball} onBigClick={onFootballCloseClick} />
  }
  return (
    <div className="app">
      
      <AppHeader/>
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onvaluechange={setsearchText} />
          <div className="app-grid">
            {footballElement}
          </div>
        </div>
      </section>
      {footballpost}
    </div>
  );
}

export default App;
