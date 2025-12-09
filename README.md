<div align="center">
<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/3e088943-1f3d-45c6-b615-587636363109" />
  <h1>
    <a href="https://mmeletricarservice.it" target="_blank">
      mmeletricarservice.it
    </a>
  </h1>
  <h4>Production-grade, full-stack web application designed, built, and deployed for a real automotive business.</h4>
</div>

<br>

### Table of Content

- [🧩 Engineering Summary](#-engineering-summary)
- [🌍 Real-World Impact](#-real-world-impact)
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [💡 Software Engineering Principles](#-software-engineering-principles)
- [🏗️ System Architecture](#%EF%B8%8F-system-architecture)
- [⚙️ DevOps](#%EF%B8%8F-devops)
- [📈 Metrics](#-metrics)

<br>

<br>

## 🧩 Engineering Summary


<br>

<br>

## 🌍 Real-World Impact

**Visibility**

> **Reached 400+ search queries last month, ranking #1.5 for brand and local searches.**

**↓**

**Efficiency**

> **Up to 20% of users clicked through from relevant searches, reducing support requests.**

**↓**

**Trust**

> **30%+ of visitors explored detailed used car information, enabling informed decisions.**

**↓**

**Strategy**

> **200+ monthly clicks on used cars reveal customer preferences and guide strategy.**

<br>

<br>

## 🛠️ Tech Stack

| Area | Key Technologies |
| :--- | :--- |
| **Language** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **Client-side & UI** | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![Ant Design](https://img.shields.io/badge/Ant_Design-0170FE?style=for-the-badge&logo=ant-design&logoColor=white) |
| **API** | ![Serverless](https://img.shields.io/badge/Serverless-000000?style=for-the-badge&logo=vercel&logoColor=white) |
| **Backend / BaaS** | ![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white) |
| **Development Environment** | ![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=node.js&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) |
| **Version Control** | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white) |
| **Quality & Testing** | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) ![SonarQube](https://img.shields.io/badge/SonarQube-126ED3?style=for-the-badge&logo=sonarqubecloud&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white) ![React Testing Library](https://img.shields.io/badge/React_Testing_Library-61DAFB?style=for-the-badge&logo=react&logoColor=black) |
| **CI/CD & Hosting** | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) |
| **Observability** | ![Sentry](https://img.shields.io/badge/Sentry-362D59?style=for-the-badge&logo=sentry&logoColor=orange)

<br>

<br>

## 💡 Software Engineering Principles

How this project follows the software engineering principles.

<details>
<summary><strong>Abstraction</strong></summary>

<br>

> - React components manage application state
> - React Query abstracts fecthing and caching logic
> - Functions and hooks abstract business logic
> - Serverless functions abstract backend complexity  

</details>

<details>
<summary><strong>Maintainability & Change Readiness</strong></summary>

<br>

> - Clean, documented code improves readability
> - Decoupled React components and business logic enable easy updates
> - Centralized constants and variables simplify changes
> - ESLint, Prettier, vulnerability check, and SonarQube ensure code quality  

</details>

<details>
<summary><strong>Modularity</strong></summary>

<br>

> - Architecture separates responsibilities among components
> - Modular React components manage their own state and rendering
> - React components follow atomic, composable design
> - Modules encapsulate business logic  

</details>

<details>
<summary><strong>Performance & Efficiency</strong></summary>

<br>

> - React Query optimizes data fetching and caching
> - Serverless functions consume resources only when invoked
> - Indexes on tables improve query performance
> - Lazy loading and AVIF images boost Lighthouse scores  

</details>

<details>
<summary><strong>Reliability & Robustness</strong></summary>

<br>

> - Isolated serverless functions help in preventing single points of failure
> - Observability to monitor system operations, performance, and errors
> - Constraints, foreign keys, ENUMs, functions and triggers ensure data integrity
> - CI/CD pipeline runs tests and checks for vulnerabilities  

</details>

<details>
<summary><strong>Reusability</strong></summary>

<br>

> - Application follows DRY (Don't Repeat Yourself) principles
> - Application reuses UI components, styles, and CSS variables
> - Business logic modules enable easy reuse
> - Libraries and frameworks avoid reinventing the wheel  

</details>
  
<details>
<summary><strong>Scalability</strong></summary>

<br>

> - React Query enhances scalability via fetching and caching
> - Supabase scales database and storage automatically
> - Vercel serverless functions scale automatically
> - Vercel's edge caching reduces latency and improves scalability  

</details>

<details>
<summary><strong>Security & Compliance</strong></summary>

<br>

> - HTTPS ensures secure communications
> - Application ensures GDPR compliance
> - Application manages sensitive data via environment variables and secrets
> - Row-Level Security and policies secure data management  

</details>

<details>
<summary><strong>Usability</strong></summary>

<br>

> - Mobile-first design undergoes tests on multiple devices
> - UI aligns with branding while remaining clear and consistent
> - Application implements accessibility best practices
> - Application provides fast feedback and smooth User Experience (UX)  

</details>

<br>

<br>

## 🏗️ System Architecture

The system is built on a Jamstack architecture:  

<img width="510" height="724" alt="Frame 1" src="https://github.com/user-attachments/assets/95727674-a11f-4137-9e48-0cfbbe52a3d4" />

> Data flows from client-side React components through the fetching and caching layer to serverless functions and backend, with caching at client and edge.

<br>

<details>
<summary><strong>Client-side</strong></summary>

<br>

> <strong>Role</strong>  
> Implements the frontend of the application as a React Single-Page Application.
> 
> <strong>Responsibility</strong>
> 
> - Renders UI via _React Components_
> - Manages navigation using React Router (HashRouter)
> - Handles user interactions
> - Fetches and caches data via internal layer
</details>

<details>
<summary><strong>React Components</strong></summary>

<br>

> <strong>Role</strong>  
> Defines and manages UI building blocks of the application.  
>
> <strong>Responsibility</strong>
> 
> - Renders UI elements
> - Manages component state via React Hooks and custom hooks
> - Handles component lifecycle and side effects
> - Delegates its business logic to external modules
</details>

<details>
<summary><strong>Data Fetching & Caching</strong></summary>

<br>
  
> <strong>Role</strong>  
> Manages client-side data fetching and caching using React Query and hooks.
> 
> <strong>Responsibility</strong>
> 
> - Fetches data
> - Retrieves data from cache first
> - Caches data to minimize network requests
> - Deduplicates queries to prevent redundancy
</details>

<details>
<summary><strong>Serverless Functions</strong></summary>

<br>

> <strong>Role</strong>  
> Implement backend logic through RESTful API endpoints.
> 
> <strong>Responsibility</strong>
> 
> - Handle client-side requests in a stateless manner
> - Retrieve data from backend
> - Centralize access to backend service
</details>

<details>
<summary><strong>Backend / BaaS</strong></summary>

<br>

> <strong>Role</strong>  
> Provides backend infrastructure using Supabase, including PostgreSQL database and Storage bucket.
> 
> <strong>Responsibility</strong>
> 
> - Data
>   - Stores relational data in PostgreSQL
>   - Optimizes query performance with indexes
>   - Enforces data integrity with foreign keys and constraints
>   - Controls and validates data with enumerated types and functions/triggers
> - Storage
>   - Stores and serves images in organized folders
> - Security
>   - Enforces Row-Level Security to restrict access at row level
>   - Defines access policies for reading and writing data
</details>

<br>

<br>

## ⚙️ DevOps

<details>
<summary><strong>Version Control</strong>

Track code changes using Git and GitHub to ensure full traceability.
</summary>

> **Branching Strategy** — Gitflow  
> Manage independent development lines effectively.
>
> **Commit Standards** — Conventional Commits  
> Structure commits for clear history and easier debugging.
>
> **Semantic Versioning** — GitHub Releases/Tags  
> Tag stable releases to mark production versions.

</details>

<details>
<summary><strong>Continuous Integration (CI)</strong>

Continuously integrate code via GitHub Actions to detect issues early and maintain code quality.
</summary>

> **Code Standardization** — ESLint, Prettier  
> Enforce coding standards and style consistency.
>
> **Automated Testing** — Jest, React Testing Library  
> Run unit and integration tests to catch regressions.
>
> **Build Integrity** — npm  
> Compile the project to ensure correct syntax and deployable artifacts.
>
> **Automated Security Scanning** — npm  
> Audit dependencies to detect vulnerabilities.
>
> **Static Analysis** — SonarQube  
> Assess code for reliability, security, maintainability, coverage, and duplication.

</details>

<details>
<summary><strong>Continuous Deployment (CD)</strong>

Automate frontend and serverless functions deployments to Vercel via GitHub Actions to ensure fast, reliable releases.
</summary>

> **Zero-Touch Deployment** — Vercel, GitHub Actions  
> Deploy automatically without manual intervention.
>
> **Preview Deployment** — Vercel  
> Enable branch and pull request previews before production.
>
> **Rollback** — Vercel  
> Instantly revert to a previous stable deployment if needed.
>

</details>

<details>
<summary><strong>Security</strong>

Integrate security practices across the project to protect code, data, and deployments.
</summary>

> **Secrets Management** — .env, GitHub Secrets, Vercel Environment Variables  
> Secure sensitive data across local, CI/CD, and production environments.
>
> **Security Checks in CI** — npm, SonarQube  
> Detect vulnerabilities, security issues, and hotspots before deployment.
>
> **Row-Level Security & Access Policies** — Supabase  
> Restrict database access and enforce data visibility.
>
> **Deployment Platform Defense** — Vercel  
> Exploit built-in platform protections such as firewalls.
>
> **Secure Communication** — HTTPS  
> Ensure all communication occurs via HTTPS.
>
> **Regulatory Compliance** — GDPR  
> Ensure GDPR compliance in data handling and storage.

</details>

<details>
<summary><strong>Observability</strong>

Observe system operations, performance, and health to maintain visibility.
</summary>

> **Errors** — Sentry  
> Track and alert on full-stack errors in real time.
>
> **Deployment & Serverless Functions** — Vercel Observability, Vercel Logs  
> Track deployment environment and serverless functions execution.
>
> **Backend** — Supabase Logs  
> Track database and storage operations.
>
> **CI/CD** — GitHub Insights  
> Track CI/CD pipelines performance.

</details>

<details>
<summary><strong>Feedback Loops</strong>

Collect data to transform it into actionable engineering tasks and priorities.
</summary>

> **User Behavior** — Vercel Analytics  
> Track overall user behavior and engagement.
>
> **Performance, UX & SEO** — Lighthouse  
> Track application performance, accessibility, best practices, SEO, and Core Web Vitals.
>
> **Search & Indexing** — Google Search Console  
> Track search performance, queries, and indexing.

</details>

<br>

<br>

## 📈 Metrics

<br>

**Lighthouse Metrics**:

| Metric                             | Mobile | Desktop |
|------------------------------------|--------|---------|
| Performance                        | 90     | 100     |
| Accessibility                      | 100    | 100     |
| Best Practices                     | 100    | 100     |
| SEO                                | 100    | 100     |

<br>

**Core Web Vitals**:

| Metric                             | Mobile | Desktop |
|------------------------------------|--------|---------|
| First Contentful Paint (FCP)       | 0.9 s  | 0.3 s   |
| Largest Contentful Paint (LCP)     | 3.5 s  | 0.8 s   |
| Cumulative Layout Shift (CLS)      | 0      | 0       |

<br>

<details>
<summary>
<strong>Serverless Functions Metrics</strong> 
<br>
</summary>

<br>

> **Execution Duration**  
> 348 ms / 733 ms
> <br>  
> **Error Rate**  
> 0% / 0%
> <br>  
> **Timeout**  
> 0% / 0%
> <br>  
> **Memory Usage**  
> 172 MB / 169 MB  
> <br>
> **Active CPU**  
> 33 ms / 126 ms
> <br>  
> **Start Type**  
> _Hot_: 93% / 67%  
> _Cold_: 7% / 33%  

</details>

<details>
<summary>
<strong>Backend / BaaS Metrics</strong> 
<br>
</summary>

<br>

> **API Gateway Response Speed**  
> 89 ms  
> <br>
> **PostgREST Response Speed**  
> 48 ms  
> <br>
> **Storage Response Speed**  
> 84 ms  

</details>

<details>
<summary>
<strong>CI/CD Metrics</strong> 
<br>
</summary>

<br>

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
