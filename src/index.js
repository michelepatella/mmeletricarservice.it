import React from "react";
import ReactDOM from "react-dom/client";
import * as SentryReact from "@sentry/react";
import App from "./App/App.js";

// Sentry initialization
SentryReact.init({
	dsn: process.env.REACT_APP_SENTRY_DSN,
	sendDefaultPii: false,
	integrations: [
		SentryReact.browserTracingIntegration(),
		SentryReact.consoleLoggingIntegration({
			levels: ["info", "warn", "error"],
		}),
	],
	tracesSampleRate: 1,
	tracePropagationTargets: [
		"localhost",
		"https://mmeletricarservice.it",
	],
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
