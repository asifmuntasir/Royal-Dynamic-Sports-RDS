/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
// import KeepReact from 'keep-react/preset';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        // Keep React color palette
        metal: {
          25: '#FAFAFA',
          50: '#F4F4F5',
          100: '#E4E4E7',
          200: '#D4D4D8',
          300: '#A1A1AA',
          400: '#71717A',
          500: '#52525B',
          600: '#3F3F46',
          700: '#27272A',
          800: '#18181B',
          900: '#09090B',
        },
        primary: {
          25: '#F5F8FF',
          50: '#EFF4FF',
          100: '#D1E0FF',
          200: '#B2CCFF',
          300: '#84ADFF',
          400: '#528BFF',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E3A8A',
          800: '#1E40AF',
          900: '#1A365D',
        },
        success: {
          25: '#F6FEF9',
          50: '#ECFDF3',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        error: {
          25: '#FFFBFA',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        warning: {
          25: '#FFFCF5',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
    },
  },
  plugins: [daisyui],
}