import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-0 border-none">
      <div className="flex">
        <div className="w-[260px] flex-shrink-0" /> {/* Spacer to match sidebar width */}
        <div className="flex-1 px-8">
          <div className="py-8 flex items-center justify-between max-w-4xl">
            <div className="flex items-center gap-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg 
                  className="w-5 h-5 text-gray-500 hover:text-gray-700 transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-500 hover:text-gray-700 transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-gray-500 hover:text-gray-700 transition-colors" />
              </Link>
            </div>
            <span className="text-sm text-gray-500">Powered by Tangent</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 