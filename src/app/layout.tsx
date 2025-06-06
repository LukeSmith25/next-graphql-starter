// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MockApolloProviderWrapper } from './MockApolloProviderWrapper';
import { ApolloProviderWrapper } from './ApolloProviderWrapper';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Use MockApolloProviderWrapper for development, ApolloProviderWrapper for production
  const Provider = process.env.NODE_ENV === 'development'
    ? MockApolloProviderWrapper
    : ApolloProviderWrapper;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}