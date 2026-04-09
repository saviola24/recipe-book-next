import './globals.css'

export const metadata = {
  title: 'Recipe Book',
  description: 'A simple recipe book app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}