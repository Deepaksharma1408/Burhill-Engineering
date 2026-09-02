/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1F2E4F',
          dark: '#121C33',
          deep: '#0D1424',
          light: '#2A3C63',
          border: '#2C3E66',
        },
        gold: {
          DEFAULT: '#B58A43',
          light: '#D4AF37',
          muted: '#8F6B2E',
          glow: 'rgba(181, 138, 67, 0.15)',
        },
        charcoal: {
          DEFAULT: '#2B303A',
          dark: '#1A1D24',
          light: '#3F4654',
        },
        slate: {
          bg: '#F4F6F9',
          border: '#E2E7F0',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cinzel)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid': "radial-gradient(circle, rgba(181, 138, 67, 0.1) 1px, transparent 1px)",
        'cad-lines': "linear-gradient(to right, rgba(31, 46, 79, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(31, 46, 79, 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
