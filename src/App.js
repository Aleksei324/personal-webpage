import './App.css';
import Banner from './components/Banner.js';
import Panel from './components/Panel.js';
import Footer from './components/Footer.js';
import AboutMe from './components/AboutMe.js';

function App() {
  return (
    <div className="App">
      <Panel/>
      <Banner/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
