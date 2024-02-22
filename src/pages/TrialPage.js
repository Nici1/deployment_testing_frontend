import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link component for navigation
import baseUrl from '../baseUrl.js';

function TrialPage() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`/bla`)
        const response = await axios.post(`/bla`);
        console.log(response)
        setResponse(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Response from server: {response}</p>
      
      {/* Link to navigate to the /login page */}
      <Link to="/login">Go to Login Page</Link>
    </div>
  );
}

export default TrialPage;


