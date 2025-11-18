import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './HomePage';
import HowItWorksPage from './HowItWorksPage';
import DashboardPage from './DashboardPage';

export type Page = 'home' | 'how-it-works' | 'dashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'home':
      default:
        return <HomePage setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-gray-800">
      <Header currentPage={currentPage} setPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
