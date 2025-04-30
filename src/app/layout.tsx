import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // Correct import for Geist Sans
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

// Initialize Geist Sans font
const geist = GeistSans({
  variable: '--font-geist-sans',
  // Subsets might not be applicable or needed for GeistSans directly
  // subsets: ['latin'], // Remove or keep based on 'geist' package specifics if needed
});

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
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
        <Toaster /> {/* Add Toaster component for notifications */}
      </body>
    </html>
  );
}
