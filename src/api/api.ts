import axios from 'axios';

const API_URL = 'http://localhost:1234';

type Airport = {
  id: number;
  iata: string;
  name: string;
};

type PostAirport = Omit<Airport, 'id'>;

export async function getAirports(): Promise<Airport[]> {
  return await fetchData('/airports', 'get');
}

export async function getAirport(id: number): Promise<Airport> {
  return await fetchData(`/airports/${id}`, 'get');
}

export async function postAirport(): Promise<PostAirport> {
  return await fetchData<Airport>('/airports', 'post');
}

async function fetchData<T>(
  endpoint: `/${string}`,
  method: 'get' | 'post' | 'put' | 'patch' | 'delete'
): Promise<T> {
  try {
    const response = await axios[method]<T>(`${API_URL}${endpoint}`);
    return response.data as T;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
