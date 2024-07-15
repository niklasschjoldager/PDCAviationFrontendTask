import axios from 'axios';

const apiUrl = 'http://localhost:5000';

export interface Airport {
  id: number;
  iata: string;
  name: string;
}

export async function apiGetAirports(): Promise<Airport[]> {
  try {
    const response = await axios.get<Airport[]>(`${apiUrl}/airports`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
