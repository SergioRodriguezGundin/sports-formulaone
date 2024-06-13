export async function GET() {
  return new Response(
    JSON.stringify('news'), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}