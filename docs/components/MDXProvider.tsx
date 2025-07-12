import { MDXProvider as BaseMDXProvider } from '@mdx-js/react';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

const components = {
  // Custom link component
  a: ({ href, children, ...props }: any) => {
    const isExternal = href?.startsWith('http');
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-openai-green hover:text-openai-green-dark transition-colors"
          {...props}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link 
        href={href || '#'} 
        className="text-openai-green hover:text-openai-green-dark transition-colors"
        {...props}
      >
        {children}
      </Link>
    );
  },
  
  // Custom code block
  pre: ({ children, ...props }: any) => {
    const codeProps = children?.props;
    const className = codeProps?.className || '';
    const language = className.replace(/language-/, '');
    const code = codeProps?.children || '';
    
    return <CodeBlock code={code} language={language || 'text'} />;
  },
  
  // Custom inline code
  code: ({ children }: any) => (
    <code className="bg-openai-gray-100 text-openai-gray-900 px-1 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  
  // Custom table
  table: ({ children }: any) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-openai-gray-200">
        {children}
      </table>
    </div>
  ),
  
  th: ({ children }: any) => (
    <th className="px-6 py-3 bg-openai-gray-50 text-left text-xs font-medium text-openai-gray-700 uppercase tracking-wider">
      {children}
    </th>
  ),
  
  td: ({ children }: any) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-openai-gray-600">
      {children}
    </td>
  ),
  
  // Custom blockquote
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-openai-green pl-4 my-4 italic text-openai-gray-600">
      {children}
    </blockquote>
  ),
  
  // Custom headings
  h1: ({ children }: any) => (
    <h1 className="text-4xl font-bold text-openai-gray-900 mb-6 mt-8">{children}</h1>
  ),
  
  h2: ({ children }: any) => (
    <h2 className="text-3xl font-semibold text-openai-gray-900 mb-4 mt-8">{children}</h2>
  ),
  
  h3: ({ children }: any) => (
    <h3 className="text-2xl font-semibold text-openai-gray-900 mb-3 mt-6">{children}</h3>
  ),
  
  h4: ({ children }: any) => (
    <h4 className="text-xl font-semibold text-openai-gray-900 mb-2 mt-4">{children}</h4>
  ),
  
  // Custom paragraph
  p: ({ children }: any) => (
    <p className="text-openai-gray-700 mb-4 leading-relaxed">{children}</p>
  ),
  
  // Custom lists
  ul: ({ children }: any) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-openai-gray-700">{children}</ul>
  ),
  
  ol: ({ children }: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-openai-gray-700">{children}</ol>
  ),
  
  li: ({ children }: any) => (
    <li className="ml-4">{children}</li>
  ),
};

export default function MDXProvider({ children }: { children: React.ReactNode }) {
  return (
    <BaseMDXProvider components={components}>
      {children}
    </BaseMDXProvider>
  );
} 