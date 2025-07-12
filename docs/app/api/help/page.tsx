import { HelpCircle, Book, Command, Info } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const HelpPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1>codex help</h1>
        <p className="text-xl text-muted-foreground">
          Get help and documentation for Codex CLI commands
        </p>
      </div>

      {/* Synopsis */}
      <section>
        <h2>Synopsis</h2>
        <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
          <code>codex help [command]</code>
        </pre>
      </section>

      {/* Description */}
      <section>
        <h2>Description</h2>
        <p>
          The <code>codex help</code> command displays help information about Codex CLI. 
          When called without arguments, it shows a list of all available commands. 
          When called with a specific command name, it displays detailed help for that command.
        </p>
      </section>

      {/* Usage Examples */}
      <section>
        <h2>Usage</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Show general help</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>codex help</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                Displays a list of all available commands with brief descriptions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Get help for a specific command</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>codex help generate</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                Shows detailed documentation for the generate command.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Using --help flag</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>codex generate --help</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                Alternative way to get help for any command.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Output Format */}
      <section>
        <h2>Help Output Format</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Standard help output includes:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Command className="w-4 h-4 mt-0.5 text-muted-foreground" />
                <div>
                  <strong className="text-sm">Command Synopsis</strong>
                  <p className="text-sm text-muted-foreground">Shows the command syntax and available options</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Info className="w-4 h-4 mt-0.5 text-muted-foreground" />
                <div>
                  <strong className="text-sm">Description</strong>
                  <p className="text-sm text-muted-foreground">Explains what the command does</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Book className="w-4 h-4 mt-0.5 text-muted-foreground" />
                <div>
                  <strong className="text-sm">Options and Flags</strong>
                  <p className="text-sm text-muted-foreground">Lists all available options with descriptions</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <HelpCircle className="w-4 h-4 mt-0.5 text-muted-foreground" />
                <div>
                  <strong className="text-sm">Examples</strong>
                  <p className="text-sm text-muted-foreground">Practical usage examples</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Available Commands */}
      <section>
        <h2>Available Commands</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-mono">generate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Generate code from natural language descriptions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base font-mono">chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Start an interactive coding session
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base font-mono">auth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Manage authentication and API keys
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base font-mono">config</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Configure CLI settings and preferences
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base font-mono">history</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                View and manage generation history
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base font-mono">version</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Display CLI version information
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Global Options */}
      <section>
        <h2>Global Options</h2>
        <p className="mb-4">These options work with all commands:</p>
        <div className="space-y-4">
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--help, -h</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Show help for any command
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--version, -v</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Display version information
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--quiet, -q</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Suppress non-essential output
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--verbose</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Show detailed output and debug information
            </p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section>
        <h2>Tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Help Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Add <code>--help</code> to any command to see its documentation instantly.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Interactive Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Type <code>/help</code> during a chat session for interactive command help.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* See Also */}
      <section>
        <h2>See Also</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><a href="/api" className="text-primary hover:underline">CLI Reference</a> - Complete command reference</li>
          <li><a href="/quick-start" className="text-primary hover:underline">Quick Start</a> - Get started with Codex</li>
          <li><a href="https://docs.codex.ai" className="text-primary hover:underline">Online Documentation</a> - Full documentation</li>
        </ul>
      </section>
    </div>
  )
}

export default HelpPage 