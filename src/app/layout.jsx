import './globals.css';

export const metadata = {
  title: 'Recipe Book',
  description: 'Un livre de recettes simple',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}