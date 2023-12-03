import './page.css';
import BasictableDefensive from '../components/BasicTableDefensive';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
function Defensive() {

  const [overallData, setOverallData] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [awayData, setAwayData] = useState([]);

  useEffect(() => {
    fetch('https://ws-foot-stat.onrender.com/defenseOverall', { mode: 'no-cors' })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Home data from API:', data);
        setOverallData(data);
      })
      .catch(error => console.error('Error fetching home data:', error));
  }, []);
  
  useEffect(() => {
    fetch('https://ws-foot-stat.onrender.com/defenseAway', { mode: 'no-cors' })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Away data from API:', data);
        setHomeData(data);
      })
      .catch(error => console.error('Error fetching away data:', error));
  }, []);

  useEffect(() => {
    fetch('https://ws-foot-stat.onrender.com/defenseAway', { mode: 'no-cors' })
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

