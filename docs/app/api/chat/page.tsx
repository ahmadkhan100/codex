import { MessageSquare, Settings, Keyboard, History } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const ChatPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1>codex chat</h1>
        <p className="text-xl text-muted-foreground">
          Interactive conversational code generation and assistance
        </p>
      </div>

      {/* Synopsis */}
      <section>
        <h2>Synopsis</h2>
        <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
          <code>codex chat [options]</code>
        </pre>
      </section>

      {/* Description */}
      <section>
        <h2>Description</h2>
        <p>
          The <code>codex chat</code> command starts an interactive session where you can have 
          a conversation with Codex to iteratively develop, refine, and debug code. It maintains 
          context throughout the conversation, making it ideal for complex coding tasks.
        </p>
      </section>

      {/* Options */}
      <section>
        <h2>Options</h2>
        <div className="space-y-4">
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--model, -m &lt;model&gt;</h3>
            <p className="text-sm text-muted-foreground mt-1">
              AI model to use for the chat session (default: gpt-4)
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--session, -s &lt;name&gt;</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Resume or name a chat session for later continuation
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--export &lt;file&gt;</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Export the chat session to a file when exiting
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--no-history</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Start chat without loading command history
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Commands */}
      <section>
        <h2>Interactive Commands</h2>
        <p className="mb-4">
          During a chat session, you can use these special commands:
        </p>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-mono">/save &lt;filename&gt;</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Save the last generated code to a file
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-mono">/clear</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Clear the current conversation context
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-mono">/history</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                View the conversation history
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-mono">/exit or /quit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Exit the chat session
              </p>
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
              <CardTitle className="text-base">Start a new chat session</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>codex chat</code>
              </pre>
              <div className="mt-4 text-sm text-muted-foreground">
                <p className="font-semibold mb-2">Example conversation:</p>
                <pre className="bg-secondary p-3 rounded">
                  <code>{`> Create a Python class for managing a todo list
Codex: Here's a Python class for managing a todo list...

> Add a method to mark items as complete
Codex: I'll add a method to mark items as complete...

> /save todo_manager.py
Saved to todo_manager.py`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Resume a previous session</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-3 rounded overflow-x-auto">
                <code>codex chat --session my-project</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2>Key Features</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Context Awareness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Maintains conversation context to build upon previous responses
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <History className="w-4 h-4" />
                Session Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Save and resume conversations for long-running projects
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Keyboard className="w-4 h-4" />
                Smart Shortcuts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Quick commands for common actions during development
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Customizable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Configure model, temperature, and other settings per session
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* See Also */}
      <section>
        <h2>See Also</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><a href="/api/generate" className="text-primary hover:underline">codex generate</a> - One-shot code generation</li>
          <li><a href="/api/config" className="text-primary hover:underline">codex config</a> - Configure default settings</li>
          <li><a href="/api/help" className="text-primary hover:underline">codex help</a> - Get help on any command</li>
        </ul>
      </section>
    </div>
  )
}

export default ChatPage 