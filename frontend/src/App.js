
import './App.css';
import Navbar from './components/Navbar';
import '../src/SuperResponsiveTableStyle.css';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Activities from './pages/Activities';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import BookingForm from './pages/BookingForm';
import AdminDashboard from './pages/AdminDashboard';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AdminMain from './pages/AdminMain';
function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const lang = navigator.language;
    i18n.changeLanguage(lang);
  }, []);
  useEffect(()=> {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  },[])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/accommodation" element={<Accommodation />} />
    <Route path="/activities" element={<Activities />} />
    <Route path="/adminMain" element={<AdminMain />} />
    <Route path="/activities" element={<Activities />} />
    <Route path='/book/:roomid/:fromDate/:toDate/:people'  element={<BookingForm/>} />
    <Route path="/admin" element={<AdminDashboard />} />
   </Routes>
    <Footer />
    </div>
  );
}

export default App;
