<!-- LOGO -->
<div align="center">
  <img width="120" height="120" src="https://github.com/user-attachments/assets/3e088943-1f3d-45c6-b615-587636363109" />
</div>

<!-- TOP -->
<a id="readme-top"></a>

<!-- HEADER -->
<div align="center">

  <!-- TITLE -->
  <h1 align="center">mmeletricarservice.it</h1>

  <!-- DESCRIPTION AND LINKS -->
  <p align="center">
    Full-stack web application with DevOps practices, deployed in production for an Italian car workshop and used car dealership, enhancing digital presence and improving customer decision-making.
    <br/>
    <br/>
    <a href="https://github.com/michelepatella/mmeletricarservice.it">GitHub</a>
    &middot;
    <a href="https://mmeletricarservice.it">Web Page</a>
    &middot;
    <a href="https://mmeletricarservice.betteruptime.com">Status Page</a>
  </p>
  
  <!-- BADGES -->
  ![CI](https://img.shields.io/github/actions/workflow/status/michelepatella/mmeletricarservice/ci.yml?style=for-the-badge&label=CI&logo=github-actions&logoColor=white)
![Coverage](https://img.shields.io/badge/Coverage-84%25-green?style=for-the-badge&logo=jest&logoColor=white)
![Quality Gate](https://img.shields.io/sonar/quality_gate/michelepatella_mmeletricarservice?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge&logo=sonarqubecloud&logoColor=white)
![Uptime Status](https://img.shields.io/website?url=https%3A%2F%2Fmmeletricarservice.betteruptime.com&style=for-the-badge&logo=betterstack&label=Uptime%20Status)

</div>

<br>

<div align="center">
  <img width="700" src="https://github.com/user-attachments/assets/f77f49c1-6bbe-487d-9a09-4797aa9d7881" />
  <p>The <strong>Frontend</strong> retrieves the data from the <strong>Backend</strong>, passing through the <strong>Data & State Layer</strong> and <strong>API Layer</strong>, with caching at client and edge.</p>
</div>

<br>
<br>

<!-- TABLE OF CONTENT -->
<details>
  <summary><strong>Table of Contents</strong></summary>
  
- [Features](#features)
  - [Core](#core)
  - [DevOps](#devops)
- [Tech Stack](#tech-stack)

</details>

<br>

<!-- 'FEATURES' SECTION -->
## Features

<!-- 'CORE' SUBSECTION -->
### Core

- Engineered a modular, mobile-first React SPA achieving an average across mobile and desktop of **1s** LCP, **0** CLS, and **0.9s** Speed Index, with low-latency data delivery (**0.1s** TTFB)
- Implemented server-state management with React Query (stale-while-revalidate, query deduplication, caching-first), reducing redundant API calls and improving client-side performance
- Developed stateless, scalable Vercel serverless functions, maintaining a **100%** success rate over 5k requests (50 concurrent) with average latency **466–670ms** and throughput **74–107 req/s** (depending on endpoint), and p95 latency **<1s**
- Built a scalable Supabase infrastructure (PostgreSQL, B-tree indexing, RLS, Storage), achieving **193–334ms** average latency over ∼15k–25k data and asset requests with no observed errors

<!-- 'DEVOPS' SUBSECTION -->
### DevOps

- Standardized development workflow using Git, Conventional Commits, Semantic Versioning, and Husky pre-commit hooks, improving codebase consistency and ensuring reliable release traceability
- Implemented a CI pipeline via GitHub Actions covering linting and formatting (ESLint, Prettier), automated testing (Jest, React Testing Library with coverage), security scanning (npm audit), builds, and static analysis (SonarQube Quality Gate), ensuring consistent code quality
- Built a CD pipeline with GitHub Actions enabling automated preview and production deployments on Vercel, achieving an average deployment time of **∼3m 30s** with zero-downtime releases
- Implemented a multi-layer testing strategy spanning API routes, React components, and business logic (custom hooks and utility functions), achieving **84%** test coverage and improving application reliability
- Leveraged observability tooling including error tracking (Sentry), platform logs (Vercel and Supabase), and uptime monitoring (Better Uptime), improving system visibility
- Established a data-driven feedback loop using user analytics (Vercel Analytics), performance auditing (GTmetrix), API load testing (oha), and search performance monitoring (Google Search Console), improving performance and discoverability

<p align="right"><a href="#readme-top">Top ↑</a></p>

<!-- 'TECH STACK' SECTION -->
## Tech Stack

- **Language**: JavaScript
- **Version Control**: Git
- **Development**: Node.js (v20.20+), npm
- **Frontend**: React, Ant Design
- **API**: Vercel Serverless Functions
- **Backend**: Supabase (PostgreSQL, Storage)
- **Quality Assurance**:
  - **Integrity & Workflow**: pre-commit (Husky)
  - **Linting & Formatting**: ESLint, Prettier
  - **Security**: npm audit
  - **Static Analysis**: SonarQube
  - **Testing**: Jest, React Testing Library
- **Deployment**: Vercel  
- **CI/CD**: GitHub Actions
- **Monitoring**:
  - **Availability**: Better Uptime
  - **Error Tracking**: Sentry
  - **Platform Logs & Observability**: Supabase (Backend) / Vercel (Serverless) Logs
  - **Analytics**: Vercel Analytics

<p align="right"><a href="#readme-top">Top ↑</a></p>


