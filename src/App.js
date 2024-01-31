import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio"
import Services from "./Services"
import Contact from "./Contact"
import Nav from "./nav"
import Footer from './footer';
import NotFound from './Notfound';
function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route  path="/spaceX/" element={<Home/>} />
        <Route  path="/About-Us" element={<About/>} />
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Contact-Us" element={<Contact/>}/>
        <Route path="Services" element={<Services/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
