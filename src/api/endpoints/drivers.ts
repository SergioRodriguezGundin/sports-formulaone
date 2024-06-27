import { API_URL } from 'astro:env/server';
import type { DriverDB } from '../interfaces/driver.interface';

export const DriversAPI = {
  getDrivers: async (): Promise<DriverDB[]> => {
    const URL = `${API_URL}/drivers`;
    const response = await fetch(URL);
    return await response.json();
  }
}