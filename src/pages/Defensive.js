import './page.css';
import BasictableDefensive from '../components/BasicTableDefensive';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import Footer from './Footer';

function Defensive() {
  const [overallData, setOverallData] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [awayData, setAwayData] = useState([]);

  const baseUrl = process.env.REACT_APP_API_BASE_URL || '/.netlify/functions/api';

  useEffect(() => {
    fetch(`${baseUrl}/defenseOverall`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Defensive Overall data from API:', data);
        setOverallData(data);
      })
      .catch(error => console.error('Error fetching defensive overall data:', error));
  }, [baseUrl]);

  useEffect(() => {
    fetch(`${baseUrl}/defenseHome`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Defensive Home data from API:', data);
        setHomeData(data);
      })
      .catch(error => console.error('Error fetching defensive home data:', error));
  }, [baseUrl]);

  useEffect(() => {
    fetch(`${baseUrl}/defenseAway`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Defensive Away data from API:', data);
        setAwayData(data);
      })
      .catch(error => console.error('Error fetching defensive away data:', error));
  }, [baseUrl]);

  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <div className='row'>
          <div className='table'>
            <h3>Defensive Overall</h3>
            <BasictableDefensive data={overallData}/>
          </div>
          <div className='table'>
            <h3>Defensive Home</h3>
            <BasictableDefensive data={homeData}/>
          </div>
          <div className='table'>
            <h3>Defensive Away</h3>
            <BasictableDefensive data={awayData}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Defensive;
