import './page.css';
import React, { useState, useEffect } from 'react';
import Basictable from '../components/BasicTable';
import Header from './Header';
import Footer from './Footer';

function Summary() {
  const [overallData, setOverallData] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [awayData, setAwayData] = useState([]);

  useEffect(() => {
    fetch('/api/summaryOverall', { mode: 'no-cors' })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Overall data from API:', data);
        setOverallData(data);
      })
      .catch(error => console.error('Error fetching overall data:', error));
  }, []);

  useEffect(() => {
    fetch('/api/summaryHome', { mode: 'no-cors' })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Overall data from API:', data);
        setHomeData(data);
      })
      .catch(error => console.error('Error fetching overall data:', error));
  }, []);

  useEffect(() => {
    fetch('/api/summaryAway', { mode: 'no-cors' })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Away data from API:', data);
        setAwayData(data);
      })
      .catch(error => console.error('Error fetching away data:', error));
  }, []);


  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='table'>
            <h3>Summary Overall</h3>
            <Basictable data={overallData} />
          </div>
          <div className='table'>
            <h3>Summary Home</h3>
            <Basictable data={homeData} />
          </div>
          <div className='table'>
            <h3>Summary Away</h3>
            <Basictable data={awayData} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Summary;

