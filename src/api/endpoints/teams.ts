import { API_URL } from 'astro:env/server';
import type { TeamInterface } from '../interfaces/team.interface';

export const TeamsAPI = {
  getTeams: async (): Promise<TeamInterface[]> => {
    const URL = `${API_URL}/teams`;
    const response = await fetch(URL);
    return await response.json();
  }
}