import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Manglende felter" }, { status: 400 })
    }

    await resend.emails.send({
      from: "Nordstens Hus <noreply@nordstens.dk>",
      to: "info@nordstens.dk",
      replyTo: email,
      subject: `Ny henvendelse fra ${name}`,
      html: `
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
        <p><strong>Besked:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return NextResponse.json({ error: "Kunne ikke sende besked" }, { status: 500 })
  }
}
