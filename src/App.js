import {  Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Layout from './Layout/Layout'
import Tbody from './Tbody/Tbody'
import Programm from "./Programm/Programm"
import Broadcast from "./Broadcast/Broadcast"
import Calendar from "./Calendar/Calendar"
import Service from "./Service/Service"
import Broadcasting from "./Broadcasting/Broadcasting"
import Cable from "./Cable/Cable"
import Contact from "./Contact/Contact"
<<<<<<< HEAD
import HomeLatestBroadcast from './LatestBroadcasts/HomeLatestBroadcast/HomeLatestBroadcast';
import LatestBroadcastPage from './LatestBroadcasts/LatestBroadCastPage/LatestBroadcastPage';
import SearchResultPage from './SearchResultPage/SearchResultPage';


function App() {
  const [searchResData, setSearchResData] = useState([])

  const getInputValue = (value) => {
    setSearchResData(value)
  }

  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout getInputValue={getInputValue} />}>
          <Route path={'/'} element={<HomeLatestBroadcast />}/>
          <Route path={'/programm'} element={<Programm/>}/>
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
    </div>
  );
=======
import {LanguageProvider} from "./LanguageContext/LanguageContext";

function App() {
    return (
        <div className="App">
            <LanguageProvider>
                <Routes>
                    <Route path={''} element={<Layout/>}>
                        <Route path={'/'} element={<Tbody/>}/>
                        <Route path={'/programm'} element={<Programm/>}/>
                        <Route path={'/broadcast'} element={<Broadcast/>}/>
                        <Route path={'/calendar'} element={<Calendar/>}/>
                        <Route path={'/service'} element={<Service/>}/>
                        <Route path={'/broadcasting'} element={<Broadcasting/>}/>
                        <Route path={'/cable'} element={<Cable/>}/>
                        <Route path={'/contact'} element={<Contact/>}/>
                    </Route>
                </Routes>
            </LanguageProvider>
        </div>
    );
>>>>>>> 357b45a890a48c5dc64e837d10cb21c0ae7ab4cb
}

export default App;
