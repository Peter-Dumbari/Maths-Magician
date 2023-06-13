import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Displayqoutes from './Components/DisplayQuotes/Displayqoutes';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/qoutes" element={<Displayqoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
