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

### 📚 Table of Content

- [👁️ Overview](#️-overview)
- [🛠️ Tech Stack](#️-tech-stack)
- [📌 Software Engineering Principles](#-software-engineering-principles)
- [🏗️ System Architecture](#%EF%B8%8F-system-architecture)
  - [🌐 Client-side](#-client-side)
  - [🔄 Data Fetching & Caching](#-data-fetching--caching)
  - [⚙️ Serverless Functions](#%EF%B8%8F-serverless-functions)
  - [☁️ Backend / BaaS](#%EF%B8%8F-backend--baas)
- [📦 Deployment & CI/CD](#-deployment--cicd)
- [🔐 Environment Variables](#-environment-variables)
- [🖥️ SEO, Analytics & Monitoring](#%EF%B8%8F-seo-analytics--monitoring)
- [📈 Metrics](#-metrics)
- [🌎 Impact on the Real World](#-impact-on-the-real-world)

<br>

## 👁️ Overview

📌 **What**  
A production-ready, full-stack web application developed for MM Eletricar Service, an Italian car workshop and used car dealership.
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
The web application is available at https://mmeletricarservice.it

<br>

## 🛠️ Tech Stack

| Layer                             | Technology                                                |
| --------------------------------- | --------------------------------------------------------- |
| **Frontend**                      | React.js                                                  |
| **UI Library**                    | Ant Design                                                |
| **Styling**                       | CSS, Custom Design Tokens                                 |
| **Animations**                    | CSS, Framer Motion                                        |
| **Routing**                       | React Router (HashRouter)                                 |
| **State Management**              | React Hooks, Custom Hooks                                 |
| **Fetching & Caching**            | React Query                                               |
| **API Communication**             | Serverless API (Vercel Functions)                         |
| **Backend-as-a-Service**          | Supabase (PostgreSQL, Storage)                            |
| **Environment Variables**         | .env, Vercel Environment Variables, GitHub Action Secrets |
| **Testing**                       | Jest, React Testing Library                               |
| **Deployment & CI/CD**            | Vercel, GitHub Actions                                    |
| **Development & Version Control** | Node.js, npm, Git, GitHub                                 |
| **Code Quality**                  | ESLint, Prettier, SonarQube                               |
| **Monitoring**                    | Vercel Logs, Supabase Logs, Error Logging                 |
| **Analytics**                     | Vercel Analytics                                          |

<br>

## 📌 Software Engineering Principles

This project follows the best practices of software engineering:

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

## 🏗️ System Architecture

The system is built on a **Jamstack architecture** shown below:

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
It represents the UI of the application, developed as a Single-Page Application.  
It represents the frontend of the system: everything the user sees and interacts with.

🛡️ **Responsibility**  
It is responsible for:

- UI rendering (through _React Components_)
- User interactions management
- Data fetching and caching (via its internal _Data Fetching & Caching_ layer)

<br>

### 🔄 Data Fetching & Caching

🎯 **Role**  
It serves as the dedicated layer to manage all data fetching and caching in the client-side application.  
It ensures efficient, reliable, and up-to-date data delivery.

🛡️ **Responsibility**  
It is responsible for:

- Data fetching using `useQuery`, custom logic and hooks
- Cache-first retrieval using `STALE_TIME` to minimize unnecessary network requests
- Query deduplication to prevent simultaneous duplicate requests and reduce server load
- Error logging when a fetch fails

<br>

### ⚙️ Serverless Functions

🎯 **Role**  
They implement the API endpoints of the application.  
They provide modular, scalable, and stateless backend logic with minimal overhead.

🛡️ **Responsibility**  
They are responsible for:

- Handling requests in a stateless manner
- Retrieving data from backend including:
  - Used cars overview information
  - Detailed information for a specific used car
- Centralizing access to backend

---

**🔗 APIs**

<details>
<summary><strong>Used Cars Overview</strong></summary>
 
<br>
   
> - **Description**: Returns an array of used car overview information for each available car, including relevant technical specifications and a presentation image.
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
> | `price`   | Float   | Displayed price in €.                                    |
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
  
> - **Description**: Returns all details for a specific used car, including technical specifications and images.
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
It provides the backend infrastructure of the application, leveraging Supabase as a Backend-as-a-Service (BaaS) platform.  
It combines a PostgreSQL relational database and a Storage bucket in a scalable environment.

🛡️ **Responsibility**  
It is responsible for:

- Data management
  - Managing relational data in a PostgreSQL database
  - Optimizing query performance with indexes on `id` fields
  - Enforcing data integrity with foreign key relationships and constraints (`NOT NULL`, `CHECK`)
  - Using enumerated types (ENUMs) for controlled values (e.g., `internal_material_type`)
  - Validating complex data formats through functions and triggers (e.g., min-max validation for `consumption` and `emissions` fields)
- Storage
  - Storing and serving all used car images in Supabase Storage
  - Organizing folders with deterministic naming
- Security
  - Enforcing Row-Level Security (RLS) to restrict access at row level
  - Defining access policies to read and write data

---

<details>
<summary><strong>Database Schema</strong></summary>

<br>

> <img width="560" height="605" alt="image" src="https://github.com/user-attachments/assets/c778d06e-e4ff-4bef-a964-33197f9c52b3" />

</details>
  
<br>
<br>

## 📦 Deployment & CI/CD

The project uses a fully automated pipeline to validate, build, and deploy the application.

**🧪 Continuous Integration (CI)**  
Runs on every push, and pull request to `main`:

> 1. Install dependencies
> 2. Run linting and Prettier checks
> 3. Run automated tests
> 4. Build the project

Additionally, every push to `main` triggers an automatic SonarQube Cloud analysis to monitor code quality.

**🚀 Continuous Deployment (CD)**  
Triggered after successful CI:

> 1. Install dependencies
> 2. Build the project
> 3. Deploy to Vercel

The application is deployed to Vercel, hosting the frontend and serverless functions.

---

<details>
<summary><strong>Deployment Features</strong></summary>

<br>
  
> - Domain management
> - Preview deployments for all branches and pull requests
> - Versioned deployments with easy rollback to previous stable releases
> - Management of environment variables
> - Automatic caching of static content and serverless responses at the edge
> - Automatic scaling with traffic demand
> - Security features including firewall
> - Logs monitoring
> - Integrated analytics
</details>

<br>

## 🔐 Environment Variables

Environment variables manage all sensitive configurations and secrets of the application in a secure, scalable, and maintainable way.

Sources of environment variables:

<details>
<summary><strong>📝 Local .env file</strong>  
  
_Used in development and ignored by version control._
</summary>

> - Database URL
> - Supabase anon key

</details>

<details>
<summary><strong>☁️ Vercel Environment Variables</strong>

_Used for production deployments._

</summary>

> - Database URL
> - Supabase anon key

</details>

<details>
<summary><strong>🔒 GitHub Actions Secrets</strong>

_Used in CI/CD pipeline._

</summary>

> - Vercel token

</details>

<br>

## 🖥️ SEO, Analytics & Monitoring

The application implements search engine optimization to improve discoverability and ranking, analytics to monitor user engagement and performance, and monitoring to track system operations and backend activity, all while preserving user privacy.

🔍 **SEO features** includes:

- Clean, human-readable URLs
- Keyword-optimized content
- HTTPS for secure connections
- Embedded Google Maps for local SEO targeting
- Favicon and consistent branding

📈 **Analytics features** (via Vercel Analytics) includes:

- Actionable insights to optimize UX and app performance
- Privacy-friendly, cookie-free solution

📊 **Monitoring features** (via Vercel Logs, Supabase Logs and error logging) includes:

- Serverless functions monitoring through:
  - Vercel Logs
  - Automatic errors and failed requests logging, supporting rapid debugging and issue resolution
- Backend / BaaS monitoring through Supabase Logs, including:
  - API Gateway Logs
  - Postgres Logs
  - Storage Logs

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

## 📈 Metrics

<br>

**📊 Lighthouse Metrics**:
![Frame 2 (2)](https://github.com/user-attachments/assets/263c2b63-bbe5-4b5b-82d2-9cc903590c4f)

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
<em>Average metrics collected from 200+ API invocations over a 12h period by Vercel Observability.</em>
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
<em>Average metrics collected from 200+ requests over a 12h period by Supabase Reports.</em>
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
<strong>📦 Deployment & CI/CD Metrics</strong> 
<br>
<em>Average metrics collected over a 30 days period by Vercel Deployments and GitHub Insights.</em>
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

## 🌎 Impact on the Real World

The platform demonstrates how thoughtful design and technology can directly improve customer experience and business performance.

💻 **Operational Efficiency**

> Easy access to information.  
> Reduced support workload.

🏙️ **Local Business Impact**

> Increased visibility.  
> Local business stands out.

💡 **Informed Decisions**

> Clear information.  
> Informed decisions.  
> Increased trust.

📊 **Data Insights**

> Customer insights.  
>  Understanding behavior.  
>  Optimized inventory.

<br>
<br>

Last update: _June 24, 2025_
