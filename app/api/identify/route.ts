import { NextRequest, NextResponse } from 'next/server';
import { identifyPlant } from '../../../lib/gemini';

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json();
    
    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    const plantInfo = await identifyPlant(image);

    return NextResponse.json({ result: plantInfo });
  } catch (error) {
    console.error('Identification error:', error);
    return NextResponse.json({ error: 'Failed to identify plant' }, { status: 500 });
  }
}
