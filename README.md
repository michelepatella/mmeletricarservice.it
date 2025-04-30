# 🌐 [mmeletricarservice.it](https://mmeletricarservice.it)

A production-ready, full-stack web application developed for an Italian **car workshop** and **used car dealership**, focused on **scalability**, **responsiveness**, and **serverless architecture**. Built with **React.js**, **Ant Design**, and **Supabase**.

<br>

## 🚀 Features

### 🖥️ Frontend UX
- **Fully Responsive UI**, tested across 20+ physical and emulated devices.
- **Ant Design Component Library**, customized with brand-driven theming.
- **Smooth Scroll & Adaptive Navigation**, using anchor menus (desktop) and hamburger drawer (mobile).
- **Consistent Design Language**, with reusable layout components and UI tokens.

### 🧠 Logic
- Custom React hooks and js methods to encapsulate business logic and avoid code duplication.
- Centralized data fetching with conditional caching and graceful error handling.
- Used car data is fetched in two steps:
  - Overview data on page load.
  - Full details and images on-demand when a car is selected.

### ⚙️ Backend & Data Layer
- **Serverless API Integration** to Supabase (PostgreSQL + Storage).
- **Dynamic data rendering** of available used cars, including image galleries and spec sheets.
- **Data access layer** with error handling and loading states.
- **Content and media** are decoupled from frontend, enabling scalable data flow.

### 📂 Code Architecture
- **Modular folder structure**: UI & logic (`/js`) and styling (`/style`) are cleanly separated.
- Components divided into **atomic sections** and reusable blocks.
- Clear **separation of concerns** between UI, logic, and styles.
- **Reusable components** reducing the coding effort and code's complexity.
- Text content centralized in a `const.js` file for better scalability and localization.

### 👤 UX Enhancements
- Smooth scroll and section linking with scroll spy.
- Animations on entry via **Framer Motion** and CSS.
- Fullscreen drawer car details and dynamic route handling.
- Auto-detection of direct links to used car detail pages, with opening the drawer.

### 🛡️ Legal & Privacy
- GDPR-ready: cookie banner, third-party cookie handling.
- Pages for Privacy Policy, Cookie Policy, and Legal Notes.

### 🔨 Tooling & Quality
- Environment variables managed via `.env` and Vercel dashboard.
- Extensive code commenting and docstrings.

<br>

## 📌 Software Engineering Principles

This project follows the best practices of software engineering, that are:

1. **Modularity**: The application is built using reusable React components, following the principles of separation of concerns between logic, UI, and styling.
2. **Maintainability**: The codebase is clean, well-documented, and follows coding standards.
3. **Reusability**: Components are designed to be reused across different pages and contexts.
4. **Scalability**: The backend architecture is serverless, using **Supabase** for database and storage, allowing the app to scale seamlessly as traffic grows.
5. **Reliability**: Error handling and loading states are implemented to ensure that the application remains responsive and functional at all times.
6. **Security**: The application complies with **privacy regulations**, with features like **cookie consent**.
7. **Efficiency**: Performance optimizations like **lazy loading**, **image compression**, and **code splitting** are implemented to ensure fast loading times and an efficient user experience.
8. **Abstraction**: Modular architecture, separating UI from business logic, achieved by using reusable React components and custom hooks.
9. **Anticipating Change**: Codebase designed to be easily extensible, using centralized configuration for environment variables and settings, which allows for simple updates and future feature additions without extensive rewrites.
10. **Usability**: Focus on UX, with a clean, intuitive and user-friendly interface that works seamlessly across devices.
11.  **Robustness**: Errors handling, clear messages for users and robust error handling in both frontend and backend.

<br>

## 🔗 Pages & Structure

The application is composed of static and dynamic routes to serve both marketing and functional purposes:

- **Home** (`/`) – Intro to services with CTA.
- **About Us** (`/chi-siamo`) – Company history and team.
- **Our Values** (`/valori`) – Mission-driven branding content.
- **Services Overview** (`/servizi`) – Summary of all services.
- **All Services** (`/tutti-i-servizi`) – Detailed list with expandable sections.
- **Used Cars** (`/auto-usate`) – Grid of available cars via API.
- **Car Details** (`/auto-usate*id*`) – Dynamic route with specs, image gallery, contact CTA.
- **Location** (`/dove-siamo`) – Embedded Google Maps with structured business data.
- **Contact** (`/contatti`) – Phone, email, and opening hours.

Navigation is fully responsive with a desktop anchor menu and mobile drawer for optimal UX.

<br>

## 🛠️ Tech Stack

| Layer                 | Technology                     |
|-----------------------|--------------------------------|
| Frontend              | React.js                       |
| UI Components         | Ant Design, CSS                |
| Backend-as-a-Service  | Supabase (PostgreSQL, Storage) |
| Deployment            | Vercel                         |
| SEO & Metadata        | Meta tags                      |
| Analytics             | Vercel Analytics               |

<br>

## 📈 Performance & Optimization

### Lighthouse Scores (Production Build)

| Category         | Score (%)                     |
|------------------|-------------------------------|
| Performance      |             90                |
| Accessibility    |             96                |
| Best Practices   |            100                |
| SEO              |            100                |

### Metrics

| Metric                    | Target                   |
|---------------------------|--------------------------|
| First Contentful Paint    |          0.9 s           |
| Largest Contentful Paint  |       2.4 s              |
| Total Blocking Time       |            60 ms         |
| Cumulative Layout Shift   |             0            |
| Speed Index               |            3.9 s         |

> More details: 
[Uploading mmeletricarservice.it-20250430T232340.html…]()

<br>

## 🧩 Future Improvements


<br>

## 👨‍💻 Author
**Michele Patella**
