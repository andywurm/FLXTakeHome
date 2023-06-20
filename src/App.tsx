import './App.css';
import MainPage from './Pages/MainPage';
import hoteldata from './Data/HotelData';
import Navigation from './Components/Navigation';

function App() {

  return (
    <div className="App">
      <Navigation />
      <MainPage hotel={hoteldata[0]} />
    </div>
  );
}

export default App;