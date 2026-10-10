/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

import SmoothScroll from './components/layout/SmoothScroll';
import Loader from './components/layout/Loader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import NetworkBackground from './components/layout/NetworkBackground';

import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>PALMYRA DIGITAL STUDIO | Web, Tiendas Online, POS y PALMYRA CRM</title>
        <meta name="description" content="Creamos landing pages, tiendas online y software de punto de venta. Descubre PALMYRA CRM, nuestra plataforma para organizar clientes, ventas, productos y operaciones." />
      </Helmet>
      
      <Router>
        <ScrollToTop />
        <SmoothScroll>
          <div className="relative min-h-screen selection:bg-brand selection:text-white">
            <Loader />
            <NetworkBackground />
            <Navbar />
            <FloatingWhatsApp />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
            </Routes>
            
            <Footer />
          </div>
        </SmoothScroll>
      </Router>
    </HelmetProvider>
  );
}
