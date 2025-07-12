import { 
  Code2, 
  Zap, 
  Shield, 
  Users, 
  Layers, 
  Terminal, 
  GitBranch, 
  Clock,
  CheckCircle,
  ArrowRight 
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Feature {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  status: 'available' | 'beta' | 'coming-soon'
  category: string
}

interface FeatureCategory {
  title: string
  description: string
  features: Feature[]
}

const featureCategories: FeatureCategory[] = [
  {
    title: 'Core Capabilities',
    description: 'Essential features that power your development workflow',
    features: [
      {
        title: 'Intelligent Code Generation',
        description: 'Generate high-quality code from natural language descriptions with context awareness and best practices.',
        icon: Code2,
        status: 'available',
        category: 'core',
      },
      {
        title: 'Multi-Language Support',
        description: 'Support for 40+ programming languages including Python, JavaScript, TypeScript, Go, Rust, and more.',
        icon: Layers,
        status: 'available',
        category: 'core',
      },
      {
        title: 'Real-time Collaboration',
        description: 'Share sessions, templates, and configurations with your team in real-time.',
        icon: Users,
        status: 'available',
        category: 'core',
      },
      {
        title: 'Lightning Performance',
        description: 'Optimized for speed with intelligent caching and parallel processing capabilities.',
        icon: Zap,
        status: 'available',
        category: 'core',
      },
    ],
  },
  {
    title: 'Developer Experience',
    description: 'Tools and features designed to enhance your productivity',
    features: [
      {
        title: 'Interactive Terminal',
        description: 'Built-in terminal with syntax highlighting, auto-completion, and command history.',
        icon: Terminal,
        status: 'available',
        category: 'dx',
      },
      {
        title: 'Git Integration',
        description: 'Seamless Git workflows with automatic commit messages and branch management.',
        icon: GitBranch,
        status: 'beta',
        category: 'dx',
      },
      {
        title: 'Context Preservation',
        description: 'Maintains context across sessions for consistent and relevant code generation.',
        icon: Clock,
        status: 'available',
        category: 'dx',
      },
    ],
  },
  {
    title: 'Enterprise & Security',
    description: 'Enterprise-grade features for teams and organizations',
    features: [
      {
        title: 'Enterprise Security',
        description: 'SOC 2 Type II compliant with end-to-end encryption and access controls.',
        icon: Shield,
        status: 'available',
        category: 'enterprise',
      },
      {
        title: 'Audit Logging',
        description: 'Comprehensive audit trails for compliance and security monitoring.',
        icon: CheckCircle,
        status: 'coming-soon',
        category: 'enterprise',
      },
    ],
  },
]

const getStatusBadge = (status: Feature['status']) => {
  switch (status) {
    case 'available':
      return <Badge variant="default" className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">Available</Badge>
    case 'beta':
      return <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">Beta</Badge>
    case 'coming-soon':
      return <Badge variant="outline" className="border-orange-200 text-orange-700 dark:border-orange-800 dark:text-orange-400">Coming Soon</Badge>
    default:
      return null
  }
}

const FeaturesPage = () => {
  return (
    <div className="container py-12">
      <h1>Features</h1>
      
      <p className="text-xl mb-12 max-w-3xl">
        Discover the powerful features that make Codex CLI the most advanced AI coding assistant for developers.
      </p>

      {/* Core Features */}
      <section className="mb-16">
        <h2>Core Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Natural Language Code Generation</h3>
            <p className="mb-4">
              Transform your ideas into working code using simple, natural language descriptions. 
              Codex understands context and generates production-ready code.
            </p>
            <pre><code>codex generate "Create a REST API with user authentication"</code></pre>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Multi-Language Support</h3>
            <p className="mb-4">
              Generate code in over 40 programming languages including Python, JavaScript, 
              TypeScript, Go, Rust, and more.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Python, JavaScript, TypeScript</li>
              <li>Go, Rust, C++, Java</li>
              <li>Ruby, PHP, Swift</li>
              <li>And many more...</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Context-Aware Generation</h3>
            <p className="mb-4">
              Codex analyzes your existing codebase to generate code that fits perfectly 
              with your project's style and patterns.
            </p>
            <pre><code>codex generate "Add user profile endpoint" --context ./api</code></pre>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Interactive Mode</h3>
            <p className="mb-4">
              Have a conversation with Codex to refine and iterate on your code. 
              Ask follow-up questions and make adjustments in real-time.
            </p>
            <pre><code>codex chat</code></pre>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="mb-16">
        <h2>Advanced Features</h2>
        
        <div className="space-y-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Code Refactoring</h3>
            <p className="mb-4">
              Improve your existing code with AI-powered refactoring suggestions. 
              Make your code cleaner, more efficient, and easier to maintain.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Before:</h4>
                <pre><code>{`function calc(a,b,c) {
  return a+b*c;
}`}</code></pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">After:</h4>
                <pre><code>{`function calculateTotal(base, rate, quantity) {
  const subtotal = rate * quantity;
  return base + subtotal;
}`}</code></pre>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Test Generation</h3>
            <p className="mb-4">
              Automatically generate comprehensive test suites for your code. 
              Supports unit tests, integration tests, and edge cases.
            </p>
            <pre><code>codex generate "Write tests for UserService class" --type test</code></pre>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Documentation Generation</h3>
            <p className="mb-4">
              Generate clear, comprehensive documentation for your code including 
              API docs, README files, and inline comments.
            </p>
            <pre><code>codex generate "Document the authentication module" --type docs</code></pre>
          </div>
        </div>
      </section>

      {/* Developer Experience */}
      <section className="mb-16">
        <h2>Developer Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Fast Response Times</h3>
            <p className="text-sm">Get code suggestions in under 200ms with our optimized infrastructure.</p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Offline Mode</h3>
            <p className="text-sm">Continue working with cached responses when you're offline.</p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Version Control</h3>
            <p className="text-sm">Track all generated code with built-in history and rollback features.</p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Team Sharing</h3>
            <p className="text-sm">Share prompts, templates, and configurations with your team.</p>
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="mb-16">
        <h2>Security & Privacy</h2>
        
        <div className="border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Enterprise-Grade Security</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>End-to-end encryption for all API calls</li>
                <li>SOC 2 Type II compliance</li>
                <li>Regular security audits</li>
                <li>Data residency options</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Your code is never used for training</li>
                <li>30-day data retention (configurable)</li>
                <li>GDPR and CCPA compliant</li>
                <li>On-premise deployment available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section>
        <h2>Coming Soon</h2>
        
        <div className="border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">IDE Integrations</h3>
              <p>Native extensions for VS Code, IntelliJ, and more.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">CI/CD Integration</h3>
              <p>Automated code review and suggestions in your pipeline.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Custom Models</h3>
              <p>Train Codex on your codebase for better results.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Real-time Collaboration</h3>
              <p>Code together with AI assistance in real-time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesPage 