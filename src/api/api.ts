import axios from 'axios';

const API_URL = 'http://localhost:1234';

export interface Airport {
  id: number;
  iata: string;
  name: string;
}

export type PostAirport = Omit<Airport, 'id'>;

export async function getAirports(query: string = ''): Promise<Airport[] | []> {
  const queryBuilder = query ? `&q=${query}` : '';

  return await fetcher(`/airports?_sort=name${queryBuilder}`, 'get');
}

export async function getAirport(id: number): Promise<Airport> {
  return await fetcher(`/airports/${id}`, 'get');
}

export async function postAirport(airport: PostAirport): Promise<PostAirport> {
  return await fetcher<Airport>('/airports', 'post', airport);
}

export async function deleteAirport(id: number): Promise<Airport> {
  return await fetcher(`/airports/${id}`, 'delete');
}

async function fetcher<T>(
  endpoint: `/${string}`,
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  data?: any
): Promise<T> {
  try {
    if (method === 'post' && data) {
      const response = await axios.post<T>(`${API_URL}${endpoint}`, data);
      return response.data as T;
    }

    const response = await axios[method]<T>(`${API_URL}${endpoint}`);
    return response.data as T;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
