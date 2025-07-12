# OpenAI Codex CLI Documentation

This is the documentation site for OpenAI Codex CLI, built with Next.js, MDX, and Tailwind CSS using OpenAI's branding.

## Features

- 📝 MDX support for rich documentation with React components
- 🎨 OpenAI branding with custom colors and fonts
- 🔍 Syntax highlighting for code blocks
- 📱 Responsive design
- ⚡ Fast page loads with Next.js
- 🎯 TypeScript support

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at `http://localhost:3000`.

### Building for Production

```bash
# Build the site
npm run build

# Start production server
npm start
```

## Project Structure

```
docs/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   └── */page.mdx         # MDX documentation pages
├── components/            # React components
│   ├── Navigation.tsx     # Site navigation
│   ├── Footer.tsx         # Site footer
│   ├── CodeBlock.tsx      # Syntax highlighted code blocks
│   └── ...               # Other components
├── content/              # MDX content files
├── public/               # Static assets
└── styles/              # Global styles
```

## Writing Documentation

### Creating Pages

Create MDX files in the `app` directory:

```mdx
# Page Title

Your content here...

## Code Examples

\`\`\`bash
codex "your prompt here"
\`\`\`
```

### Using Components

Import and use React components in MDX:

```mdx
import CustomComponent from '@/components/CustomComponent'

# My Page

<CustomComponent />
```

### Syntax Highlighting

Code blocks automatically get syntax highlighting:

````markdown
```typescript
interface Config {
  model: string;
  provider: string;
}
```
````

## Customization

### Colors

OpenAI brand colors are defined in `tailwind.config.js`:

- Primary Green: `#10a37f`
- Dark Gray: `#202123`
- Light Gray: `#f7f7f8`

### Fonts

Using OpenAI's font stack:
- Sans: Söhne, system-ui, -apple-system, Arial
- Mono: Söhne Mono, Monaco, Ubuntu Mono

## Deployment

The site can be deployed to any platform that supports Next.js:

### Vercel (Recommended)

```bash
npx vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci --only=production
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This documentation is part of the OpenAI Codex CLI project. 