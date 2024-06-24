import { API_URL } from 'astro:env/server';

export const ScheduleAPI = {
  getSchedule: async (): Promise<any> => {
    const URL = `${API_URL}/schedule`;
    const response = await fetch(URL);
    return await response.json();
  }
}