const API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

export const getRequestOptions = () => {
  const headers = new Headers();
  headers.append("x-rapidapi-key", API_KEY);
  headers.append("x-rapidapi-host", "v1.formula-1.api-sports.io");

  return {
    method: 'GET',
    headers: headers,
    redirect: 'follow' as RequestRedirect
  }
}