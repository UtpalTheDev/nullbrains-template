import logo from './logo.svg';
import './App.css';
import {Hero, Details, Feature,Team, Blog, Footer} from './components';


function App() {


  return (
    <div className="App">
      <Hero/>
      <Details/>
      <Feature/>
      <Team/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
