'use client';

import { useState } from 'react';
import CodeBlock from '@/components/CodeBlock';

export default function QuickStart() {
  const [activeTab, setActiveTab] = useState('npm');

  const installCommands = {
    npm: 'npm install -g @openai/codex',
    homebrew: 'brew install openai/tap/codex',
    binary: 'curl -L https://github.com/openai/codex/releases/latest/download/codex-linux-x64 -o codex && chmod +x codex',
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-openai-gray-900 mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-lg text-openai-gray-600">
            Choose your preferred installation method and start coding with AI assistance
          </p>
        </div>

        <div className="bg-openai-gray-50 rounded-lg p-8">
          <div className="flex space-x-1 mb-6">
            {Object.keys(installCommands).map((method) => (
              <button
                key={method}
                onClick={() => setActiveTab(method)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === method
                    ? 'bg-openai-green text-white'
                    : 'text-openai-gray-600 hover:text-openai-gray-900'
                }`}
              >
                {method === 'npm' ? 'npm' : method === 'homebrew' ? 'Homebrew' : 'Binary'}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-openai-gray-900 mb-3">
                1. Install Codex
              </h3>
              <CodeBlock
                code={installCommands[activeTab as keyof typeof installCommands]}
                language="bash"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-openai-gray-900 mb-3">
                2. Set your API key
              </h3>
              <CodeBlock
                code="export OPENAI_API_KEY='your-api-key-here'"
                language="bash"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-openai-gray-900 mb-3">
                3. Start coding
              </h3>
              <CodeBlock
                code="codex 'create a simple web server in Python'"
                language="bash"
              />
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Pro Tip</h4>
            <p className="text-blue-800 text-sm">
              Run <code className="bg-blue-100 px-1 rounded">codex --help</code> to see all available options, 
              or <code className="bg-blue-100 px-1 rounded">codex init</code> to set up a project-specific configuration.
            </p>
          </div>

          <div className="mt-6 text-center">
            <h4 className="font-semibold text-openai-gray-900 mb-3">
              Example: Build a todo app
            </h4>
            <CodeBlock
              code="codex 'create a todo app with React and TypeScript'"
              language="bash"
            />
          </div>

          <div className="mt-6 text-center">
            <h4 className="font-semibold text-openai-gray-900 mb-3">
              Example: Debug existing code
            </h4>
            <CodeBlock
              code="codex 'fix the bug in this function' --file src/utils.js"
              language="bash"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 