import './App.css';
import Home from './section/Home';
import Navbar from './section/Navbar';
import { BrowserRouter, Route, Routes , useNavigate} from 'react-router-dom';
import Projects from './section/Projects';

function App() {

  return (
    <BrowserRouter>
<Navbar/>
    <Routes>
        <Route  path="/"  element={<Home />} />
        <Route  path="/Projects"  element={<Projects />} />
        </Routes>
        </BrowserRouter>


  )
}

export default App;
