/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#ffd700',
          dark: '#121212',
          charcoal: '#181818',
        },
        neutral: {
          50: '#f6f6f6',
          100: '#d8d8d8',
          200: '#c5cbd6',
          800: '#2a2a2a',
          900: '#121212',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        heading: ['Questrial', 'sans-serif'],
        body: ['Fira Mono', 'monospace'],
        sans: ['Lato', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.75rem', { lineHeight: '1', letterSpacing: '0.02em' }],
        'block-title': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'heading-lg': ['2.25rem', { lineHeight: '1.2' }],
        'heading': ['1.5rem', { lineHeight: '1.3' }],
        'subheading': ['1.3125rem', { lineHeight: '1.4' }],
        'body': ['1.0625rem', { lineHeight: '1.6' }],
        'small': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
      spacing: {
        'section': '6rem',
        'section-lg': '8rem',
        'gap': '3.75rem',
      },
      maxWidth: {
        'container': '75rem',
      },
      borderRadius: {
        'none': '0',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(33, 39, 54, 0.1)',
        'card': '0 4px 16px rgba(33, 39, 54, 0.16)',
      },
    },
  },
  plugins: [],
};
