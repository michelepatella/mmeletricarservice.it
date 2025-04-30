# 🌐 [mmeletricarservice.it](https://mmeletricarservice.it)

A **production-ready**, **full-stack web application** developed for an Italian **car workshop** and **used car dealership**, named **MM Eletricar Service**, designed to enhance the digital presence and operational efficiency of the Company. The platform provides customers with clear and detailed information about the company itself — including its values, location, and contact details — as well as an overview of its services and a seamless browsing experience for available used cars.

Built with **React.js**, **Ant Design**, **CSS** and **Supabase**, and deployed on **Vercel**, the application offers a **modern and responsive UI** while adhering to core **software engineering principles** and optimizing for key **performance metrics**.

<br>

## 🛠️ Tech Stack

| Layer                 | Technology                         |
|-----------------------|------------------------------------|
| Frontend              | React.js                           |
| UI Library            | Ant Design                         |
| Styling               | CSS  / Custom Design Tokens        |
| Animations            | CSS / Framer Motion                |
| API Communication     | Serverless API (Vercel Functions)  |
| Backend-as-a-Service  | Supabase (PostgreSQL, Storage)     |
| Environment variables | .env + Vercel Dashboard            |
| Deployment            | GitHub Actions (CI) + Vercel (CD)  |
| SEO & Metadata        | Meta tags + SEO-optimized content  |                        
| Analytics             | Vercel Analytics                   |

<br>

## 🔴 Live Demo & Screenshot

<br> 

<br>

## 📌 Software Engineering Principles

This project follows the best practices of software engineering, that are:

1. **Modularity**: The application is built using reusable React components and UI tokens, following the principles of separation of concerns between logic, UI, and styling.
   
2. **Maintainability**: The codebase is clean, well-documented (including docstrings), and adheres to coding best practices, making it easy to maintain and extend.
3. **Reusability**: Components are designed to be reused across different pages and contexts. Custom React hooks and JavaScript methods encapsulate business logic and help avoid code duplication.
4. **Scalability**: The backend architecture is serverless, utilizing Supabase for database and storage. This allows the app to scale seamlessly as traffic grows. Text content is centralized in a `const.js` file for better scalability and localization.
5. **Reliability**: Error handling and loading states are implemented to ensure that the application remains responsive and functional under various conditions.
6. **Security**: The application complies with GDPR regulations, featuring a cookie consent banner and third-party cookie handling for enhanced privacy and security.
7. **Efficiency**: Performance optimizations such as lazy loading ensure fast loading times and an efficient user experience.
8. **Abstraction**: The application follows a modular architecture, separating UI from business logic by using reusable React components and custom hooks.
9. **Anticipating Change**: The codebase is designed to be easily extensible, with centralized configuration for environment variables and settings, making future updates and feature additions simple and requiring minimal rewrites.
10. **Usability**: Emphasis on a clean, intuitive, and user-friendly interface, tested across 20+ physical and emulated devices. The app features customized brand-driven theming components, smooth scroll, adaptive navigation (anchor menus on desktop, hamburger drawer on mobile), and other UX best practices.
11.  **Robustness**: Comprehensive error handling and clear user messages ensure the app remains stable and functional. Robust error handling is applied both in the frontend and backend.

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

## 📈 Performance & Optimization

### 📊 Lighthouse Scores

| Category         | Score (%)                     |
|------------------|-------------------------------|
| Performance      |             90                |
| Accessibility    |             96                |
| Best Practices   |            100                |
| SEO              |            100                |

### ⚡️ Performance

| Metric                    | Target                   |
|---------------------------|--------------------------|
| First Contentful Paint    |          0.9 s           |
| Largest Contentful Paint  |       2.4 s              |
| Total Blocking Time       |            60 ms         |
| Cumulative Layout Shift   |             0            |
| Speed Index               |            3.9 s         |

> More details: [Lighthouse Report](./lighthouse.pdf)

<br>

## 🧩 Future Improvements


<br>

## 👨‍💻 Author
**Michele Patella**
