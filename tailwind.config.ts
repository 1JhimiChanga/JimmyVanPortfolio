import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'vscode-blue': 'rgb(3, 172, 240)',
				'vscode-yellow': '#ead84e',
				'vscode-string-brown': '#976037',
				'custom-white-theme': '#f9fafb'
			},
			fontFamily: {
				roboto: ['Roboto', 'monospace'],
				nunito: ['Nunito', 'sans']
			},
			dropShadow: {
				glow: [
					'0 0px 2px rgb(216 180 254 / var(--tw-bg-opacity, 0.1)) ',
					'0 0px 2px rgb(216 180 254 / var(--tw-bg-opacity, 0.1)) '
				]
			},
			screens: {
				xs: '0px'
			}
		}
	},

	plugins: [],
	darkMode: 'class'
} satisfies Config;
