
import './App.css'
import Footer from './components/footer';
import Navbar from './components/Navbar';
import AboutUs from './landingpage/AboutUs';
import AgriFeature from './landingpage/AgriFeature';
import ContactUs from './landingpage/ContactUs';
import Home from './landingpage/Homepage';
function App() {
  
  return (
    <>
    <Navbar />
    <Home />
    <AgriFeature/>
    <AboutUs />
    <ContactUs />
    <Footer/>
    </>
  )
}

export default App
