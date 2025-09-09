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
  - [⚛️ React Components](#%EF%B8%8F-react-components)
  - [🔄 Data Fetching & Caching](#-data-fetching--caching)
  - [⚙️ Serverless Functions](#%EF%B8%8F-serverless-functions)
  - [☁️ Backend / BaaS](#%EF%B8%8F-backend--baas)
- [💻 From Development to Deployment 🚀](#-from-development-to-deployment-)
  - [🔐 Secrets & Variables](#-secrets--variables)
  - [💻 Development Environment](#-development-environment)
  - [🔀 Version Control](#-version-control)
  - [✅ Code Quality](#-code-quality)
  - [🚀 Deployment & CI/CD](#-deployment--cicd)
- [🖥️ Post-Deployment](#%EF%B8%8F-post-deployment)
  - [📈 Analytics](#-analytics)
  - [📊 Monitoring](#-monitoring)
- [📈 Metrics](#-metrics)

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

**What's the impact on the real world?**  

**Operational Efficiency**  
> **Up to 20% of users exposed to relevant brand and local queries clicked through to access website information, reducing support requests.**

**Local Business Impact**  
> **The website appears in 400+ search queries over the last month, with an average position of #1.5 for relevant brand and local queries, increasing the visibility of the business in its local area.**

**Informed Decisions**  
> **More than 30% of users who visited the website clicked through to see detailed information about used cars, supporting informed purchasing decisions.**

**Data Insights**  
> **Insights from 200+ clicks on used car pages monthly help the business to understand customer preferences and guide strategy.**

<br>

<br>

## 🛠️ Tech Stack

| Layer                             | Technology                                                     |
| --------------------------------- | -------------------------------------------------------------- |
| 🏗️ **Infrastructure**             | **Jamstack**                                                   |
| 🌐 **Client-side**                | **React.js** - JavaScript Library                              |
|                                   | **Ant Design** - UI Library                                    |
|                                   | **CSS, Design Tokens, Framer Motion** - Styling and Animations |
|                                   | **React Router (HashRouter)** - Routing                        |
|                                   | **React Hooks, Custom Hooks** - State Management               |
|                                   | **React Query** - Fetching and Caching                         |
| ⚙️ **API / Serverless Functions** | **Vercel Functions** - Backend Logic                           |
| ☁️ **Backend / BaaS**             | **Supabase** - PostgreSQL Database and Storage                 |
| 🔐 **Secrets & Variables**        | **.env** - Development                                         |
|                                   | **GitHub Actions Secrets and Variables** - CI/CD               |
|                                   | **Vercel Environment Variables** - Deployment                  |
| ⚒️ **Development Environment**    | **Node.js** - JavaScript Runtime                               |
|                                   | **npm** - Package Manager                                      |
|                                   | **Vercel CLI** - Local Production Environment                  |
| 🔀 **Version Control**            | **Git & GitHub** - Repository & Workflow                       |
| ✅ **Code Quality**               | **ESLint** - Linting and Coding Standards                      |
|                                   | **Prettier** - Formatting                                      |
|                                   | **Dependency Security Audit** - Dependency Security            |
|                                   | **SonarQube** - Quality and Issues                             |
| 🧪 **Testing**                    | **Jest** - Unit and Integration Tests                          |
|                                   | **React Testing Library** - Component Behavior Testing         |
| 🚀 **Deployment & CI/CD**         | **Vercel** - Hosting                                           |
|                                   | **GitHub Actions** - CI/CD                                     |
| 📈 **Analytics**                  | **Vercel Analytics** - Insights                                |
|                                   | **Google Search Console** - Search Performance and Indexing    |
| 📊 **Monitoring**                 | **Error Logging** - Client-side and Serverless Functions       |
|                                   | **Vercel Logs** - Serverless Functions                         |
|                                   | **Supabase Logs** - Backend / BaaS                             |
|                                   | **GitHub Insights** - CI/CD                                    |
|                                   | **Lighthouse** - App performaance and health                   |

<br>

<br>

## 📌 Software Engineering Principles

How this project follows software engineering best practices.

<details>
<summary><strong>Abstraction</strong></summary>

<br>

> - React components manage application state
> - React Query abstracts fecthing and caching logic
> - Functions and hooks abstract business logic
> - Serverless functions abstract backend complexity  
>   ...

</details>

<details>
<summary><strong>Maintainability & Change Readiness</strong></summary>

<br>

> - Clean, documented code improves readability
> - Decoupled React components and business logic enable easy updates
> - Centralized constants and variables simplify changes
> - ESLint, Prettier, vulnerability check, and SonarQube ensure code quality  
>   ...

</details>

<details>
<summary><strong>Modularity</strong></summary>

<br>

> - Architecture separates responsabilities among components
> - Modular React components manage their own state and rendering
> - React components follow atomic, composable design
> - Modules incapsulate business logic  
>   ...

</details>

<details>
<summary><strong>Performance & Efficiency</strong></summary>

<br>

> - React Query optimizes data fetching and caching
> - Serverless functions consume resources only when invoked
> - Indexes on tables improve query performance
> - Lazy loading and AVIF images boost Lighthouse scores  
>   ...

</details>

<details>
<summary><strong>Reliability & Robustness</strong></summary>

<br>

> - Distributed services prevent full system failure
> - Error handling and fallback UIs improve resilience
> - Constraints, foreign keys, ENUMs, functions and triggers ensure data integrity
> - CI/CD pipeline runs tests and checks for vulnerabilities  
>   ...

</details>

<details>
<summary><strong>Reusability</strong></summary>

<br>

> - Application follows DRY (Don't Repeat Yourself) principles
> - Application reuses UI components, styles, and CSS variables
> - Business logic modules enable easy reuse
> - Libraries and frameworks avoid reinventing the wheel   
>   ...

</details>
  
<details>
<summary><strong>Scalability</strong></summary>

<br>

> - React Query enhances scalability via fetching and caching
> - Supabase scales database and storage automatically
> - Vercel serverless functions scale automatically
> - Vercel's edge caching reduces latency and improves scalability  
>   ...

</details>

<details>
<summary><strong>Security & Compliance</strong></summary>

<br>

> - HTTPS ensures secure communications
> - Application ensures GDPR compliance
> - Application manages sensitive data via environment variables and secrets
> - Row-Level Security and policies secure data management  
>   ...

</details>

<details>
<summary><strong>Usability</strong></summary>

<br>

> - Mobile-first design undergoes tests on multiple devices
> - UI aligns with branding while remaining clear and consistent
> - Application implements accessibility best practices
> - Application provides fast feedback and smooth UX  
>   ...

</details>

<br>

<br>

## 🏗️ System Architecture

The system is built on a Jamstack architecture:

<img width="510" height="724" alt="image" src="https://github.com/user-attachments/assets/1b4d45ea-a60e-4c9a-8e45-011ec04bb873" />

> Data flows from client-side React components through the fetching and caching layer to serverless functions and backend, with caching at client and edge.

<br>

### 🌐 Client-side

🎯 **Role**  
Implements the frontend of the application as a React Single-Page Application.

🛡️ **Responsibility**

- Renders UI via _React Components_
- Manages navigation using React Router (HashRouter)
- Handles user interactions
- Fetches and caches data via internal layer

<br>

### ⚛️ React Components

🎯 **Role**  
Defines and manages UI building blocks of the application.

🛡️ **Responsibility**

- Renders UI elements
- Manages component state via React Hooks and custom hooks
- Handles component lifecycle and side effects
- Delegates its business logic to external modules

<br>

### 🔄 Data Fetching & Caching

🎯 **Role**  
Manages client-side data fetching and caching using React Query and hooks.

🛡️ **Responsibility**

- Fetches data
- Retrieves data from cache first
- Caches data to minimize network requests
- Deduplicates queries to prevent redundancy
- Logs errors on fetch failures

<br>

### ⚙️ Serverless Functions

🎯 **Role**  
Implement backend logic through RESTful API endpoints.

🛡️ **Responsibility**

- Handle client-side requests in a stateless manner
- Retrieve data from backend (used cars overview and specific car details)
- Centralize access to backend service

<br>

### ☁️ Backend / BaaS

🎯 **Role**  
Provides backend infrastructure using Supabase, including PostgreSQL database and Storage bucket.

🛡️ **Responsibility**

- **Data**
  - Stores relational data in PostgreSQL
  - Optimizes query performance with indexes
  - Enforces data integrity with foreign keys and constraints
  - Controls and validates data with enumerated types and functions/triggers
- **Storage**
  - Stores and serves images in organized folders
- **Security**
  - Enforces Row-Level Security to restrict access at row level
  - Defines access policies for reading and writing data
  
<br>

<br>

## 💻 From Development to Deployment 🚀

### 🔐 Secrets & Variables

To manage all sensitive configuration and environment settings of the application safely.

<strong>📝 Local .env File</strong>  
_Used in development and ignored by version control._

<strong>☁️ Vercel Environment Variables</strong>  
_Used for production deployments._

🔒 <strong>GitHub Actions Secrets and Variables</strong>  
_Used in CI/CD pipeline._

<br>
   
### 💻 Development Environment

To ensure a consistent development setup.

🌳 **Node.js**  
_Executes JavaScript code in development environment._

**📦 npm**  
_Manages dependencies, libraries, and scripts._

💻 **Vercel CLI**  
_Runs frontend and serverless functions locally, simulating production._

<br>

### 🔀 Version Control

To track code and automate workflows.

🔧 **Git & GitHub**  
<em>Manages code, workflows, and automated checks.</em>

- Separate branches for production and major changes
- Conventional commit standard for commit messages
- Stable deployment points marked by Git tags
- CI/CD automation with GitHub Actions

<br>

### ✅ Code Quality

To keep code clean, safe, and maintainable throughout development.

⚖️ **ESLint**  
_Enforces JavaScript coding standards._

🧹 **Prettier**  
_Formats code automatically for consistency._

🔒 **Dependency Security Audit**  
_Checks for security vulnerabilities in project dependencies._

**📊 SonarQube**  
_Monitors code quality and enforces a Quality Gate for reliability, security, maintainability, test coverage, and low duplication._

<br>

### 🚀 Deployment & CI/CD

To automate code-to-production delivery with reliability and traceability.

**⚡ Vercel**  
_Deploys frontend and serverless functions._

- Preview deployments for all branches and pull requests
- Versioned deployments with easy rollback
- Static content and serverless functions caching at the edge
- Automatic scaling with traffic demand
- Security features (firewall)
- Logs monitoring

<br>

<details>
<summary>
<strong>Continuous Integration (CI)</strong>
  
<em>Runs on every push, and pull request to main.</em>
</summary>

> Checkout repository  
> ↓  
> Setup Node.js  
> ↓  
> Install dependencies  
> ↓  
> Run ESLint & Prettier  
> ↓  
> Run tests  
> ↓  
> Build project      
> ↓  
> Check dependencies for vulnerabilities  
> ↓  
> Run SonarQube analysis   

</details>

<details>
<summary>
<strong>Continuous Deployment (CD)</strong>
  
<em>Triggered after successful CI.</em>
</summary>
  
> Checkout repository  
> ↓  
> Setup Node.js  
> ↓  
> Install dependencies  
> ↓  
> Build project     
> ↓  
> Deploy to Vercel  
</details>

<br>

<br>

## 🖥️ Post-Deployment  

### 📈 Analytics  
To monitor user engagement and performance.

**⚡ Vercel Analytics**  
_Provides privacy-friendly, cookie-free insights._  

**🔬 Google Search Console**  
_Monitors search perfromance, queries, indexing, and security._  

<br>

### 📊 Monitoring  
To track system operations and backend activities.  

**🛑 Error Logging (try-catch and console logs)**  
_Monitors client-side._  

**⚡ Vercel Logs**  
_Monitors serverless functions._  

**☁️ Supabase Logs (API Gateway, Postgres, Storage)**  
_Monitors backend._  

**🚀 GitHub Insights and Vercel**  
_Monitors CI/CD and deployment._  

**📊 Lighthouse**  
_Monitors application for performance, accessibility, best practices, and SEO._

<br>

> <strong>All while preserving user privacy.</strong>

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
<strong>Serverless Functions Metrics</strong> 
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
<strong>Backend / BaaS Metrics</strong> 
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
<strong>Deployment & CI/CD Metrics</strong> 
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
<strong>Code Metrics</strong> 
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

---

Last update: _June 24, 2025_
