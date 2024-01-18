import {  Route, Routes } from 'react-router-dom';
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
}

export default App;
