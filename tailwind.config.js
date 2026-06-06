/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050711',
        panel: '#0b1020',
        cyanline: '#36f3ff',
        electric: '#2b7fff',
        violetcore: '#8b5cf6',
        matrixlite: '#32f5a3',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 36px rgba(54, 243, 255, 0.16)',
        'glow-violet': '0 0 36px rgba(139, 92, 246, 0.18)',
      },
      animation: {
        'grid-drift': 'grid-drift 24s linear infinite',
        'pulse-slow': 'pulse-slow 7s ease-in-out infinite',
        'scan-line': 'scan-line 5s ease-in-out infinite',
      },
      keyframes: {
        'grid-drift': {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-48px, -48px, 0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.56', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.04)' },
        },
        'scan-line': {
          '0%, 100%': { transform: 'translateY(-20%)', opacity: '0' },
          '45%, 55%': { opacity: '0.45' },
          '100%': { transform: 'translateY(120%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
