import logo from './logo.svg';
import './App.css';
import {Hero, Details, Feature,Team, Blog, Footer, Navbar} from './components';


function App() {


  return (
    <div className="App">
      <Navbar/>
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
