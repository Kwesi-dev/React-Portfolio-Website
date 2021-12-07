import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
