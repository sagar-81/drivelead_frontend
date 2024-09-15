import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './component/login/login';
import SignUpForm from './component/signup/signup';
import LandingPage from './component/landingpage/landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
