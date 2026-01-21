
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Detail from './views/Detail';
import Admin from './views/Admin';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <footer className="bg-darkgray text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="font-poppins font-bold text-xl mb-2">Lugar Incrível</p>
            <p className="text-gray-400 text-sm">© 2024 O Guia Definitivo. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
