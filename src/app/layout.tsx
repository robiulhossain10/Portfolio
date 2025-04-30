import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // Use named import as it seems to export the font object directly
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

// Metadata for the application
export const metadata: Metadata = {
  title: 'Persona - Personal Portfolio',
  description: 'A modern personal portfolio website.',
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the Geist Sans font variable to the body */}
      {/* Use the .variable property from the imported font object */}
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        {children}
        <Toaster /> {/* Add Toaster component for notifications */}
      </body>
    </html>
  );
}
