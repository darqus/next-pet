import { NextResponse } from 'next/server'

export const GET = async () => NextResponse.json({ message: 'Hello from API!' })

export const POST = async (req) => {
  const { name } = await req.json()
  return NextResponse.json({ message: `Hello ${name} from API post request!` })
}
