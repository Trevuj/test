import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
  }
});

export const generateRandomPerson = async (age, country) => {
  try {
    const [personData, locationData] = await Promise.all([
      apiClient.get('/randomuser'),
      apiClient.get('/location', {
        params: { country }
      })
    ]);

    return {
      ...personData.data,
      location: locationData.data,
      age,
      country
    };
  } catch (error) {
    console.error('Error generating random person:', error);
    throw error;
  }
}; 