/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050A07',
          dark: '#0A120D',
          cardDark: '#0D1912',
          light: '#FFFFFF',
          subtle: '#F8FAFC',
          charcoal: '#0F172A',
          muted: '#475569',
          border: '#E2E8F0',
          darkBorder: 'rgba(16, 185, 129, 0.15)',
          // Emerald & Green Suite
          emerald: {
            DEFAULT: '#10B981',
            light: '#34D399',
            dark: '#047857',
            hover: '#059669',
            neon: '#22C55E',
            mint: '#6EE7B7',
            glow: 'rgba(16, 185, 129, 0.45)',
          },
          green: {
            DEFAULT: '#22C55E',
            light: '#4ADE80',
            dark: '#15803D',
            hover: '#16A34A',
            glow: 'rgba(34, 197, 94, 0.45)',
          },
          // Backward compatibility mappings
          purple: {
            DEFAULT: '#10B981',
            dark: '#047857',
            light: '#34D399',
            hover: '#059669',
            glow: 'rgba(16, 185, 129, 0.45)',
          },
          yellow: {
            DEFAULT: '#22C55E',
            light: '#4ADE80',
            dark: '#15803D',
            hover: '#16A34A',
            glow: 'rgba(34, 197, 94, 0.45)',
          },
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-hero': ['clamp(3rem, 7vw + 1rem, 6.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-2': ['clamp(2.25rem, 4.5vw + 0.5rem, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        'emerald-glow': '0 0 35px -5px rgba(16, 185, 129, 0.55)',
        'emerald-subtle': '0 0 20px -2px rgba(16, 185, 129, 0.35)',
        'green-glow': '0 0 35px -5px rgba(34, 197, 94, 0.55)',
        'purple-glow': '0 0 35px -5px rgba(16, 185, 129, 0.45)',
        'yellow-glow': '0 0 35px -5px rgba(34, 197, 94, 0.55)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 0 25px rgba(16, 185, 129, 0.2)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.8' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
      }
    },
  },
  plugins: [],
}
