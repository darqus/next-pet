import { NextResponse } from 'next/server'
import { createHelloGreeting, getHelloMassage } from '../../../lib/hello'

export const GET = async () => {
  const data = await getHelloMassage()
  return NextResponse.json(data)
}

export const POST = (req) => {
  const { name } = req.json()
  const greeting = createHelloGreeting(name)
  return NextResponse.json({ message: `Hello ${name} from API post request!` })
}
