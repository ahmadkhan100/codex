import Link from 'next/link'
import FeatureGrid from '@/components/FeatureGrid'

const HomePage = () => {
  return (
    <div>
      <h1>Introduction</h1>
      
      <p className="text-lg mb-8">
        Welcome to Codex, a powerful AI-powered coding assistant that transforms natural language into production-ready code.
      </p>

      <h2>What is Codex?</h2>
      
      <p>
        Codex is a cutting-edge AI system that understands natural language and converts it into code across multiple programming languages. 
        Built on advanced language models, Codex helps developers write code faster, learn new languages, and solve complex programming challenges.
      </p>

      <FeatureGrid />

      <h2>Quick Start</h2>
      
      <p>Get started with Codex in just a few steps:</p>
      
      <ol className="list-decimal list-inside space-y-2 mb-8">
        <li>Install the Codex CLI: <code>npm install -g @openai/codex-cli</code></li>
        <li>Authenticate with your API key: <code>codex auth login</code></li>
        <li>Generate your first code: <code>codex generate "Create a hello world function"</code></li>
      </ol>

      <h2>Use Cases</h2>
      
      <p>Codex excels at a wide variety of programming tasks:</p>
      
      <ul className="list-disc list-inside space-y-2 mb-8">
        <li>Writing functions and algorithms from descriptions</li>
        <li>Converting code between programming languages</li>
        <li>Generating unit tests for existing code</li>
        <li>Creating documentation and comments</li>
        <li>Debugging and explaining code</li>
        <li>Building entire applications from specifications</li>
      </ul>

      <h2>Next Steps</h2>
      
      <p>Ready to start building with Codex?</p>
      
      <div className="flex gap-4 mt-6">
        <a href="/installation" className="btn btn-primary">
          Get Started →
        </a>
        <a href="/api" className="btn btn-secondary">
          View CLI Reference
        </a>
      </div>
    </div>
  )
}

export default HomePage 