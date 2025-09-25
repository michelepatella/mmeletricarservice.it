import React from "react";
import ReactDOM from "react-dom/client";
import * as SentryReact from "@sentry/react";
import App from "./App/App.js";

// Sentry initialization
SentryReact.init({
	dsn: process.env.REACT_APP_SENTRY_DSN,
	sendDefaultPii: false,
	integrations: [
		SentryReact.consoleLoggingIntegration({
			levels: ["info", "warn", "error"],
		}),
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
