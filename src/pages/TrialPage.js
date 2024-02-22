import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory hook for navigation
import baseUrl from '../baseUrl.js';

function TrialPage() {
  const [response, setResponse] = useState('');
  const history = useHistory(); // Initialize useHistory hook

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

  const navigateToAnotherPage = () => {
    // Navigate to another page when the button is clicked
    history.push('/login'); // Specify the path of the target page
  };

  return (
    <div>
      <p>Response from server: {response}</p>
      
      {/* Button to navigate to another page */}
      <button onClick={navigateToAnotherPage}>Go to Another Page</button>
    </div>
  );
}

export default TrialPage;

