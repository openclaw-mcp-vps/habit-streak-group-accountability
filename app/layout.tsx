import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HabitPack — Group Habit Tracking & Accountability',
  description: 'Track habits together. Build streaks with your group. Stay accountable with real-time social features and group challenges.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c0e05480-2df2-4f77-8a69-42a3e1fd4511"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
