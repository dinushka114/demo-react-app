import React from 'react';
import { Target, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import Footer from '../components/footer';
import Nav from '../components/nav';

export default function HomePage() {
    const templates = [
        {
            category: 'Restaurant',
            title: 'Restaurant Capture',
            description: 'High-converting restaurant template ready to capture quality leads',
            price: 'From $97',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop'
        },
        {
            category: 'Restaurant',
            title: 'Restaurant Landing',
            description: 'High-converting restaurant template ready to capture quality leads',
            price: 'From $97',
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop'
        },
        {
            category: 'Plumbing',
            title: 'Plumbing Capture',
            description: 'High-converting plumbing template ready to capture quality leads',
            price: 'From $97',
            image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop'
        },
        {
            category: 'Plumbing',
            title: 'Plumbing Landing',
            description: 'High-converting plumbing template ready to capture quality leads',
            price: 'From $97',
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop'
        },
        {
            category: 'Landscaping',
            title: 'Landscaping Capture',
            description: 'High-converting landscaping template ready to capture quality leads',
            price: 'From $97',
            image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400&h=300&fit=crop'
        },
        {
            category: 'Landscaping',
            title: 'Landscaping Landing',
            description: 'High-converting landscaping template ready to capture quality leads',
            price: 'From $97',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop'
        },
        {
            category: 'Jobs',
            title: 'Jobs Capture',
            description: 'High-converting jobs template ready to capture quality leads',
            price: 'From $97',
            image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop'
        },
        {
            category: 'Jobs',
            title: 'Jobs Landing',
            description: 'High-converting jobs template ready to capture quality leads',
            price: 'From $97',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop'
        }
    ];

    return (
        <div className="min-h-screen bg-white">

            <Nav />

            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        Professional Lead Generation Templates
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Convert More Leads<br />with Proven Templates
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                        Industry-specific capture pages and landing pages designed to maximize conversions. Get your sales funnel running in minutes, not weeks.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-slate-900 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-slate-800">
                            Browse Templates <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-50">
                            View Demo
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-16 border-t border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <Target className="w-12 h-12 mx-auto mb-4 text-slate-900" />
                            <div className="text-5xl font-bold text-gray-900 mb-2">50k+</div>
                            <div className="text-gray-600">Leads Generated</div>
                        </div>
                        <div className="text-center">
                            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-slate-900" />
                            <div className="text-5xl font-bold text-gray-900 mb-2">35%</div>
                            <div className="text-gray-600">Average Conversion Rate</div>
                        </div>
                        <div className="text-center">
                            <Zap className="w-12 h-12 mx-auto mb-4 text-slate-900" />
                            <div className="text-5xl font-bold text-gray-900 mb-2">5 min</div>
                            <div className="text-gray-600">Setup Time</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Featured Templates</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">
                        Industry-specific templates optimized for maximum conversions
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {templates.map((template, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative">
                                    <img
                                        src={template.image}
                                        alt={template.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                                        {template.price}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-sm text-gray-500 mb-2">{template.category}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{template.title}</h3>
                                    <p className="text-gray-600 mb-6">{template.description}</p>
                                    <button className="w-full bg-slate-900 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800">
                                        <Zap className="w-4 h-4" />
                                        Select Template
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="bg-slate-900 text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-slate-800">
                            View All Templates <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}