import { API_KEY } from '../constants/apiKey';

export const findCoordLocation = async (city) => {
  try {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const lat = data[0].lat;
    const lon = data[0].lon;
    return { lat, lon };
  } catch (error) {
    console.error('Error fetching coordinates:', error);
  }
};
