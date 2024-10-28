import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CityData, SiteConfig } from './types';
import { fetchSheetData } from './lib/sheets';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [siteData, setSiteData] = useState<{
    cities: CityData[];
    config: SiteConfig;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchSheetData('your-sheet-id');
        setSiteData(data);
      } catch (error) {
        console.error('Failed to load site data:', error);
      }
    };

    loadData();
  }, []);

  if (!siteData) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar config={siteData.config} />
        <Routes>
          <Route path="/" element={<HomePage config={siteData.config} />} />
          <Route 
            path="/:state/:city" 
            element={<CityPage data={siteData.cities.find(
              city => city.city.toLowerCase() === window.location.hostname.split('.')[0]
            )} />} 
          />
        </Routes>
        <Footer config={siteData.config} />
      </div>
    </Router>
  );
}

export default App;