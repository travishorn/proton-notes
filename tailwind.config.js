/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'proton-dark': '#16141C',
				'proton-light': '#FFFFFF',
				'proton-mid': '#34384E',
				'proton-accent': '#E53265'
			},
			fontSize: {
				lg: '1.15rem'
			}
		}
	},
	plugins: []
};
