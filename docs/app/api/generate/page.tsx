import { Code2, FileText, Settings, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const GeneratePage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1>codex generate</h1>
        <p className="text-xl text-muted-foreground">
          Generate code from natural language descriptions
        </p>
      </div>

      {/* Synopsis */}
      <section>
        <h2>Synopsis</h2>
        <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
          <code>codex generate [prompt] [options]</code>
        </pre>
      </section>

      {/* Description */}
      <section>
        <h2>Description</h2>
        <p>
          The <code>codex generate</code> command transforms natural language descriptions into 
          production-ready code. It uses advanced AI models to understand your intent and generate 
          code that follows best practices and conventions for your chosen programming language.
        </p>
      </section>

      {/* Options */}
      <section>
        <h2>Options</h2>
        <div className="space-y-4">
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--file, -f &lt;path&gt;</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Output generated code to a file instead of stdout
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--language, -l &lt;lang&gt;</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Target programming language (e.g., python, javascript, go, rust)
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--model, -m &lt;model&gt;</h3>
            <p className="text-sm text-muted-foreground mt-1">
              AI model to use for generation (default: gpt-4)
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--temperature, -t &lt;value&gt;</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Creativity level from 0.0 to 1.0 (default: 0.3)
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--context &lt;file&gt;</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Provide additional context from an existing file
            </p>
          </div>
          
          <div className="border-l-2 border-primary pl-4">
            <h3 className="font-mono text-sm">--max-tokens &lt;n&gt;</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Maximum number of tokens to generate (default: 2048)
            </p>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section>
        <h2>Examples</h2>
        
        <Tabs defaultValue="basic" className="w-full">
          <TabsList>
            <TabsTrigger value="basic">Basic Usage</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            <TabsTrigger value="context">With Context</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Generate a simple function</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-secondary p-3 rounded overflow-x-auto">
                  <code>codex generate "Create a function to calculate factorial"</code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Specify output language</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-secondary p-3 rounded overflow-x-auto">
                  <code>codex generate "Build a REST API endpoint for user registration" -l python</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="advanced" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Save to file with specific model</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-secondary p-3 rounded overflow-x-auto">
                  <code>codex generate "Create a React component for a shopping cart" \{'\n'}  -l javascript \{'\n'}  -f ShoppingCart.jsx \{'\n'}  -m gpt-4</code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Control creativity level</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-secondary p-3 rounded overflow-x-auto">
                  <code>codex generate "Implement a creative loading animation" \{'\n'}  -l css \{'\n'}  -t 0.8 \{'\n'}  -f loader.css</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="context" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Generate with existing code context</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-secondary p-3 rounded overflow-x-auto">
                  <code>codex generate "Add error handling to this function" \{'\n'}  --context utils.py \{'\n'}  -f utils_updated.py</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Tips */}
      <section>
        <h2>Tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Be Specific
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The more detailed your prompt, the better the generated code will match your requirements.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Use Context
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Provide existing code files as context to maintain consistency with your codebase.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* See Also */}
      <section>
        <h2>See Also</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><a href="/api/chat" className="text-primary hover:underline">codex chat</a> - Interactive code generation</li>
          <li><a href="/api/config" className="text-primary hover:underline">codex config</a> - Configure default settings</li>
          <li><a href="/api/auth" className="text-primary hover:underline">codex auth</a> - Manage authentication</li>
        </ul>
      </section>
    </div>
  )
}

export default GeneratePage 