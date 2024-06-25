import { API_URL } from 'astro:env/server';
import type { ScheduleInterface } from '../interfaces/schedule.interface';

export const ScheduleAPI = {
  getSchedule: async (): Promise<ScheduleInterface[]> => {
    const URL = `${API_URL}/schedule`;
    const response = await fetch(URL);
    return await response.json();
  }
}