<div align="center">
<img width="250" height="250" alt="image" src="https://github.com/user-attachments/assets/3e088943-1f3d-45c6-b615-587636363109" />
  <h1>
    <a href="https://mmeletricarservice.it" target="_blank">
      mmeletricarservice.it
    </a>
  </h1>
  <h4>Built end-to-end by Michele Patella.</h4>
</div>

<br>

<h3>📚 Table of Content</h3>

- [👁️ Overview](#️-overview)
- [🛠️ Tech Stack](#️-tech-stack)
- [📌 Software Engineering Principles](#-software-engineering-principles)
- [🏗️ System Architecture](#%EF%B8%8F-system-architecture)
  - [🌐 Client-side](#-client-side)
  - [🔄 Data Fetching & Caching](#-data-fetching--caching)
  - [⚙️ Serverless Functions](#%EF%B8%8F-serverless-functions)
  - [☁️ Backend / BaaS](#%EF%B8%8F-backend--baas)
- [💻 From Development to Deployment 🚀](#-from-development-to-deployment-)
  - [🔐 Secrets & Variables](#-secrets--variables)
  - [🛠️ Development Environment & Version Control](#%EF%B8%8F-development-environment--version-control)
  - [✅ Code Quality](#-code-quality)
  - [🚀 Deployment & CI/CD](#-deployment--cicd)
- [🖥️ SEO, Analytics & Monitoring](#%EF%B8%8F-seo-analytics--monitoring)
- [📈 Metrics](#-metrics)
- [🌎 Impact on the Real World](#-impact-on-the-real-world)

<br>

<br>

## 👁️ Overview

📌 **What**  
A full-stack web application for MM Eletricar Service, deployed and live, serving an Italian car workshop and used car dealership.
<br>
<br>
❓ **Why**  
To enhance the company's digital presence and give customers clear, accessible information for confident decision-making.
<br>
<br>
👤 **Who**  
Designed for customers exploring company details, services, and used vehicles.
<br>
<br>
📅 **When**  
Launched in February 2025.
<br>
<br>
🌎 **Where**  
The web application is available at [mmeletricarservice.it](https://mmeletricarservice.it).

<br>

<br>

## 🛠️ Tech Stack

| Layer                       | Technology                                                |
| --------------------------- | --------------------------------------------------------- |
| **Frontend**                | React.js                                                  |
| **UI Library**              | Ant Design                                                |
| **Styling**                 | CSS, Custom Design Tokens                                 |
| **Animations**              | CSS, Framer Motion                                        |
| **Routing**                 | React Router (HashRouter)                                 |
| **State Management**        | React Hooks, Custom Hooks                                 |
| **Fetching & Caching**      | React Query                                               |
| **API Communication**       | Serverless API (Vercel Functions)                         |
| **Backend-as-a-Service**    | Supabase (PostgreSQL, Storage)                            |
| **Development Environment** | Node.js, npm, Vercel CLI                                  |
| **Version Control**         | Git, GitHub                                               |
| **Code Quality**            | ESLint, Prettier, SonarQube                               |
| **Testing**                 | Jest, React Testing Library                               |
| **Deployment & CI/CD**      | Vercel, GitHub Actions                                    |
| **Environment Variables**   | .env, Vercel Environment Variables, GitHub Action Secrets |
| **Monitoring**              | Vercel Logs, Supabase Logs, Error Logging                 |
| **Analytics**               | Vercel Analytics                                          |

<br>

<br>

## 📌 Software Engineering Principles

How this project follows software engineering best practices.

<details>
<summary><strong>Abstraction</strong></summary>

<br>

> - Business logic abstracted via hooks and functions
> - Reusable component library supports consistent UI patterns
> - Centralized configuration

</details>

<details>
<summary><strong>Change Readiness</strong></summary>

<br>

> - Environment variables and settings externalized for flexibility
> - CI/CD pipeline ensure safe, repeatable updates

</details>

<details>
<summary><strong>Maintainability</strong></summary>

<br>

> - Clean and consistent codebase
> - ESLint and Prettier for formatting
> - Well-documented code with meaningful names and docstrings
> - Centralized constants and links (`const.js` and `links.js`) for easier updates
> - Use of centralized CSS variables
> - Tests colocated with components for better traceability

</details>

<details>
<summary><strong>Modularity</strong></summary>

<br>

> - Components follow the Single Responsibility Principle
> - Clear separation between UI, business logic, and styling
> - Logic encapsulated via custom hooks and shared utility functions
> - Sections are structured as atomic, composable components

</details>

<details>
<summary><strong>Performance & Efficiency</strong></summary>

<br>

> - Lazy loading
> - Modern image format (AVIF)
> - Optimized for Lighthouse metrics
> - Session caching of used car data
> - React Query for efficient data fetching and caching

</details>

<details>
<summary><strong>Reliability & Robustness</strong></summary>

<br>

> - Error handling for API and UI (try-catch, logging, and Vercel monitoring)
> - Loading states and fallback UIs improve resilience
> - Automated tests with Jest and React Testing Library
> - Data integrity ensured via database constraints, foreign keys, and Row-Level Security policies

</details>

<details>
<summary><strong>Reusability</strong></summary>

<br>

> - Common components reused across multiple pages
> - DRY (Don't Repeat Yourself) principles followed across logic and styles

</details>
  
<details>
<summary><strong>Scalability</strong></summary>

<br>

> - Backend powered by Supabase (PostgreSQL), allowing seamless scaling
> - Indexes created to optimize data retrieval
> - Vercel's serverless functions scale automatically with demand, including a caching system
> - Fetching and caching handled with React Query
> - Scalable CI/CD pipeline

</details>

<details>
<summary><strong>Security & Compliance</strong></summary>

<br>

> - GDPR compliance: cookie consent, legal/privacy notes
> - Safe handling of third-party cookies
> - No sensitive data exposed client-side
> - Row-Level Security policies on Supabase

</details>

<details>
<summary><strong>Usability</strong></summary>

<br>

> - Clean, intuitive, and consistent UI aligned with branding
> - Accessibility best practices
> - Responsive navigation (anchor menu on desktop, drawer on mobile)
> - Fast feedback to user actions
> - Mobile-first design, tested on 20+ devices and viewports
> - Clear visual hierarchy to reduce cognitive load

</details>

<br>

<br>

## 🏗️ System Architecture

The system is built on a Jamstack architecture:

<img width="510" height="724" alt="image" src="https://github.com/user-attachments/assets/1b4d45ea-a60e-4c9a-8e45-011ec04bb873" />

---

<details>
<summary><strong>Data Flow</strong></summary>

<br>

> 1. _React Components_ on the _Client-side_ request data via the _Data Fetching & Caching_ layer
> 2. If the requested data is not cached on the client  
>    2.1. _Data Fetching & Caching_ layer sends requests to _Serverless Functions_  
>    2.2. If not cached at Vercel's edge, _Serverless Functions_ may fetch requested data from _Backend / BaaS_  
>    2.3. _Serverless Functions_ send back requested data to the _Data Fetching & Caching_ layer  
>    2.4. _Data Fetching & Caching_ layer caches received data on the client for `STALE_TIME` duration
> 3. Otherwise  
>    3.1. _Data Fetching & Caching_ layer retrieves requested data from the cache
> 4. _Data Fetching & Caching_ layer returns requested data to the _React Components_
> 5. _Client-side_ renders _React Components_ based on the data received

</details>

<br>

### 🌐 Client-side

🎯 **Role**  
It implements the frontend of the application as a Single-Page Application.

🛡️ **Responsibility**

- Rendering the UI (through _React Components_)
- Managing user interactions
- Fetching and caching data (via its internal _Data Fetching & Caching_ layer)

<br>

### 🔄 Data Fetching & Caching

🎯 **Role**  
It manages client-side data fetching and caching.

🛡️ **Responsibility**

- Fetching data using `useQuery`, custom logic and hooks
- Retrieving from cache first with `STALE_TIME` to minimize network requests
- Deduplicating queries to avoid simultaneous duplicate requests
- Logging errors when a fetch fails

<br>

### ⚙️ Serverless Functions

🎯 **Role**  
They implement API endpoints with modular, scalable, stateless backend logic.

🛡️ **Responsibility**

- Handling requests in a stateless manner
- Retrieving data from backend (used cars overview, specific car details)
- Centralizing backend access

---

**🔗 APIs**

<details>
<summary><strong>Used Cars Overview</strong></summary>
 
<br>
   
> - **Description**: Returns an array of available used cars with key specs and a presentation image.
> - **URL**: `/api/usedCarsOverview`
> - **Method**: `GET`
> - **Query Params**: `None`
> - **Response**: `JSON`
> 
> <br>
> 
> | Field     | Type    | Description                                              |
> | --------- | ------- | ---------------------------------------------------------|
> | `id`      | Integer | Unique identifier of the used car.                       |
> | `name`    | String  | Name or model of the used car.                           |
> | `price`   | Float   | Price in €.                                              |
> | `year`    | Integer | Year of registration or manufacturing.                   |
> | `mileage` | Integer | Kilometers driven.                                       |
> | `fuel`    | String  | Type of fuel.                                            |
> | `status`  | String  | Overall condition.                                       |
> | `image`   | String  | Public URL of the first (presentation) image of the car. |
> 
> <br>
> 
> Response example:
> 
> <pre>
>   {
>   "used_cars_overview": [
>     {
>       "id": 1,
>       "name": "Fiat Panda",
>       "price": 7199.99,
>       "year": 2015,
>       "mileage": 80000,
>       "fuel": "Diesel",
>       "status": "Excellent",
>       "image": "https://..."
>     },
>     ...
>   ]
> }
> </pre>

</details>

<details>
<summary><strong>Used Car Information</strong></summary>

<br>
  
> - **Description**: Returns full details and images of a specific used car.
> - **URL**: `/api/usedCarInfo`
> - **Method**: `GET`
> - **Query Params**: `id` (ID of the requested used car)
> - **Response**: `JSON`
> 
> <br>
> 
> | Field                 | Type             | Description                                   |
> | --------------------- | ---------------- | ----------------------------------------------|
> | `id`                  | Integer          | Unique identifier of the used car.            |
> | `power`               | Integer          | Engine power in CV (horsepower).              |
> | `engine_displacement` | Integer          | Engine displacement in cc (cubic centimeters).|
> | `cylinders`           | Integer          | Number of engine cylinders.                   |
> | `transmission`        | String           | Type of transmission.                         |
> | `consumption`         | String           | Fuel consumption in L/100km (min-max).        |
> | `emissions`           | String           | CO₂ emissions in g/km (min-max).              |
> | `emission_class`      | String           | Emission standard.                            |
> | `bodywork`            | String           | Body type.                                    |
> | `doors`               | Integer          | Number of doors.                              |
> | `external_color`      | String           | Exterior color of the car.                    |
> | `seats`               | Integer          | Number of seats.                              |
> | `internal_color`      | String           | Interior color scheme.                        |
> | `internal_material`   | String           | Interior material.                            |
> | `images`              | Array of Strings | List of public image URLs for this car.       |
> 
> <br>
> 
> Response example:
>
> <pre>
>   {
>   "used_car_info": {
>      "id": 1,
>      "power": 69,
>      "engine_displacement": 1200,
>      "cylinders": 4,
>      "transmission": "Manual (5)",
>      "consumption": "5,5-6,0",
>      "emissions": "127-137",
>      "emission_class": "Euro 6",
>      "bodywork": "City car",
>      "doors": 5,
>      "external_color": "Red",
>      "seats": 5,
>      "internal_color": "Black",
>      "internal_material": "Fabric",
>      "images": [
>        "https://...",
>        ...
>      ]
>    }
> }
> </pre>
</details>
  
<br>

### ☁️ Backend / BaaS

🎯 **Role**  
It provides the backend infrastructure of the application, leveraging Supabase as a Backend-as-a-Service (BaaS) platform, including a PostgreSQL database and Storage bucket.

🛡️ **Responsibility**

- **Data**
  - Stores relational data in PostgreSQL
  - Optimizes query performance with indexes on `id` fields
  - Enforces data integrity with foreign keys and constraints (`NOT NULL`, `CHECK`)
  - Uses enumerated types (ENUMs) for controlled values
  - Validates complex data formats through functions and triggers
- **Storage**
  - Stores and serves used car images
  - Organizes folders with deterministic naming
- **Security**
  - Enforces Row-Level Security to restrict access at row level
  - Defines access policies for reading and writing data

---

<details>
<summary><strong>Database Schema</strong></summary>

<br>

> <img width="560" height="605" alt="image" src="https://github.com/user-attachments/assets/c778d06e-e4ff-4bef-a964-33197f9c52b3" />

</details>
  
<br>

<br>

## 💻 From Development to Deployment 🚀

### 🔐 Secrets & Variables

Manage all sensitive configuration and environment settings of the application.

<strong>📝 Local .env file</strong>  
_Used in development and ignored by version control._

<strong>☁️ Vercel Environment Variables</strong>  
_Used for production deployments._

🔒 <strong>GitHub Actions Secrets and Variables</strong>  
_Used in CI/CD pipeline._

<br>
   
### 🛠️ Development Environment & Version Control

Ensure a consistent development setup and reliabe version tracking.

🌳 **Node.js**  
_Executes JavaScript code in development environment._

<details>
<summary><strong>📦 npm </strong>
  
_Manages dependencies, libraries, and scripts._
</summary>

> npm commands used in the project:
>
> - `npm install`  
>   <em>Install dependencies.</em>
>
> - `npm run start`  
>   <em>Starts the local development server (only frontend, no serverless functions).</em>
>
> - `npm run build`  
>   <em>Creates an optimized production build of the app.</em>
>
> - `npm run test`  
>   <em>Runs all tests.</em>
>
> - `npm run code:check`  
>   <em>Runs ESLint and Prettier to detect linting issues and code formatting violations.</em>
>
> - `npm run code:fix`  
>   <em>Automatically fixes linting issues and formats code with Prettier.</em>
>
> - `npm run audit`  
>   <em>Performs a security audit of the installed npm packages and reports vulnerabilities.</em>
>
> Others:
>
> - `npx vercel --prod --yes --token $VERCEL_TOKEN`  
>   <em>Deploys the app to Vercel in production.</em>

</details>

💻 **Vercel CLI**  
_Runs frontend and serverless functions locally via_ `vercel dev`<em>, simulating production.</em><br><br>

🔧 **Git & GitHub**  
<em>Manages code, workflows, and automated checks.</em>

- `main` for production, separate branches for major changes
- Conventional commit standard for commit messages
- Stable deployment points marked by Git tags
- GitHub Actions runs CI/CD
- GitHub Actions secrets and variables for CI/CD
- GitHub Insights for activities and CI/CD metrics

<br>

### ✅ Code Quality

Keep code clean, safe, and maintainable throughout development.

⚖️ **ESLint**  
_Enforces JavaScript coding standards._

🧹 **Prettier**  
_Formats code automatically for consistency._

🔒 **npm audit**  
_Checks for security vulnerabilities in project dependencies._

<details>
<summary>
<strong>📊 SonarQube</strong>
  
<em>Monitors code quality and highlights issues and risks on</em> `main`<em> pushes.</em>
</summary>

> **SonarQube Quality Gate** conditions on new code:
>
> - No new bugs are introduced (Reliability rating is A)
> - No new vulnerabilities are introduced (Security rating is A)
> - Limited technical debt (Maintainability rating is A)
> - All new security hotspots are reviewed (Security Hotspots Reviewed is 100%)
> - Sufficient test coverage (greater than or equal to 80.0%)
> - Limited duplications (% of duplicated lines is less than or equal to 3.0%)

</details>

---

<details>
<summary><strong>Code Quality Flow (on <code>main</code>)</strong></summary>

<br>

> 1. Run `npm run code:fix` locally to fix linting and formatting issues
> 2. Push changes to `main`
> 3. CI runs on `main` pushes or pull requests:
>    - `npm run code:check` to detect ESLint and Prettier issues
>    - `npm run audit` to detect high and critical vulnerabilites
>    - SonarQube analysis to verify the Quality Gate

</details>

<br>

### 🚀 Deployment & CI/CD

Manage automated delivery of the application from code to production while ensuring reliability and traceability.

**⚡ Vercel**  
_Deploys frontend and serverless functions._

- Domain management
- Preview deployments for all branches and pull requests
- Versioned deployments with easy rollback to previous stable releases
- Management of environment variables
- Automatic caching of static content and serverless responses at the edge
- Automatic scaling with traffic demand
- Security features including firewall
- Logs monitoring
- Integrated analytics

<br>

<details>
<summary>
<strong>🧪 Continuous Integration (CI)</strong>
  
<em>Runs on every push, and pull request to</em> `main`<em>.</em>
</summary>

> 1. Checkout repository  
>    <em>Retrieves the source code and prepares it for analysis.</em>
> 2. Setup Node.js  
>    <em>Ensure the pipeline runs in the same Node.js environment as local development and production.</em>
> 3. Install dependencies  
>    <em>Install all required packages.</em>
> 4. Run Lint and Prettier  
>    <em>Check coding standards and formatting consistency.</em>
> 5. Build project  
>    <em>Create an optimized build for the application.</em>
> 6. Run tests  
>    <em>Execute all test suites.</em>
> 7. Run npm audit  
>    <em>Detect high or critical security vulnerabilities in dependencies.</em>
> 8. Run SonarQube analysis  
>    <em>Perform code quality analysis, checking the Quality Gate.</em>

</details>

<details>
<summary>
<strong>🚀 Continuous Deployment (CD)</strong>
  
<em>Triggered after successful CI.</em>
</summary>
  
> 1. Checkout repository  
>    <em>Retrieves the source code.</em>
>
> 2. Setup Node.js   
>    <em>Ensure the pipeline runs in the same Node.js environment as local development and production.</em>
>
> 3. Install dependencies  
>    <em>Install all required packages.</em>
>
> 4. Build project   
>    <em>Create an optimized build for the application.</em>
>
> 5. Deploy to Vercel  
>    <em>Deploy the application to Vercel.</em>
</details>

<br>

<br>

## 🖥️ SEO, Analytics & Monitoring

🔍 <strong>Search engine optimization</strong>  
<em>To improve discoverability and ranking.</em>

- Clean, human-readable URLs
- Keyword-optimized content
- HTTPS for secure connections
- Embedded Google Maps for local SEO targeting
- Favicon and consistent branding

<br>

📈 <strong>Analytics</strong>  
<em>To monitor user engagement and performance.</em>

- Actionable insights
- Privacy-friendly, cookie-free solution

---

<details>
<summary><strong>Analytics Metrics</strong></summary>

<br>

> - Visitors (total number of application's visitors)
> - Page views (total number of pages viewed)
> - Bounce rate (% of visitors who leave after viewing only one page)
> - Pages (specific pages viewed)
> - Routes (specific referrers viewed)
> - Referrers (sources that referred users to the application)
> - Countries (geographic locations of the visitors)
> - Devices (types of devices used to access the application)
> - Browsers (web browsers used by the visitors)
> - Operating systems (operating system of the devices accessing the application)

</details>

<br>

📊 <strong>Monitoring</strong>  
<em>To track system operations and backend activities.</em>

- Serverless functions monitoring through:
  - Vercel Logs
  - Automatic logging of errors and failed requests for faster debugging
- Backend / BaaS monitoring through Supabase Logs, including:
  - API Gateway Logs
  - Postgres Logs
  - Storage Logs

<br>

<strong>All while preserving user privacy.</strong>

---

<details>
<summary><strong>Vercel Logs Details</strong></summary>

<br>

> - Time (timestamp of the request)
> - Environment (deployment environment)
> - Branch (git branch of the deployment)
> - Project ID (Vercel project identifier)
> - Function (name of the serverless function invoked)
> - Type (log type)
> - Level (log level)
> - Status (HTTP response code)
> - Request method (HTTP method)
> - Path (request path)
> - Query parameters (request query string)
> - Request ID (unique request identifier)
> - Host (server host handling the request)
> - User agent (client user agent)
> - Vercel cache (cache status)
> - Region (execution region)
> - Duration (execution time of the function in ms)
> - Max memory used (peak memory consumption in MB)
> - Memory size (memory allocated to the function in MB)
> - Deployment domain (deployment domain)
> - Deployment ID (deployment identifier)
> - Message (log or function messages, if any)
> - Advanced tracking (trace ID, session ID, invocation ID, and instance ID)
> - Concurrency (number of concurrent function instances)

</details>

<details>
<summary><strong>Supabase Logs Details</strong></summary>

<br>

<details>
<summary>API Gateway Logs Details</summary>

<br>

> - Log ID (unique identifier of the log event)
> - Time (timestamp of the request)
> - Request method (HTTP method)
> - Status (HTTP response code)
> - Path (request path)
> - User agent (client user agent)
> - Event message (raw log message)
> - Metadata (key information including client IP, geolocation, cache status, TLS/security info, load balancer/gateway details)

</details>

<details>
<summary>Postgres Logs Details</summary>

<br>

> - Log ID (unique identifier of the log event)
> - Time (timestamp of the request)
> - Event message (raw log message)
> - Metadata (key information including backend type, command type, database name, user name, process ID, session ID, session start time, client connection, SQL state code, and virtual transaction ID)

</details>

<details>
<summary>Storage Logs Details</summary>

<br>

> - Log ID (unique identifier of the log event)
> - Time (timestamp of the request)
> - Event message (raw log message)
> - Metadata (key information including request method, path, client IP, trace ID, project/tenant, region, response status, response headers, server info, log level, and response time)

</details>
</details>

<br>

<br>

## 📈 Metrics

<br>

**📊 Lighthouse Metrics**:

| Metrics          | Score      |
| ---------------- | ---------- |
| _Performance_    | **100** 🟢 |
| _Accessibility_  | **100** 🟢 |
| _Best Practices_ | **100** 🟢 |
| _SEO_            | **100** 🟢 |

---

<details>
<summary><strong>Performance Metrics</strong></summary>

<br>

> **First Contentful Paint**  
> 0.9 s
> <br>  
> **Largest Contentful Paint**  
> 2.9 s
> <br>  
> **Total Blocking Time**  
> 50 ms
> <br>  
> **Cumulative Layout Shift**  
> 0
> <br>  
> **Speed Index**  
> 2.2 s

</details>

<br>

<details>
<summary>
<strong>⚙️ Serverless Functions Metrics</strong> 
<br>
<em>Metrics by Vercel Observability.</em>
</summary>

<br>

> **Execution Duration**  
> 269 ms
> <br>  
> **Error Rate**  
> 0%
> <br>  
> **Timeout**  
> 0%
> <br>  
> **Memory Usage**  
> 118 MB
> <br>  
> **Time to First Byte**  
> 730 ms
> <br>  
> **Start Type**  
> _Hot_: 97.2%  
> _Cold_: 2.4%  
> _Prewarmed_: 0–4%

</details>

<details>
<summary>
<strong>☁️ BaaS Metrics</strong> 
<br>
<em>Metrics by Supabase Reports.</em>
</summary>

<br>

> **API Gateway Response Speed**  
> 269 ms
> <br>  
> **Storage Response Speed**  
> 269 ms

</details>

<details>
<summary>
<strong>🚀 Deployment & CI/CD Metrics</strong> 
<br>
<em>Metrics by GitHub Insights.</em>
</summary>

<br>

> **Deployment Success Rate**  
> 99%
> <br>  
> **CI Duration**  
> 49s
> <br>  
> **CD Duration**  
> 2m 22s
> <br>  
> **Job Queue Time**  
> 3s

</details>

<details>
<summary>
<strong>🛠️ Code Metrics</strong> 
<br>
<em>Metrics by SonarQube Cloud.</em>
</summary>

<br>

> **Security Issues**  
> 0
> <br>  
> **Relieability Issues**  
> 0
> <br>  
> **Maintainability Issues**  
> 0
> <br>  
> **Security Hotspots**  
> 0
>
> <br>
>
> <br>
>  
> **Density**  
> 0%
> <br>  
> **Duplicated Lines**  
> 0
> <br>  
> **Duplicated Blocks**  
> 0
> <br>  
> **Duplicated Files**  
> 0
>
> <br>
>
> <br>
>
> **Lines of Code**  
> 4,845
> <br>  
> **Statements**  
> 822
> <br>  
> **Functions**  
> 301
> <br>  
> **Comments**  
> 19.3%
>
> <br>
>
> <br>  
>  
> **Cyclomatic Complexity**   
> 3.26  
> <br>
> **Cognitive Complexity**  
> 1.86  
> <br>

</details>

<br>

<br>

## 🌎 Impact on the Real World

The platform shows how smart design and technology can boost customer experience and business impact.

💻 **Operational Efficiency**

> **Up to 20% of users exposed to the most relevant queries clicked through to access website, reducing support requests.**

🏙️ **Local Business Impact**

> **The website appears in 400+ searches over the last month, with an average position of #1 for relevant search queries, increasing the visibility of the business in its local area.**

💡 **Informed Decisions**

> **More than 30% of users who visited the website clicked through to see detailed information about used cars, supporting informed purchasing decisions.**

📊 **Data Insights**

> **Insights from 200+ interactions on used car pages monthly help the business to understand customer preferences and guide strategy.**

<br>

<br>

Last update: _June 24, 2025_
