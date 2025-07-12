import { Key, LogIn, LogOut, Shield, User } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

const AuthPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1>codex auth</h1>
        <p className="text-xl text-muted-foreground">
          Manage authentication and API keys
        </p>
      </div>

      {/* Synopsis */}
      <section>
        <h2>Synopsis</h2>
        <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
          <code>codex auth &lt;subcommand&gt; [options]</code>
        </pre>
      </section>

      {/* Description */}
      <section>
        <h2>Description</h2>
        <p>
          The <code>codex auth</code> command manages authentication for the Codex CLI. 
          It handles login, logout, API key management, and authentication status checking.
        </p>
      </section>

      {/* Subcommands */}
      <section>
        <h2>Subcommands</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                login
              </CardTitle>
              <CardDescription>Authenticate with your Codex account</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded mb-4">
                <code>codex auth login [options]</code>
              </pre>
              <div className="space-y-2 text-sm">
                <p><strong>Options:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><code>--api-key &lt;key&gt;</code> - Use API key instead of browser login</li>
                  <li><code>--no-browser</code> - Display auth URL instead of opening browser</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                logout
              </CardTitle>
              <CardDescription>Sign out of your Codex account</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded mb-4">
                <code>codex auth logout</code>
              </pre>
              <p className="text-sm text-muted-foreground">
                Removes stored credentials and revokes the current session.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-4 h-4" />
                status
              </CardTitle>
              <CardDescription>Check authentication status</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded mb-4">
                <code>codex auth status</code>
              </pre>
              <p className="text-sm text-muted-foreground">
                Displays current authentication status, user information, and API limits.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-4 h-4" />
                key
              </CardTitle>
              <CardDescription>Manage API keys</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded mb-4">
                <code>codex auth key [action] [options]</code>
              </pre>
              <div className="space-y-2 text-sm">
                <p><strong>Actions:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><code>list</code> - List all API keys</li>
                  <li><code>create &lt;name&gt;</code> - Create a new API key</li>
                  <li><code>revoke &lt;key-id&gt;</code> - Revoke an API key</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2>Examples</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Browser-based login</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>codex auth login</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                Opens your default browser for secure authentication.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Login with API key</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>codex auth login --api-key YOUR_API_KEY</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                Authenticate using an existing API key.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Create a new API key</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>codex auth key create "CI/CD Pipeline"</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                Creates a named API key for automated workflows.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Note */}
      <section>
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertDescription>
            <strong>Security Note:</strong> API keys are stored securely in your system's credential manager. 
            Never share your API keys or commit them to version control.
          </AlertDescription>
        </Alert>
      </section>

      {/* Environment Variables */}
      <section>
        <h2>Environment Variables</h2>
        <Card>
          <CardContent className="pt-6">
            <dl className="space-y-2">
              <div>
                <dt className="font-mono text-sm font-semibold">CODEX_API_KEY</dt>
                <dd className="text-sm text-muted-foreground ml-4">
                  Set this to authenticate without running <code>codex auth login</code>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-sm font-semibold">CODEX_AUTH_TOKEN</dt>
                <dd className="text-sm text-muted-foreground ml-4">
                  OAuth token (automatically managed, do not set manually)
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </section>

      {/* See Also */}
      <section>
        <h2>See Also</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><a href="/api/config" className="text-primary hover:underline">codex config</a> - Configure CLI settings</li>
          <li><a href="/api" className="text-primary hover:underline">CLI Reference</a> - Overview of all commands</li>
        </ul>
      </section>
    </div>
  )
}

export default AuthPage 