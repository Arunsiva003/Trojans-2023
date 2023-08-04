import { Router as BrowserRouter, Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import RegistrationPage from './Pages/RegistrationPage';
import EventsPage from './Pages/EventsPage';
import SponsorsPage from './Pages/SponsorsPage';
import ContactPage from './Pages/ContactPage';

function App() {
	return (
    <div>
    {" "}
    {/* <Navbar /> */}
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/sponsors" element={<SponsorsPage />}></Route>
        <Route path="/registration" element={<RegistrationPage />}></Route>
        <Route path="/events" element={<EventsPage />}></Route>
      </Routes>
    </Router>
  </div>
	);
}

export default App;
