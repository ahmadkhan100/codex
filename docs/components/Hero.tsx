import Link from 'next/link';
import { ArrowRight, Terminal, Code, Zap, Github, Book } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      <div className="relative max-w-5xl mx-auto px-6 py-20 lg:py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-sm font-medium backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span>Now available</span>
          </div>
          
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">OpenAI</span>
              <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Codex CLI
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
              A lightweight coding agent that runs in your terminal. Built by OpenAI to help developers 
              write better code faster with ChatGPT-level reasoning.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/installation" 
              className="btn-primary inline-flex items-center gap-2 text-base px-6 py-3"
            >
              <Book className="h-4 w-4" />
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <a 
              href="https://github.com/openai/codex" 
              className="btn-outline inline-flex items-center gap-2 text-base px-6 py-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>

          {/* Quick Install */}
          <div className="max-w-md mx-auto">
            <p className="text-sm text-muted-foreground mb-3">Quick install:</p>
            <div className="code-block">
              <pre className="text-sm"><code>npm install -g @openai/codex</code></pre>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Zero Setup</h3>
            <p className="text-sm text-muted-foreground">
              Bring your OpenAI API key and it just works. No configuration needed.
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Safe & Secure</h3>
            <p className="text-sm text-muted-foreground">
              Runs in a secure sandbox with network-disabled execution by default.
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Terminal className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Multimodal</h3>
            <p className="text-sm text-muted-foreground">
              Pass screenshots or diagrams to implement features visually.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 