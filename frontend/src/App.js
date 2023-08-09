import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/HomePage/Home.jsx";
import Sponsors from "./Pages/Sponsors/Sponsors.jsx";
import Register from "./Pages/Register/Register.jsx";
import EventSelect from "./Pages/EventSelect/EventSelect.jsx";
import Technical from "./Pages/Technical/Technical.jsx";
import Nontech from "./Pages/Non-tech/Nontech.jsx";
import ContactUs from "./Pages/HomePage/ContactUs/ContactUs.jsx";
import Workshop from "./Pages/Workshop/Workshop.jsx";
import Navbar from "./Pages/Navbar/Navbar.jsx";
import DetailEvent from "./Pages/DetailEvent/DetailEvent.jsx";
import Hero from "./Pages/HomePage/Hero/Hero.jsx";

function App() {
  return (
    <Router>
          {/* <Navbar/> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<EventSelect />} />
          <Route path="/tech" element={<Technical />} />
          <Route path="/nontech" element={<Nontech />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/eventdetail" element={<DetailEvent />} />
          <Route path="/hero" element={<Hero />} />

        </Routes>
      </div>
    </Router>
  );
}


export default App;
