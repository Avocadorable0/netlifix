import './page.css';
import Header from './Header';
import Footer from './Footer';
import BasicTableOffensive from '../components/BasicTableOffensive';
import React, { useState, useEffect } from 'react';

function Offensive() {
  const [overallData, setOverallData] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [awayData, setAwayData] = useState([]);

  const baseUrl = process.env.REACT_APP_API_BASE_URL || '/.netlify/functions/api';

  useEffect(() => {
    fetch(`${baseUrl}/offensiveOverall`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Offensive Overall data from API:', data);
        setOverallData(data);
      })
      .catch(error => console.error('Error fetching offensive overall data:', error));
  }, [baseUrl]);

  useEffect(() => {
    fetch(`${baseUrl}/offensiveHome`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Offensive Home data from API:', data);
        setHomeData(data);
      })
      .catch(error => console.error('Error fetching offensive home data:', error));
  }, [baseUrl]);

  useEffect(() => {
    fetch(`${baseUrl}/offensiveAway`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Offensive Away data from API:', data);
        setAwayData(data);
      })
      .catch(error => console.error('Error fetching offensive away data:', error));
  }, [baseUrl]);

  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <div className='row'>
          <div className='table'>
            <h3>Offensive Overall</h3>
            <BasicTableOffensive data={overallData}/>
          </div>
          <div className='table'>
            <h3>Offensive Home</h3>
            <BasicTableOffensive data={homeData}/>
          </div>
          <div className='table'>
            <h3>Offensive Away</h3>
            <BasicTableOffensive data={awayData}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Offensive;
