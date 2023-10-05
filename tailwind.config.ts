import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./sc/**/*.{ts,tsx}",
	],
	theme: {
		colors: {
			"text": {
			  50: "hsl(0, 0%, 95%)",
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
			  900: "hsl(240, 10%, 10%)",
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
			  300: "hsl(53, 59%, 70%)",
			  400: "hsl(53, 59%, 60%)",
			  500: "hsl(53, 59%, 50%)",
			  600: "hsl(53, 59%, 40%)",
			  700: "hsl(53, 59%, 30%)",
			  800: "hsl(53, 59%, 20%)",
			  900: "hsl(52, 61%, 10%)",
			  950: "hsl(56, 60%, 5%)"
			},

			"accent": {
			  50: "hsl(265, 46%, 95%)",
			  100: "hsl(261, 45%, 90%)",
			  200: "hsl(262, 45%, 80%)",
			  300: "hsl(262, 46%, 70%)",
			  400: "hsl(262, 46%, 60%)",
			  500: "hsl(262, 46%, 50%)",
			  600: "hsl(262, 46%, 40%)",
			  700: "hsl(262, 46%, 30%)",
			  800: "hsl(262, 45%, 20%)",
			  900: "hsl(261, 45%, 10%)",
			  950: "hsl(260, 46%, 5%)"
			}
		}
	},
	plugins: [],
};

export default config
