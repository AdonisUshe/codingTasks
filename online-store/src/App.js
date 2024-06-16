import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';

const App = () => {
    return (
        <Router>
            <div>
                {/* Navigation menu at the top */}
                <NavigationMenu />
                {/* Define the routes for different pages */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
