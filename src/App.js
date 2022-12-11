import './App.css';
import NavigationBar from './Component/NavigationBar';
import "./style/LandingPage.css"
import Intro from './Component/Intro';
import Trending from "./Component/Trending"
import Superhero from './Component/Superhero';

function App() {
  return (
    <div>

      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>

      <div className='trending'>
        <Trending/>
      </div>

      <div className='superhero'>
        <Superhero/>
      </div>

    </div>
  );
}

export default App;
