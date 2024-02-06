import {  Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Layout from './Layout/Layout'
import Tbody from './Tbody/Tbody'
import Program from "./Programm/Programm"
import Broadcast from "./Broadcast/Broadcast"
import Calendar from "./Calendar/Calendar"
import Service from "./Service/Service"
import Broadcasting from "./Broadcasting/Broadcasting"
import Cable from "./Cable/Cable"
import Contact from "./Contact/Contact"
import HomeLatestBroadcast from './LatestBroadcasts/HomeLatestBroadcast/HomeLatestBroadcast';
import LatestBroadcastPage from './LatestBroadcasts/LatestBroadCastPage/LatestBroadcastPage';
import SearchResultPage from './SearchResultPage/SearchResultPage';
import {LanguageProvider} from "./LanguageContext/LanguageContext";


function App() {
  const [searchResData, setSearchResData] = useState([])

  const getInputValue = (value) => {
    setSearchResData(value)
  }

  return (
    <div className="App">
      <LanguageProvider>
        <Routes>
          <Route path={''} element={<Layout getInputValue={getInputValue} />}>
            <Route path={'/'} element={<HomeLatestBroadcast />}/>
            <Route path={'/programm'} element={<Program/>}/>
            <Route path={'/broadcast'} element={<Broadcast/>}/>
            <Route path={'/calendar'} element={<Calendar/>}/>
            <Route path={'/service'} element={<Service/>}/>
            <Route path={'/broadcasting'} element={<Broadcasting/>}/>
            <Route path={'/cable'} element={<Cable/>}/> 
            <Route path={'/contact'} element={<Contact/>}/>
            <Route path={'/latestbroadcast'} element={<LatestBroadcastPage />}/>
            <Route path={'/searchresult'} element={<SearchResultPage searchResData={searchResData} />}/>
          </Route>
        </Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
