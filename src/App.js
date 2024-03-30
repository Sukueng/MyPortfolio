import AboutComponent from "./components/AboutComponent";
import HeadComponent from "./components/HeadComponent";
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from "./components/Project";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HeadComponent/>}></Route>
          <Route path="/about" element={<AboutComponent/>}></Route>
          <Route path="/projects" element={<Project/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
      {/* <HeadComponent></HeadComponent> */}
      {/* <AboutComponent></AboutComponent> */}
    </div>
  );
}

export default App;
