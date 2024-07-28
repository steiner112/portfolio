import { BrowserRouter,Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import "./componentCSS/Navbar.css";
import "./componentCSS/allPages.css";
import MobileNavbar from './component/MobileNavbar.jsx';
import Footer from './pages/Footer.jsx';
import './componentCSS/Footer.css';
import "./component/iconsSocial/insta.png"
import ErrorPage404 from './pages/ErrorPage404.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';

function App() {
  return (
  <BrowserRouter>
  <MobileNavbar/>
  <Navbar/>
  <Footer/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/*" element={<ErrorPage404/>} />
    <Route path="/service*" element={<Services/>} />
    <Route path="/project" element={<Projects/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
