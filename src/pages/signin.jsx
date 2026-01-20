import React from 'react'
import Nav from '../components/nav'
import { LoginForm } from '../components/loginForm'

const SignIn = () => {
  return (
    <div className="min-h-screen bg-white">
            <Nav />
            <LoginForm />
        </div>
  )
}

export default SignIn