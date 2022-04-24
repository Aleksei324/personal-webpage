import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Suspense } from 'react';

import Panel from './components/panels/Panel.js';
import Footer from './components/panels/Footer.js';

import Main from './components/Main.js';
import Experiencia from './components/Experiencia.js';
import Education from './components/Education.js';

function App() {
  return (
      <BrowserRouter className="App">
        <Suspense fallback={<h2>Loading...</h2>}>

          <Panel/>

          <Routes>
            <Route exact path='/' element={<Main/>}/>
            <Route exact path='/experience' element={<Experiencia/>}/>
            <Route exact path='/education' element={<Education/>}/>
          </Routes>
        
          <Footer/>

        </Suspense>
      </BrowserRouter>
  );
}

export default App;
