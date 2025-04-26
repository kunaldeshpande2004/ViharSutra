import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Search from './components/Search';
import Members from './components/Members';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import TravelDates from './components/TravelDates';
import Buget from './components/Buget';
import TripReview from './components/TripReview';
//import landingImage from '../src/assets/landingImage.jpg'
import landingImage from '../src/assets/dp4.jpg'

const RequireAuth = ({ children }) => {
  const name = sessionStorage.getItem("fullname");
  const location = useLocation();

  // If user is not logged in, redirect to login page
  if (!name) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  return (
<div className=' bg-cover bg-center  ' style={{ backgroundImage: `url(${landingImage})` }}>
<h2 className='font-bold text-3xl p-4'> ✈️ Vihar Sutra</h2>


      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/createAccount" element={<CreateAccount />} />

          {/* Protected Routes: Redirects to login if user is not authenticated */}
          <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/search" element={<RequireAuth><Search /></RequireAuth>} />
          <Route path="/members" element={<RequireAuth><Members /></RequireAuth>} />
          <Route path="/traveldates" element={<RequireAuth><TravelDates /></RequireAuth>} />
          <Route path="/buget" element={<RequireAuth><Buget /></RequireAuth>} />
          <Route path="/tripreview" element={<RequireAuth><TripReview /></RequireAuth>} />

          {/* Catch-all route: Redirects unknown routes to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
