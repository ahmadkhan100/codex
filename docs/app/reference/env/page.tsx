import { Terminal, Key, Settings, Shield, Globe } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'

const EnvPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1>Environment Variables</h1>
        <p className="text-xl text-muted-foreground">
          Configure Codex CLI using environment variables
        </p>
      </div>

      {/* Overview */}
      <section>
        <h2>Overview</h2>
        <p>
          Environment variables provide a way to configure Codex CLI without modifying configuration files. 
          They are particularly useful for CI/CD pipelines, containerized environments, and temporary overrides.
        </p>
      </section>

      {/* Core Variables */}
      <section>
        <h2>Core Environment Variables</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-4 h-4" />
                Authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-mono text-sm font-semibold">CODEX_API_KEY</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your Codex API key for authentication
                  </p>
                  <pre className="bg-secondary p-2 rounded mt-2 text-xs">
                    <code>export CODEX_API_KEY="your-api-key-here"</code>
                  </pre>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-mono text-sm font-semibold">CODEX_AUTH_TOKEN</h3>
                  <Badge variant="secondary" className="ml-2">Auto-managed</Badge>
                  <p className="text-sm text-muted-foreground mt-1">
                    OAuth token (automatically managed by <code>codex auth</code>)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Model Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-mono text-sm font-semibold">CODEX_MODEL</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Default AI model for code generation
                  </p>
                  <pre className="bg-secondary p-2 rounded mt-2 text-xs">
                    <code>export CODEX_MODEL="gpt-4-turbo"</code>
                  </pre>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-mono text-sm font-semibold">CODEX_TEMPERATURE</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Creativity level (0.0-1.0)
                  </p>
                  <pre className="bg-secondary p-2 rounded mt-2 text-xs">
                    <code>export CODEX_TEMPERATURE="0.5"</code>
                  </pre>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-mono text-sm font-semibold">CODEX_MAX_TOKENS</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Maximum tokens per generation
                  </p>
                  <pre className="bg-secondary p-2 rounded mt-2 text-xs">
                    <code>export CODEX_MAX_TOKENS="4096"</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                API Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-mono text-sm font-semibold">CODEX_API_ENDPOINT</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    API endpoint URL
                  </p>
                  <pre className="bg-secondary p-2 rounded mt-2 text-xs">
                    <code>export CODEX_API_ENDPOINT="https://api.codex.ai/v1"</code>
                  </pre>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-mono text-sm font-semibold">CODEX_TIMEOUT</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Request timeout in seconds
                  </p>
                  <pre className="bg-secondary p-2 rounded mt-2 text-xs">
                    <code>export CODEX_TIMEOUT="60"</code>
                  </pre>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-mono text-sm font-semibold">CODEX_PROXY</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    HTTP proxy for API requests
                  </p>
                  <pre className="bg-secondary p-2 rounded mt-2 text-xs">
                    <code>export CODEX_PROXY="http://proxy.example.com:8080"</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Output Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-mono text-sm font-semibold">CODEX_OUTPUT_FORMAT</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Default output format (code, markdown, json)
                  </p>
                  <pre className="bg-secondary p-2 rounded mt-2 text-xs">
                    <code>export CODEX_OUTPUT_FORMAT="markdown"</code>
                  </pre>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-mono text-sm font-semibold">CODEX_NO_COLOR</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Disable colored output
                  </p>
                  <pre className="bg-secondary p-2 rounded mt-2 text-xs">
                    <code>export CODEX_NO_COLOR="1"</code>
                  </pre>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-mono text-sm font-semibold">CODEX_THEME</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Syntax highlighting theme
                  </p>
                  <pre className="bg-secondary p-2 rounded mt-2 text-xs">
                    <code>export CODEX_THEME="dracula"</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advanced Variables */}
      <section>
        <h2>Advanced Environment Variables</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Variable</th>
                    <th className="text-left py-2">Description</th>
                    <th className="text-left py-2">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 font-mono text-sm">CODEX_CONFIG_PATH</td>
                    <td className="py-3 text-sm">Custom config file path</td>
                    <td className="py-3 text-sm font-mono">~/custom/config.json</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-sm">CODEX_CACHE_DIR</td>
                    <td className="py-3 text-sm">Cache directory location</td>
                    <td className="py-3 text-sm font-mono">~/.cache/codex</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-sm">CODEX_LOG_LEVEL</td>
                    <td className="py-3 text-sm">Logging verbosity</td>
                    <td className="py-3 text-sm font-mono">debug, info, warn, error</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-sm">CODEX_LOG_FILE</td>
                    <td className="py-3 text-sm">Log file path</td>
                    <td className="py-3 text-sm font-mono">/var/log/codex.log</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-sm">CODEX_HISTORY_FILE</td>
                    <td className="py-3 text-sm">Command history file</td>
                    <td className="py-3 text-sm font-mono">~/.codex_history</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-sm">CODEX_EDITOR</td>
                    <td className="py-3 text-sm">Preferred text editor</td>
                    <td className="py-3 text-sm font-mono">vim, code, nano</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <h2>Usage Examples</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Basic Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>{`# Add to your shell profile (.bashrc, .zshrc, etc.)
export CODEX_API_KEY="your-api-key"
export CODEX_MODEL="gpt-4"
export CODEX_TEMPERATURE="0.3"`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">CI/CD Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>{`# GitHub Actions example
env:
  CODEX_API_KEY: \${{ secrets.CODEX_API_KEY }}
  CODEX_MODEL: "gpt-4-turbo"
  CODEX_NO_COLOR: "1"
  CODEX_LOG_LEVEL: "info"`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Docker Container</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>{`# Dockerfile
ENV CODEX_API_ENDPOINT="https://api.codex.ai/v1"
ENV CODEX_TIMEOUT="30"
ENV CODEX_CACHE_DIR="/app/.cache/codex"

# docker-compose.yml
environment:
  - CODEX_API_KEY=\${CODEX_API_KEY}
  - CODEX_MODEL=gpt-4`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Note */}
      <section>
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertDescription>
            <strong>Security Best Practices:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Never commit API keys or sensitive values to version control</li>
              <li>Use secret management tools for production environments</li>
              <li>Restrict environment variable access in shared systems</li>
              <li>Rotate API keys regularly</li>
            </ul>
          </AlertDescription>
        </Alert>
      </section>

      {/* See Also */}
      <section>
        <h2>See Also</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><a href="/reference/config" className="text-primary hover:underline">Configuration Reference</a> - Configuration file format</li>
          <li><a href="/api/config" className="text-primary hover:underline">codex config</a> - Configuration command</li>
          <li><a href="/api/auth" className="text-primary hover:underline">codex auth</a> - Authentication management</li>
        </ul>
      </section>
    </div>
  )
}

export default EnvPage 