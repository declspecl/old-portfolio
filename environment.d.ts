declare global {
	namespace NodeJS {
		interface ProcessEnv {
			RESEND_API_KEY: string,
			API_AUTH_USERNAME: string,
			API_AUTH_PASSWORD: string,
			TO_EMAILS: string
		}
	}
}

export {}
