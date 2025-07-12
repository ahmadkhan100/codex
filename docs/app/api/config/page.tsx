import { Settings, FileText, Globe, Palette } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

const ConfigPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1>codex config</h1>
        <p className="text-xl text-muted-foreground">
          Configure Codex CLI settings and preferences
        </p>
      </div>

      {/* Synopsis */}
      <section>
        <h2>Synopsis</h2>
        <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
          <code>codex config [key] [value] [options]</code>
        </pre>
      </section>

      {/* Description */}
      <section>
        <h2>Description</h2>
        <p>
          The <code>codex config</code> command allows you to view and modify Codex CLI configuration 
          settings. Settings are stored in <code>~/.codex/config.json</code> and can also be overridden 
          using environment variables.
        </p>
      </section>

      {/* Usage */}
      <section>
        <h2>Usage Patterns</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">View all settings</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded">
                <code>codex config</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Get a specific setting</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded">
                <code>codex config &lt;key&gt;</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Set a configuration value</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded">
                <code>codex config &lt;key&gt; &lt;value&gt;</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Available Settings */}
      <section>
        <h2>Available Settings</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Model Settings</h3>
            <div className="space-y-3">
              <Card>
                <CardContent className="pt-6">
                  <dl>
                    <dt className="font-mono text-sm font-semibold">default_model</dt>
                    <dd className="text-sm text-muted-foreground mt-1 ml-4">
                      Default AI model for code generation
                      <br />
                      <span className="text-xs">Default: <code>gpt-4</code></span>
                    </dd>
                  </dl>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <dl>
                    <dt className="font-mono text-sm font-semibold">temperature</dt>
                    <dd className="text-sm text-muted-foreground mt-1 ml-4">
                      Default creativity level (0.0 - 1.0)
                      <br />
                      <span className="text-xs">Default: <code>0.3</code></span>
                    </dd>
                  </dl>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <dl>
                    <dt className="font-mono text-sm font-semibold">max_tokens</dt>
                    <dd className="text-sm text-muted-foreground mt-1 ml-4">
                      Maximum tokens per generation
                      <br />
                      <span className="text-xs">Default: <code>2048</code></span>
                    </dd>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Output Settings</h3>
            <div className="space-y-3">
              <Card>
                <CardContent className="pt-6">
                  <dl>
                    <dt className="font-mono text-sm font-semibold">output_format</dt>
                    <dd className="text-sm text-muted-foreground mt-1 ml-4">
                      Default output format (code, markdown, json)
                      <br />
                      <span className="text-xs">Default: <code>code</code></span>
                    </dd>
                  </dl>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <dl>
                    <dt className="font-mono text-sm font-semibold">syntax_highlighting</dt>
                    <dd className="text-sm text-muted-foreground mt-1 ml-4">
                      Enable syntax highlighting in terminal
                      <br />
                      <span className="text-xs">Default: <code>true</code></span>
                    </dd>
                  </dl>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <dl>
                    <dt className="font-mono text-sm font-semibold">theme</dt>
                    <dd className="text-sm text-muted-foreground mt-1 ml-4">
                      Color theme for syntax highlighting
                      <br />
                      <span className="text-xs">Default: <code>monokai</code></span>
                    </dd>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">API Settings</h3>
            <div className="space-y-3">
              <Card>
                <CardContent className="pt-6">
                  <dl>
                    <dt className="font-mono text-sm font-semibold">api_endpoint</dt>
                    <dd className="text-sm text-muted-foreground mt-1 ml-4">
                      API endpoint URL
                      <br />
                      <span className="text-xs">Default: <code>https://api.codex.ai/v1</code></span>
                    </dd>
                  </dl>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <dl>
                    <dt className="font-mono text-sm font-semibold">timeout</dt>
                    <dd className="text-sm text-muted-foreground mt-1 ml-4">
                      Request timeout in seconds
                      <br />
                      <span className="text-xs">Default: <code>30</code></span>
                    </dd>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2>Examples</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Set default model</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>codex config default_model gpt-4-turbo</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Increase request timeout</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>codex config timeout 60</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Change syntax highlighting theme</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>codex config theme dracula</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Reset to defaults</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>codex config --reset</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Options */}
      <section>
        <h2>Options</h2>
        <div className="space-y-4">
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--global</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Set configuration globally for all projects
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--local</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Set configuration for current project only
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--reset</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Reset all settings to defaults
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--unset &lt;key&gt;</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Remove a specific configuration setting
            </p>
          </div>
        </div>
      </section>

      {/* Configuration Files */}
      <section>
        <Alert>
          <FileText className="h-4 w-4" />
          <AlertDescription>
            <strong>Configuration Files:</strong> Settings are loaded in order of precedence:
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Environment variables (CODEX_*)</li>
              <li>Local project config (.codex/config.json)</li>
              <li>Global user config (~/.codex/config.json)</li>
              <li>System defaults</li>
            </ol>
          </AlertDescription>
        </Alert>
      </section>

      {/* See Also */}
      <section>
        <h2>See Also</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><a href="/api/auth" className="text-primary hover:underline">codex auth</a> - Manage authentication</li>
          <li><a href="/reference/env" className="text-primary hover:underline">Environment Variables</a> - Full list of environment variables</li>
        </ul>
      </section>
    </div>
  )
}

export default ConfigPage 