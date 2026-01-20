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
        <Route path="/demo-react-app" element= {<HomePage />} />
        <Route path="/demo-react-app/pricing" element= {<PricingPage />} />
        <Route path="/demo-react-app/signin" element= {<SignIn />} />
        <Route path="/demo-react-app/signup" element= {<SignUp />} />
      </Routes>
    </>
  )
}

export default App
