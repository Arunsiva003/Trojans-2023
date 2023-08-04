import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage.js';
import RegistrationPage from './Pages/RegistrationPage.js';
import EventsPage from './Pages/EventsPage.js';
import SponsorsPage from './Pages/SponsorsPage.js';
import ContactPage from './Pages/ContactPage.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
