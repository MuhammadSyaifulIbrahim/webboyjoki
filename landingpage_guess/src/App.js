import './App.css';
import NavigationBar from './components/NavigationBar';
import './style/LandingPage.css';
import Footer from './components/Footer';
import MyCarousel from './components/MyCarousel';
import JokiRank from './components/JokiRank';
function App() {
  return (
    <div>
      {/*intro section*/}
      <div className="myBG">
        <NavigationBar />
          </div>
        <div className='Carousel'>
          <MyCarousel/>
          </div>
            
          <div className="Joki">
            <JokiRank/>     
          </div>

          <div className='Footer'>
            <Footer/>
          </div>
      
    </div>


  );
}

export default App;
