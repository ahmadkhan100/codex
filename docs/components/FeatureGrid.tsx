import { MessageCircle, Globe, Brain, MessagesSquare, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: 'MessageCircle',
    emoji: '💬',
    title: 'Natural Language Understanding',
    description: 'Describe what you want in plain English, and Codex generates the code for you.',
  },
  {
    icon: 'Globe',
    emoji: '🌐',
    title: 'Multi-Language Support',
    description: 'Generate code in Python, JavaScript, TypeScript, Go, and dozens of other languages.',
  },
  {
    icon: 'MessagesSquare',
    emoji: '💭',
    title: 'Interactive Mode',
    description: 'Have a conversation with Codex to refine and iterate on your code.',
  },
  {
    icon: 'Shield',
    emoji: '🛡️',
    title: 'Secure Execution',
    description: 'Run code safely in a sandboxed environment with configurable security policies.',
  },
  {
    icon: 'Zap',
    emoji: '⚡',
    title: 'Fast Performance',
    description: 'Get instant code suggestions and completions with optimized AI models.',
  },
  {
    icon: 'Brain',
    emoji: '🧠',
    title: 'Context Awareness',
    description: 'Codex understands your project context and generates code that fits your style.',
  },
];

function renderIcon(iconName: string, emoji: string) {
  try {
    switch (iconName) {
      case 'MessageCircle':
        return <MessageCircle className="h-6 w-6" />;
      case 'Globe':
        return <Globe className="h-6 w-6" />;
      case 'Brain':
        return <Brain className="h-6 w-6" />;
      case 'MessagesSquare':
        return <MessagesSquare className="h-6 w-6" />;
      case 'Shield':
        return <Shield className="h-6 w-6" />;
      case 'Zap':
        return <Zap className="h-6 w-6" />;
      default:
        return <span className="text-2xl">{emoji}</span>;
    }
  } catch (error) {
    // Fallback to emoji if Lucide icons fail
    return <span className="text-2xl">{emoji}</span>;
  }
}

export default function FeatureGrid() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group relative bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all duration-200 cursor-pointer"
          >
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-gray-200 transition-colors">
                {renderIcon(feature.icon, feature.emoji)}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 