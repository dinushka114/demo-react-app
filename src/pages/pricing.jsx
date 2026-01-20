import React from 'react'
import Nav from '../components/nav'
import { ArrowRight } from 'lucide-react'
import PricingComponent from '../components/pricing'
import Footer from '../components/footer'

const PricingPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Nav />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                        Choose the plan that works best for your business. All plans include full access to our <br /> template library.
                    </p>
                </div>
            </section>

            <PricingComponent />
            <Footer />
        </div>
    )
}

export default PricingPage