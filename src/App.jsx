import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './component/login/login';
import SignUpForm from './component/signup/signup';
import LandingPage from './component/landingpage/landing';
import Dashboard from './component/dashboard/dashboard';
import Lead from './component/lead/lead';
import Setting from './component/setting/setting';
import HelpFeedback from './component/helpandfeedback/helpfeedback';
import Campaigns from './component/campaign/campaign';
import Report from './component/reports/report';
import Payment from './component/payment/payment'; 
import Findlead  from './component/findlead/findlead';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/lead' element={<Lead />} />
        <Route path='/campaigns' element={<Campaigns />} />
        <Route path='/report' element={<Report />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/helpfeedback' element={<HelpFeedback />} />
        <Route path='/payment' element={<Payment />} /> 
        <Route path='/Findlead' element={<Findlead />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
