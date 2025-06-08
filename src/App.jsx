import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/index/index';
import About from './pages/index/About';
import Shop from './pages/index/Shop';
import Contact from './pages/index/Contact';
import Detail from './pages/index/Detail';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
// import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
}

export default App
