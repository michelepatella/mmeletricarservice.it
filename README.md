# 🌐 [mmeletricarservice.it](https://mmeletricarservice.it)

A production-ready, full-stack web application developed for an Italian **car workshop** and **used car dealership**, focused on **scalability**, **responsiveness**, and **serverless architecture**. Built with **React.js**, **Ant Design**, and **Supabase**.

<br>

## 🚀 Features

### 🖥️ Frontend UX
- **Fully Responsive UI**, tested across 20+ physical and emulated devices.
- **Ant Design Component Library**, customized with brand-driven theming.
- **Smooth Scroll & Adaptive Navigation**, using anchor menus (desktop) and hamburger drawer (mobile).
- **Consistent Design Language**, with reusable layout components and UI tokens.

### ⚙️ Backend & Data Layer
- **Serverless API Integration** to Supabase (PostgreSQL + Storage).
- **Dynamic data rendering** of available used cars, including image galleries and spec sheets.
- **Data access layer** with error handling and loading states.
- **Content and media** are decoupled from frontend, enabling scalable data flow.

<br>

## 🧑‍💻 Developer Experience

### 📂 Code Architecture
- **Modular folder structure**: UI & logic (`/js`) and styling (`/style`) are cleanly separated.
- Components divided into **atomic sections** and reusable blocks.
- Clear **separation of concerns** between UI, logic, and styles.
- **Reusable components** reducing the coding effort and code's complexity.
- Text content centralized in a `const.js` file for better scalability and localization.

### 🧠 React Logic
- Custom React hooks and js methods to encapsulate business logic and avoid code duplication.
- Centralized data fetching with conditional caching and graceful error handling.
- Used car data is fetched in two steps:
  - Overview data on page load.
  - Full details and images on-demand when a car is selected.

### 👤 UX Enhancements
- Smooth scroll and section linking with scroll spy.
- Animations on entry via **Framer Motion** and CSS.
- Fullscreen drawer car details and dynamic route handling.
- Auto-detection of direct links to used car detail pages, with opening the drawer.

### 🔨 Tooling & Quality
- Environment variables managed via `.env` and Vercel dashboard.
- Extensive code commenting and docstrings.

### 🛡️ Legal & Privacy
- GDPR-ready: cookie banner, third-party cookie handling.
- Pages for Privacy Policy, Cookie Policy, and Legal Notes.

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
| Performance      |                               |
| Accessibility    |                               |
| Best Practices   |                               |
| SEO              |                               |

### Core Web Vitals

| Metric                    | Target                   |
|---------------------------|--------------------------|
| First Contentful Paint    |                          |
| Largest Contentful Paint  |                          |
| Total Blocking Time       |                          |
| Cumulative Layout Shift   |                          |
| Speed Index               |                          |

> Performance optimizations include lazy-loaded routes, image compression, code splitting, and efficient re-rendering strategies.

<br>

## 🧩 Future Improvements


<br>

## 👨‍💻 Author
**Michele Patella**
