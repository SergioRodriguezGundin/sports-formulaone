import { getRequestOptions } from '../../db/setup';

export async function GET() {
  const response = await fetch(`https://v1.formula-1.api-sports.io/teams`, getRequestOptions());

  if (!response.ok) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  const data = await response.json();

  console.log('🚀 ~ file: teams.ts:14 ~ GET ~ teams:', data?.response)

  return new Response(
    JSON.stringify(data?.response), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}