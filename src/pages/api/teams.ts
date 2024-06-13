export async function GET() {
  return new Response(
    JSON.stringify('teams'), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}