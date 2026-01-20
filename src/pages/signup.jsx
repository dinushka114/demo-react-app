import React from 'react'
import Nav from '../components/nav'
import { RegisterForm } from '../components/registerForm'

const SignUp = () => {
  return (
     <div className="min-h-screen bg-white">
            <Nav />
            <RegisterForm />
        </div>
  )
}

export default SignUp