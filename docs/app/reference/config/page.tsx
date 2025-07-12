import { FileJson, Settings, FolderOpen, Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const ConfigReferencePage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1>Configuration Reference</h1>
        <p className="text-xl text-muted-foreground">
          Complete guide to configuring Codex CLI
        </p>
      </div>

      {/* Overview */}
      <section>
        <h2>Overview</h2>
        <p>
          Codex CLI can be configured through multiple methods, with settings cascading in order of precedence. 
          This allows for flexible configuration at system, user, and project levels.
        </p>
      </section>

      {/* Configuration Files */}
      <section>
        <h2>Configuration Files</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4" />
                File Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sm font-mono">~/.codex/config.json</span>
                  <span className="text-sm text-muted-foreground">- Global user configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sm font-mono">./.codex/config.json</span>
                  <span className="text-sm text-muted-foreground">- Project-specific configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sm font-mono">/etc/codex/config.json</span>
                  <span className="text-sm text-muted-foreground">- System-wide configuration (Linux/macOS)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Configuration Format */}
      <section>
        <h2>Configuration Format</h2>
        <Tabs defaultValue="json" className="w-full">
          <TabsList>
            <TabsTrigger value="json">JSON Format</TabsTrigger>
            <TabsTrigger value="example">Example Config</TabsTrigger>
          </TabsList>
          
          <TabsContent value="json">
            <Card>
              <CardContent className="pt-6">
                <pre className="bg-secondary p-4 rounded overflow-x-auto">
                  <code>{`{
  "default_model": "gpt-4",
  "temperature": 0.3,
  "max_tokens": 2048,
  "output_format": "code",
  "syntax_highlighting": true,
  "theme": "monokai",
  "api_endpoint": "https://api.codex.ai/v1",
  "timeout": 30,
  "auto_save": true,
  "history_limit": 100
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="example">
            <Card>
              <CardContent className="pt-6">
                <pre className="bg-secondary p-4 rounded overflow-x-auto">
                  <code>{`{
  // Development configuration
  "default_model": "gpt-4-turbo",
  "temperature": 0.5,
  "max_tokens": 4096,
  
  // Output preferences
  "output_format": "markdown",
  "syntax_highlighting": true,
  "theme": "dracula",
  
  // API settings
  "api_endpoint": "https://api.codex.ai/v1",
  "timeout": 60,
  
  // Project-specific overrides
  "language_defaults": {
    "python": {
      "style": "pep8",
      "type_hints": true
    },
    "javascript": {
      "style": "standard",
      "semicolons": false
    }
  }
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Configuration Options */}
      <section>
        <h2>Configuration Options</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Model Configuration</h3>
            <div className="space-y-3">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Option</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Default</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 font-mono text-sm">default_model</td>
                    <td className="py-3 text-sm">string</td>
                    <td className="py-3 text-sm">gpt-4</td>
                    <td className="py-3 text-sm">Default AI model for generation</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-sm">temperature</td>
                    <td className="py-3 text-sm">number</td>
                    <td className="py-3 text-sm">0.3</td>
                    <td className="py-3 text-sm">Creativity level (0.0-1.0)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-sm">max_tokens</td>
                    <td className="py-3 text-sm">number</td>
                    <td className="py-3 text-sm">2048</td>
                    <td className="py-3 text-sm">Maximum tokens per generation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Output Configuration</h3>
            <div className="space-y-3">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Option</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Default</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 font-mono text-sm">output_format</td>
                    <td className="py-3 text-sm">string</td>
                    <td className="py-3 text-sm">code</td>
                    <td className="py-3 text-sm">Output format (code, markdown, json)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-sm">syntax_highlighting</td>
                    <td className="py-3 text-sm">boolean</td>
                    <td className="py-3 text-sm">true</td>
                    <td className="py-3 text-sm">Enable syntax highlighting</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-sm">theme</td>
                    <td className="py-3 text-sm">string</td>
                    <td className="py-3 text-sm">monokai</td>
                    <td className="py-3 text-sm">Color theme for highlighting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Precedence */}
      <section>
        <Alert>
          <Settings className="h-4 w-4" />
          <AlertDescription>
            <strong>Configuration Precedence (highest to lowest):</strong>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Command-line flags</li>
              <li>Environment variables</li>
              <li>Project configuration (./.codex/config.json)</li>
              <li>User configuration (~/.codex/config.json)</li>
              <li>System configuration (/etc/codex/config.json)</li>
              <li>Built-in defaults</li>
            </ol>
          </AlertDescription>
        </Alert>
      </section>

      {/* Security */}
      <section>
        <h2>Security Considerations</h2>
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertDescription>
            <strong>Important:</strong> Never store sensitive information like API keys in configuration files. 
            Use environment variables or the secure credential store via <code>codex auth</code> instead.
          </AlertDescription>
        </Alert>
      </section>

      {/* See Also */}
      <section>
        <h2>See Also</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><a href="/api/config" className="text-primary hover:underline">codex config</a> - Configuration command</li>
          <li><a href="/reference/env" className="text-primary hover:underline">Environment Variables</a> - Environment variable reference</li>
          <li><a href="/api/auth" className="text-primary hover:underline">codex auth</a> - Authentication management</li>
        </ul>
      </section>
    </div>
  )
}

export default ConfigReferencePage 