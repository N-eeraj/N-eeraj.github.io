export async function GET(_request: Request, { params }:  { params: Promise<{ slug: string }>}) {
  const { slug } = await params
  if (!slug) {
    return Response.json({
      error: "Blog not found",
    }, { status: 404 })
  }

  return Response.json({
    data: slug,
    hello: "world",
  })
}
