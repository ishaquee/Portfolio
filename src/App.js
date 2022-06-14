import './App.css';
import Home from './section/Home';
import Navbar from './section/Navbar';
import { BrowserRouter, Route, Routes , useNavigate} from 'react-router-dom';
import Projects from './section/Projects';
import About from './section/About';
import About1 from './section/About1';

function App() {

  return (
    <BrowserRouter>
<Navbar/>
    <Routes>
        <Route  path="/"  element={<Home />} />
        <Route  path="/About"  element={<About1 />} />
        <Route  path="/Projects"  element={<Projects />} />
        <Route  path="/resume"  element={<About />} />
        </Routes>
        </BrowserRouter>


  )
}

export default App;
