import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import PricingPage from './pages/pricing'
import SignIn from './pages/signin'
import SignUp from './pages/signup'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/pricing" element= {<PricingPage />} />
        <Route path="/signin" element= {<SignIn />} />
        <Route path="/signup" element= {<SignUp />} />
      </Routes>
    </>
  )
}

export default App
