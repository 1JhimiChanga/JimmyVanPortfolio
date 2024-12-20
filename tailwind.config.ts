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
				roboto: ['Roboto', 'monospace'] // Add 'Roboto' with monospace fallback
			}
		}
	},

	plugins: [],
	darkMode: 'class'
} satisfies Config;
