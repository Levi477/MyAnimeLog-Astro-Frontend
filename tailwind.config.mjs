/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				headingColor: 'rgb(255, 153, 0)',
			  },
		},
	},
	plugins: [],
}
