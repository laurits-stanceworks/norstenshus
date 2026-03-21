import { NextResponse } from "next/server"

export const revalidate = 3600 // revalidate every hour

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  if (!token) {
    return NextResponse.json({ error: "No token" }, { status: 500 })
  }

  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&limit=12&access_token=${token}`,
    { next: { revalidate: 3600 } }
  )

  if (!res.ok) {
    return NextResponse.json({ error: "Instagram fetch failed" }, { status: 500 })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
