import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import { AwardsPage, EventsPage, BlogPage } from './pages/InfoPages';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex min-h-[100dvh] flex-col">
                <Header />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about-us" element={<AboutPage />} />
                        <Route path="/case-studies" element={<CaseStudiesPage />} />
                        <Route path="/events" element={<EventsPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/awards-and-certificates" element={<AwardsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
            <AIAssistant />
        </Router>
    );
}

export default App;
