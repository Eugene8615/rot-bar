// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import MenuSection from './components/MenuSection';
import CategoryPage from './components/CategoryPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Slider />
        <Routes>
          <Route path="/rot-bar" element={<MenuSection />} />
          <Route path="/rot-bar/:categoryId" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
