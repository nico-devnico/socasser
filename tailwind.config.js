/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#00E5FF", // Plus saturé et brillant
          light: "#5CF2FF",
          dark: "#00B8CC",
        },
        luxury: {
          gold: "#FFD700",
          silver: "#E2E8F0",
          white: "#FFFFFF",
          offwhite: "#F8FAFC",
          dim: "#CBD5E1", // Plus clair que le précédent (était 94A3B8)
          glass: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.15)", // Bordures plus marquées
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Satoshi", "SF Pro Display", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'luxury-gradient': 'radial-gradient(circle at center, rgba(0, 194, 255, 0.15) 0%, transparent 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
