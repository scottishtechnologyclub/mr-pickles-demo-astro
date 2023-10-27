/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'mrpickles-bg': '#10B981',
        'mrpickles-primary': '#D1FAE5',
        'mrpickles-secondary': '#34D399',
        'mrpickles-accent': '#FBBF24',
        'mrpickles-text': '#FFFFFF',
        'mrpickles-muted': '#4B5563',
        'mrpickles-gradient-1': '#fefce8',
        'mrpickles-gradient-2': '#facc15',
        'mrpickles-gradient-3': '#FCD34D',
        'mrpickles-highlight': '#fef08a'
      },
      typography: ({ theme }) => ({
        mrpickles: {
          css: {
            '--tw-prose-body': theme('colors.mrpickles-text'),
            '--tw-prose-links': theme('colors.mrpickles-accent'),
            '--tw-prose-headings': theme('colors.mrpickles-accent'),
          },
        },
      }),
			animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
