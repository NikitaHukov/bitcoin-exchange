import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        ...defaultTheme.spacing,
      },
    },
    screens: {
      'md': '768px',
      'lg': '1024px',
    },
  },
  plugins: [],
}
export default config
