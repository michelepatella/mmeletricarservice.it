import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import App from "./App/App";

// Sentry initialization
Sentry.init({
	dsn: process.env.SENTRY_DSN,
	sendDefaultPii: true,
	integrations: [
		Sentry.browserTracingIntegration(),
		Sentry.replayIntegration(),
		Sentry.consoleLoggingIntegration({
			levels: ["log", "warn", "error"],
		}),
	],
	tracesSampleRate: 1,
	tracePropagationTargets: [
		"localhost",
		/^https:\/\/mmeletricarservice\.it\/api/,
	],
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1,
	enableLogs: true,
});

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
