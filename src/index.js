import React from "react";
import ReactDOM from "react-dom/client";
import * as SentryReact from "@sentry/react";
import App from "./App/App.js";

// Sentry initialization
SentryReact.init({
	dsn: process.env.SENTRY_DSN,
	sendDefaultPii: true,
	integrations: [
		SentryReact.browserTracingIntegration(),
		SentryReact.replayIntegration(),
		SentryReact.consoleLoggingIntegration({
			levels: ["info", "warn", "error"],
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

export { SentryReact };

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
