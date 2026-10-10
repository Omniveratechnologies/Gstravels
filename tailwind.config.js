/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#0a0b0f',
          soft: '#111319',
          surface: '#151822',
          raised: '#1b1f2c',
        },
        line: '#242938',
        amber: {
          DEFAULT: '#ffb627',
          soft: '#ffcf70',
          dim: '#b8842a',
        },
        cyan: {
          DEFAULT: '#35e8d0',
          soft: '#8ff5e6',
          dim: '#1f8f81',
        },
        ink: {
          DEFAULT: '#f4f5f7',
          muted: '#9aa2b4',
          faint: '#5b6478',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent, #0a0b0f 85%), repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 64px)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(255,182,39,0.35)',
        'glow-cyan': '0 0 40px -8px rgba(53,232,208,0.35)',
      },
    },
  },
  plugins: [],
}
