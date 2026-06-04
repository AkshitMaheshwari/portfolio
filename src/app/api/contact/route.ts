import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | {
        name?: string;
        email?: string;
        message?: string;
      }
    | null;

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ message: 'Name, email, and message are required.' }, { status: 400 });
  }

  console.log('Portfolio contact form submission', body);

  return NextResponse.json({
    message: 'Thanks. Your message was captured by the backend route and is ready to be connected to email or storage.'
  });
}
