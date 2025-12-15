import { Routes, Route } from 'react-router-dom';import { Navbar } from "./components/Navbar"
import { RegistrationPage } from './pages/RegistrationPage';
import { Footer } from './components/Footer';
import { DashboardPage } from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';

 const App = () => {
  return (
    <>
      <Navbar/>
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/register" element={<RegistrationPage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
        </Routes>
      </main>
      <Footer/>
      </>
  )
}
export default App

