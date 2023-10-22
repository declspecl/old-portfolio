import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/**/*.{ts,tsx}"
	],
	theme: {
		colors: {
			"text": {
				50: "hsl(0, 0%, 100%)", // default
				100: "hsl(0, 0%, 90%)",
				200: "hsl(0, 0%, 80%)",
				300: "hsl(0, 0%, 70%)",
				400: "hsl(0, 0%, 60%)",
				500: "hsl(0, 0%, 50%)",
				600: "hsl(0, 0%, 40%)",
				700: "hsl(0, 0%, 30%)",
				800: "hsl(0, 0%, 20%)",
				900: "hsl(0, 0%, 10%)",
				950: "hsl(0, 0%, 5%)"
			},

			"background": {
				50: "hsl(240, 12%, 95%)",
				100: "hsl(240, 10%, 90%)",
				200: "hsl(240, 10%, 80%)",
				300: "hsl(240, 10%, 70%)",
				400: "hsl(240, 10%, 60%)",
				500: "hsl(240, 10%, 50%)",
				600: "hsl(240, 10%, 40%)",
				700: "hsl(240, 10%, 30%)",
				800: "hsl(240, 10%, 20%)",
				900: "hsl(240, 10%, 10%)", // default
				950: "hsl(240, 12%, 5%)"
			},

			"primary": {
				50: "hsl(210, 85%, 95%)",
				100: "hsl(212, 88%, 90%)",
				200: "hsl(212, 88%, 80%)",
				300: "hsl(212, 88%, 70%)",
				400: "hsl(212, 88%, 60%)",
				500: "hsl(212, 88%, 50%)",
				600: "hsl(212, 88%, 40%)",
				700: "hsl(212, 88%, 30%)",
				800: "hsl(212, 88%, 20%)",
				900: "hsl(212, 88%, 10%)",
				950: "hsl(213, 85%, 5%)"
			},

			"secondary": {
				50: "hsl(52, 60%, 95%)",
				100: "hsl(52, 61%, 90%)",
				200: "hsl(53, 59%, 80%)",
				300: "hsl(53, 59%, 70%)", // default
				400: "hsl(53, 59%, 60%)",
				500: "hsl(53, 59%, 50%)",
				600: "hsl(53, 59%, 40%)",
				700: "hsl(53, 59%, 30%)",
				800: "hsl(53, 59%, 20%)",
				900: "hsl(52, 61%, 10%)",
				950: "hsl(56, 60%, 5%)"
			},

			"accent": {
				50: "hsl(262, 44%, 95%)",
				100: "hsl(263, 41%, 90%)",
				200: "hsl(261, 41%, 80%)",
				300: "hsl(262, 42%, 70%)",
				400: "hsl(262, 42%, 60%)",
				500: "hsl(262, 42%, 50%)",
				600: "hsl(262, 42%, 40%)", // default
				700: "hsl(262, 42%, 30%)",
				800: "hsl(261, 41%, 20%)",
				900: "hsl(263, 41%, 10%)",
				950: "hsl(262, 44%, 5%)"
			}
		},
		extend: {
			backgroundImage: {
				"starfield": "url(\"/starfield.svg\")"
			},
			screens: {
				"xs": "320px"
			},
			data: {
				"state-open": "state~=open"
			},
			keyframes: {
				blink: {
					"0%": { opacity: "1" },
					"49.99%": { opacity: "1" },
					"50%": { opacity: "0" },
					"99.99%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
                elongate: {
                    "0%": { height: "0%" },
                    "100%": { height: "100%" },
                },
                shrink: {
                    "0%": { height: "100%" },
                    "100%": { height: "0%" },
                }
			},
			animation: {
				blink: "blink 1.35s infinite",
                elongate: "elongate 0.250ms forwards",
                shrink: "shrink 0.250ms forwards"
			},
			dropShadow: {
				"hero": "0 100px 200px rgba(255, 255, 255, 0.45)"
			}
		}
	},
	plugins: []
};

export default config;
