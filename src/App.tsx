import React from 'react';
import { CustomCursor } from './components/layout/CustomCursor';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MenuOrderPage } from './pages/MenuOrderPage';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-parchment-100 selection:bg-saffron selection:text-white">
      {/* Desktop Magnetic Fluid Cursor */}
      <CustomCursor />

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuOrderPage />} />
      </Routes>
    </div>
  );
};

export default App;
