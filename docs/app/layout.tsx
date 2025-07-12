import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Codex Documentation',
  description: 'Complete guide to building with Codex CLI',
  keywords: ['Codex', 'CLI', 'Documentation'],
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body style={{ fontFamily: inter.style.fontFamily }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex-1 min-w-0">
                <div className="max-w-4xl mx-auto px-8 py-12">
                  {children}
                </div>
              </main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout 