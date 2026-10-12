import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    // Returns developer public stats overview
    const stats = {
      publicRepos: 38,
      totalStars: 420,
      totalForks: 85,
      contributionsLastYear: 1420,
      languages: ['TypeScript', 'Javascript', 'React', 'Next.js', 'Node.js', 'PostgreSQL'],
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, data: stats }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Could not fetch GitHub statistics' },
      { status: 500 }
    );
  }
}
