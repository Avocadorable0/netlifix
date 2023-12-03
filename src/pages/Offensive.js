import './page.css';
import Header from './Header';
import Footer from './Footer';
import BasicTableOffensive from '../components/BasicTableOffensive';
import React, { useState, useEffect } from 'react';

function Offensive() {

  const [overallData, setOverallData] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [awayData, setAwayData] = useState([]);

  useEffect(() => {
    fetch('https://ws-foot-stat.onrender.com/offensiveOverall')
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
    fetch('https://ws-foot-stat.onrender.com/offensiveHome')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Home data from API:', data);
        setHomeData(data);
      })
      .catch(error => console.error('Error fetching home data:', error));
  }, []);
  
  useEffect(() => {
    fetch('https://ws-foot-stat.onrender.com/offensiveAway')
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
