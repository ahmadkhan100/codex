'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div 
              className="absolute inset-0 bg-black/50" 
              onClick={() => setSidebarOpen(false)}
            />
            <div className="relative w-64 h-full bg-background">
              <Sidebar />
            </div>
          </div>
        )}
        
        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 