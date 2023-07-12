import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'proton-gray-900': '#16141C',
				'proton-gray-800': '#34384E',
				'proton-gray-700': '#979BB0',
				'proton-white': '#FFFFFF',
				'proton-red-600': '#E53265',
				'proton-red-500': '#E84774'
			},
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				'2xs': '0.65rem',
				lg: '1.15rem'
			}
		}
	},
	plugins: []
};
