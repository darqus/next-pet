import { NextResponse } from 'next/server'
import { createHelloGreeting, getHelloMassage } from '../../../lib/hello'

export const GET = async () => {
  const data = await getHelloMassage()
  return NextResponse.json(data)
}

export const POST = async (req) => {
  const { name } = await req.json()
  const { message } = createHelloGreeting(name)
  return NextResponse.json({ message })
}
