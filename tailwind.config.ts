import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			animation: {
				openmenu: 'openmenu 0.3s ease-in',
				closemenu: 'closemenu 0.3s ease-in',
			},
			keyframes: {
				openmenu: {
					// initial position
					'0%': { left: '-50%' },
					//final position
					'100%': { left: '0px' },
				},
				closemenu: {
					// initial position
					'0%': { left: '0px' },
					//final position
					'100%': { left: '-50%' },
				},
			},
		},
	},
	plugins: [],
};
export default config;
