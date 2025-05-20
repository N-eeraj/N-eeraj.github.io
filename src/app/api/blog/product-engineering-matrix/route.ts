export async function GET() {
  await new Promise(r => setTimeout(r, 8000))
  return Response.json({
    hello: "world",
  })
}
