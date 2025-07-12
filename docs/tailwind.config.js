/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: ['class', 'class'],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			openai: {
  				green: '#10a37f',
  				'green-dark': '#0e8c6f',
  				'green-light': '#1aba89',
  				black: '#202123',
  				gray: {
  					'50': '#f9fafb',
  					'100': '#f3f4f6',
  					'200': '#e5e7eb',
  					'300': '#d1d5db',
  					'400': '#9ca3af',
  					'500': '#6b7280',
  					'600': '#4b5563',
  					'700': '#374151',
  					'800': '#1f2937',
  					'900': '#111827',
  					'950': '#030712'
  				}
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'Roboto',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'Fira Code',
  				'Monaco',
  				'Consolas',
  				'monospace'
  			]
  		},
  		fontSize: {
  			xs: [
  				'0.75rem',
  				{
  					lineHeight: '1rem'
  				}
  			],
  			sm: [
  				'0.875rem',
  				{
  					lineHeight: '1.25rem'
  				}
  			],
  			base: [
  				'1rem',
  				{
  					lineHeight: '1.5rem'
  				}
  			],
  			lg: [
  				'1.125rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			xl: [
  				'1.25rem',
  				{
  					lineHeight: '1.75rem'
  				}
  			],
  			'2xl': [
  				'1.5rem',
  				{
  					lineHeight: '2rem'
  				}
  			],
  			'3xl': [
  				'1.875rem',
  				{
  					lineHeight: '2.25rem'
  				}
  			],
  			'4xl': [
  				'2.25rem',
  				{
  					lineHeight: '2.5rem'
  				}
  			],
  			'5xl': [
  				'3rem',
  				{
  					lineHeight: '1'
  				}
  			],
  			'6xl': [
  				'3.75rem',
  				{
  					lineHeight: '1'
  				}
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'slide-in': {
  				'0%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.5s ease-out',
  			'slide-in': 'slide-in 0.3s ease-out'
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					maxWidth: 'none',
  					color: 'hsl(var(--foreground))',
  					'--tw-prose-body': 'hsl(var(--foreground))',
  					'--tw-prose-headings': 'hsl(var(--foreground))',
  					'--tw-prose-lead': 'hsl(var(--muted-foreground))',
  					'--tw-prose-links': 'hsl(var(--primary))',
  					'--tw-prose-bold': 'hsl(var(--foreground))',
  					'--tw-prose-counters': 'hsl(var(--muted-foreground))',
  					'--tw-prose-bullets': 'hsl(var(--muted-foreground))',
  					'--tw-prose-hr': 'hsl(var(--border))',
  					'--tw-prose-quotes': 'hsl(var(--foreground))',
  					'--tw-prose-quote-borders': 'hsl(var(--border))',
  					'--tw-prose-captions': 'hsl(var(--muted-foreground))',
  					'--tw-prose-code': 'hsl(var(--foreground))',
  					'--tw-prose-pre-code': 'hsl(var(--muted-foreground))',
  					'--tw-prose-pre-bg': 'hsl(var(--muted))',
  					'--tw-prose-th-borders': 'hsl(var(--border))',
  					'--tw-prose-td-borders': 'hsl(var(--border))'
  				}
  			}
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/typography'),
      require("tailwindcss-animate")
],
}; 