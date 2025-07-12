import { 
  Code2, 
  Key, 
  Globe, 
  Zap, 
  Shield, 
  BookOpen, 
  Copy,
  Check,
  ExternalLink,
  ArrowRight 
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import CodeBlock from '@/components/CodeBlock'

interface APIEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  path: string
  description: string
  authenticated: boolean
}

interface CodeExample {
  language: string
  code: string
}

const endpoints: APIEndpoint[] = [
  {
    method: 'POST',
    path: '/v1/completions',
    description: 'Generate code completions from natural language prompts',
    authenticated: true,
  },
  {
    method: 'POST',
    path: '/v1/chat/completions',
    description: 'Create conversational code generation sessions',
    authenticated: true,
  },
  {
    method: 'GET',
    path: '/v1/models',
    description: 'List available models and their capabilities',
    authenticated: true,
  },
  {
    method: 'POST',
    path: '/v1/embeddings',
    description: 'Generate embeddings for code similarity and search',
    authenticated: true,
  },
]

const codeExamples: Record<string, CodeExample[]> = {
  authentication: [
    {
      language: 'bash',
      code: `curl https://api.openai.com/v1/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $OPENAI_API_KEY" \\
  -d '{
    "model": "codex-davinci-002",
    "prompt": "// Create a function to calculate fibonacci",
    "max_tokens": 100,
    "temperature": 0
  }'`,
    },
    {
      language: 'python',
      code: `import openai

openai.api_key = "your-api-key-here"

response = openai.Completion.create(
  model="codex-davinci-002",
  prompt="// Create a function to calculate fibonacci",
  max_tokens=100,
  temperature=0
)

print(response.choices[0].text)`,
    },
    {
      language: 'javascript',
      code: `import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = await openai.completions.create({
  model: 'codex-davinci-002',
  prompt: '// Create a function to calculate fibonacci',
  max_tokens: 100,
  temperature: 0,
});

console.log(completion.choices[0].text);`,
    },
  ],
}

const getMethodBadge = (method: APIEndpoint['method']) => {
  const variants = {
    GET: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
    POST: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
    PUT: 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400',
    DELETE: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  }
  
  return (
    <Badge className={`font-mono text-xs ${variants[method]}`}>
      {method}
    </Badge>
  )
}

const APIPage = () => {
  return (
    <div className="container py-12">
      <h1>Reference</h1>
      
      <p className="text-xl mb-12 max-w-3xl">
        Complete reference for the Codex CLI. Learn how to integrate Codex into your development workflow.
      </p>

      {/* CLI Commands */}
      <section className="mb-16">
        <h2>CLI Commands</h2>
        
        <div className="space-y-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">codex generate</h3>
            <p className="mb-4">Generate code from natural language descriptions.</p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Usage:</h4>
              <CodeBlock language="bash">codex generate [prompt] [options]</CodeBlock>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Options:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">--file, -f</code> - Output to file</li>
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">--language, -l</code> - Target programming language</li>
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">--model, -m</code> - AI model to use (default: gpt-4)</li>
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">--temperature, -t</code> - Creativity level (0.0-1.0)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Example:</h4>
              <CodeBlock language="bash">codex generate "Create a REST API endpoint for user authentication" -l python -f auth.py</CodeBlock>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">codex auth</h3>
            <p className="mb-4">Manage authentication and API keys.</p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Subcommands:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">codex auth login</code> - Authenticate with your account</li>
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">codex auth logout</code> - Sign out of your account</li>
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">codex auth status</code> - Check authentication status</li>
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">codex auth key</code> - Manage API keys</li>
              </ul>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">codex config</h3>
            <p className="mb-4">Configure Codex CLI settings.</p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Usage:</h4>
              <CodeBlock language="bash">codex config [key] [value]</CodeBlock>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Available Settings:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">default_model</code> - Default AI model</li>
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">output_format</code> - Default output format</li>
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">api_endpoint</code> - API endpoint URL</li>
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">timeout</code> - Request timeout in seconds</li>
              </ul>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">codex history</h3>
            <p className="mb-4">View and manage generation history.</p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Usage:</h4>
              <CodeBlock language="bash">codex history [options]</CodeBlock>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Options:</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">--limit, -n</code> - Number of entries to show</li>
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">--clear</code> - Clear history</li>
                <li><code className="bg-secondary px-1 py-0.5 rounded text-sm">--export</code> - Export history to file</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Environment Variables */}
      <section className="mb-16">
        <h2>Environment Variables</h2>
        
        <div className="border rounded-lg p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Variable</th>
                <th className="text-left py-2">Description</th>
                <th className="text-left py-2">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3"><code className="bg-secondary px-1 py-0.5 rounded text-sm">CODEX_API_KEY</code></td>
                <td className="py-3">Your Codex API key</td>
                <td className="py-3">-</td>
              </tr>
              <tr>
                <td className="py-3"><code className="bg-secondary px-1 py-0.5 rounded text-sm">CODEX_MODEL</code></td>
                <td className="py-3">Default model to use</td>
                <td className="py-3">gpt-4</td>
              </tr>
              <tr>
                <td className="py-3"><code className="bg-secondary px-1 py-0.5 rounded text-sm">CODEX_TIMEOUT</code></td>
                <td className="py-3">Request timeout in seconds</td>
                <td className="py-3">30</td>
              </tr>
              <tr>
                <td className="py-3"><code className="bg-secondary px-1 py-0.5 rounded text-sm">CODEX_CONFIG_PATH</code></td>
                <td className="py-3">Path to config file</td>
                <td className="py-3">~/.codex/config.json</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Error Codes */}
      <section className="mb-16">
        <h2>Error Codes</h2>
        
        <div className="border rounded-lg p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Code</th>
                <th className="text-left py-2">Description</th>
                <th className="text-left py-2">Solution</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3"><code className="bg-secondary px-1 py-0.5 rounded text-sm">AUTH_001</code></td>
                <td className="py-3">Invalid API key</td>
                <td className="py-3">Check your API key configuration</td>
              </tr>
              <tr>
                <td className="py-3"><code className="bg-secondary px-1 py-0.5 rounded text-sm">AUTH_002</code></td>
                <td className="py-3">Expired token</td>
                <td className="py-3">Run <code className="bg-secondary px-1 py-0.5 rounded text-sm">codex auth login</code> to refresh</td>
              </tr>
              <tr>
                <td className="py-3"><code className="bg-secondary px-1 py-0.5 rounded text-sm">GEN_001</code></td>
                <td className="py-3">Generation failed</td>
                <td className="py-3">Check your prompt and try again</td>
              </tr>
              <tr>
                <td className="py-3"><code className="bg-secondary px-1 py-0.5 rounded text-sm">NET_001</code></td>
                <td className="py-3">Network error</td>
                <td className="py-3">Check your internet connection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2>Examples</h2>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Generate a Python function</h3>
            <CodeBlock language="bash">codex generate "Create a function that calculates fibonacci numbers" -l python</CodeBlock>
          </div>
          
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Create a React component</h3>
            <CodeBlock language="bash">codex generate "Build a todo list component with add and delete functionality" -l javascript -f TodoList.jsx</CodeBlock>
          </div>
          
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Generate API documentation</h3>
            <CodeBlock language="bash">codex generate "Document this REST API endpoint for user management" --context api.py</CodeBlock>
          </div>
        </div>
      </section>
    </div>
  )
}

export default APIPage 