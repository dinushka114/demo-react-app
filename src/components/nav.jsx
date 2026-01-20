import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"
import { Zap } from 'lucide-react'

const Nav = () => {
  return (
   <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Red Hot Leads</span>
            </div>
             </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Templates</a>
              <Link to="/pricing"><a className="text-gray-700 hover:text-gray-900">Pricing</a></Link>
              <a href="#" className="text-gray-700 hover:text-gray-900">How It Works</a>
              <Link to={'/signin'}><a href="#" className="text-gray-700 hover:text-gray-900">Sign In</a></Link>
              <Link to="/signup"><a className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800">
                Get Started
              </a></Link>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Nav