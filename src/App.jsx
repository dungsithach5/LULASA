import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/index';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Detail from './pages/Detail';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App
