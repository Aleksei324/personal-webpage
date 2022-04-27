import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { lazy, Suspense } from 'react';

import Panel from './components/panels/Panel.js';
import Footer from './components/panels/Footer.js';

const Main = lazy(() => import('./components/main/Main.js'))
const Experiencia = lazy(() => import('./components/experiencia/Experiencia.js'))
const Minigame = lazy(() => import('./components/minigame/Minigame.js'))

function App() {
  return (
      <BrowserRouter className="App">
        {/* Showing a message while loading the page */}
        <Suspense fallback={<h2 className='fallback'>Loading...</h2>}>

          <Panel/>

          <Routes>
            <Route exact path='/' element={<Main/>}/>
            <Route exact path='/some-projects' element={<Experiencia/>}/>
            <Route exact path='/minigame' element={<Minigame/>}/>
          </Routes>
        
          <Footer/>

        </Suspense>
      </BrowserRouter>
  );
}

export default App;
