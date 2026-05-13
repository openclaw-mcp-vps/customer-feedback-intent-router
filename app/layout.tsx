import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FeedbackRouter — Route feedback to right teams using AI',
  description: 'Analyzes customer feedback and automatically routes to appropriate teams with urgency scoring. Built for customer success teams and product managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="423869b6-2547-47e0-a061-5cccdbd03922"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
