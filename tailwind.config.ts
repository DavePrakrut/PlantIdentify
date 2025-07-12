import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'plant-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          900: '#14532d'
        }
      },
      animation: {
        'gentle-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  },
  plugins: []
}

export default config;
