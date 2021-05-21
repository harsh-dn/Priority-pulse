import './App.css';
import GoogleMap from './components/GoogleMap';
import Footer from './components/Footer';
import './components/styles.css'

function App() {
  return (
    <div className="App">
      <h1 className="header">Locate Your City</h1>
        <GoogleMap />   
      <div className="map-footer">  
       <div style={{ textAlign:"center"}}>
       <Footer />
       </div>
      </div> 
    </div>
  );
}

export default App;
