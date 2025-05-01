# 🌐 [mmeletricarservice.it](https://mmeletricarservice.it)

A **production-ready**, **full-stack web application** developed for an Italian **car workshop** and **used car dealership**, named **MM Eletricar Service**, designed to enhance the digital presence and operational efficiency of the Company. The platform provides customers with clear and detailed information about the company itself — including its values, location, and contact details — as well as an overview of its services and a seamless browsing experience for available used cars.

Built with **React.js**, **Ant Design**, **CSS** and **Supabase**, and deployed on **Vercel**, the application offers a **modern and responsive UI** while adhering to core **software engineering principles** and optimizing for key **performance metrics**.

<br>

## 🔴 Live Demo

The web application is available at https://mmeletricarservice.it 👈

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
| SEO & Metadata        | Meta tags + React Helmet           |                        
| Analytics             | Vercel Analytics                   |

<br> 

## 🏗️ System Architecture 
🌐 **Client-side (React app)**
  - Supabase interactions via Serverless API
  - Navigation via Hash Router
  - UI Components with Ant Design and CSS
  - SEO handled with React Helmet

⚙️ **Serverless Functions**
   - Implemented as Vercel Functions
   - Act as middleware between frontend and backend
     
☁️ **Backend / BaaS (Supabase)**
   - PostgreSQL database for used car data
   - Storage bucket for used car images
   - Row-level security with custom policies
   - Optimized with indexes for performance
   - Accessed via RESTful API

📦 **Deployment & CI/CD**
   - Source control: GitHub
   - GitHub Actions for continuous integration
   - Automatic deployment to Vercel on push to main
<br> 
<img width="780" alt="image" src="https://github.com/user-attachments/assets/4e4c5b00-fe79-4a92-a114-114d62f9273a" />

<br> 

## 📌 Software Engineering Principles

This project follows the best practices of software engineering:

1. 🧱 **Modularity**: 
   - Components follow the Single Responsibility Principle
   - Clear separation between UI, business logic, and styling
	- Logic encapsulated via custom hooks and shared utility functions
	- Sections are structured as atomic, composable components

<br>

2. 🛠️ **Maintainability**:
   - Clean and consistent codebase
   - Well-documented (including docstrings) code
   - In-code documentation and meaningful naming conventions
   - Text centralized in a `const.js` file for easier updates
   - Use of CSS variables and design tokens

<br>
   
3. ♻️ **Reusability**:
   - Common components reused across multiple pages (texts, buttons, section layouts, etc.)
   - DRY (Don't Repeat Yourself) principles followed across logic and styles

<br>
  
4. 🚀 **Scalability**:
   -  Backend powered by Supabase (PostgreSQL, serverless), allowing seamless scaling
   -  Frontend components and routes structured for future expansion

<br>
  
5. ✅ **Reliability & Robustness**:
   - Comprehensive error handling for API and UI
   - Loading states and fallback UIs improve resilience
   - Clear feedback and user messages in edge cases

<br>
  
6. 🔐 **Security & Compliance**:
    - GDPR compliance: cookie consent, legal/privacy notes
    - Safe handling of third-party cookies
    - No sensitive data exposed client-side

<br>
   
7. ⚡️ **Performance & Efficiency**:
      - Lazy loading
      - Optimized for Lighthouse metrics and fast time-to-interactive
      - Use of compressed formats (WebP)
      - Caching used car data during the session

<br>

8. 🧠 **Abstraction**:
      - Business logic abstracted via hooks and helper functions
      - Reusable component library supports consistent UI patterns
      - Centralized configuration (env, theming, routing)

<br>

9. 🔄 **Change Readiness**:
      - Environment variables and settings externalized for flexibility
      - Scalable deployment workflow (CI/CD via GitHub Actions + Vercel)

<br>

10. 👤 **Usability**:
      - Clean and intuitive UI aligned with branding
      - Accessibility best practices
      - Responsive navigation (anchor menu on desktop, drawer on mobile)
      - Fast feedback to user actions
      - Consistency across the whole app (colors, layout, etc.)
      - Mobile-first design, tested on 20+ devices and viewports
      - Clear visual hierarchy and reduced cognitive load (e.g. accordion for specs)

<br>

## 🔗 Pages & Structure

The application is composed of static and dynamic routes to serve both marketing and functional purposes:

- **Home** (`/`) – Landing page
- **About Us** (`/chi-siamo`) – Company overview, team, and history
- **Our Values** (`/i-nostri-valori`) – Company's mission and core values
- **Services** (`/servizi`) – Introduction to the offered services
- **All Services** (`/tutti-i-servizi`) – Detailed list of provided services
- **Used Cars** (`/auto-usate`) – Grid of available used cars displayed via cards
- **Car Details** (`/auto-usate*id*`) – Dynamic route rendered as a full-screen drawer with technical specs, gallery, and contact CTA
- **Location** (`/dove-siamo`) – Location, business hours, and embedded Google Maps
- **Contacts** (`/contatti`) – Contact information, including phone, email and social media link

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
