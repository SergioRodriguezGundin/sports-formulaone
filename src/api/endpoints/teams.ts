import { API_URL } from 'astro:env/server';

export const TeamsAPI = {
  getTeams: async (): Promise<any> => {
    const URL = `${API_URL}/teams`;
    const response = await fetch(URL);
    return await response.json();
  }
}