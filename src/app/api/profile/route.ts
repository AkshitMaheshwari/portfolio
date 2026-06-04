import { NextResponse } from 'next/server';
import { profile } from '@/data/portfolio';

export async function GET() {
  return NextResponse.json(profile);
}
