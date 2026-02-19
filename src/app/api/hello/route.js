import { NextResponse } from 'next/server'
import { createHelloGreeting, getHelloMassage } from '../../../lib/hello'

export const GET = async () => {
  try {
    const data = await getHelloMassage()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch message' },
      { status: 500 }
    )
  }
}

export const POST = async (req) => {
  try {
    const { name } = await req.json()

    if (!name || typeof name !== 'string') {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    const { message } = createHelloGreeting(name)
    return NextResponse.json({ message })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
