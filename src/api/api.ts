import axios from 'axios';

const API_URL = 'http://localhost:1234';

export interface Airport {
  id: number;
  iata: string;
  name: string;
}

export async function apiGetAirports(): Promise<Airport[]> {
  try {
    const response = await axios.get<Airport[]>(`${API_URL}/airports`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
