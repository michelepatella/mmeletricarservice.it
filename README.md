# 🌐 [mmeletricarservice.it](https://mmeletricarservice.it)

A **production-ready**, **full-stack web application** developed for an Italian **car workshop** and **used car dealership**, named **MM Eletricar Service**, designed to enhance the digital presence and operational efficiency of the Company. The platform provides customers with clear and detailed information about the company itself — including its values, location, and contact details — as well as an overview of its services and a seamless browsing experience for available used cars.

Built with **React.js**, **Ant Design**, **CSS** and **Supabase**, and deployed on **Vercel**, the application offers a **modern and responsive UI** while adhering to core **software engineering principles** and optimizing for key **performance metrics**.

The web application is available at https://mmeletricarservice.it 👈

## 👁️ Table of Content
- [Tech Stack](#️-tech-stack)
- [Pages & Project Structure](#-pages--project-structure)
- [System Architecture](#%EF%B8%8F-system-architecture)
- [Software Engineering Principles](#-software-engineering-principles)
- [Deployment](#-deployment)
- [Performance & Optimization](#-performance--optimization)
- [Author](#-author)
  
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
| Deployment            | Vercel                             |
| SEO & Metadata        | Meta tags + React Helmet           |                        
| Analytics             | Vercel Analytics                   |

<br> 

## 🔗 Pages & Project Structure

The application is composed of static and dynamic **routes** to serve both marketing and functional purposes:

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

The **project structure** is the following one:

<pre>
.
├── README.md
├── api 
│   ├── usedCarInfo.js
│   └── usedCarsOverview.js
├── lighthouse.pdf
├── package-lock.json
├── package.json
├── public
│   ├── doc 
│   │   ├── Cookie Policy - MM Eletricar Service.pdf
│   │   ├── Note Legali - Auto Usate - MM Eletricar Service.pdf
│   │   └── Privacy Policy - MM Eletricar Service.pdf
│   ├── favicon 
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-96x96.png
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── site.webmanifest
│   │   ├── web-app-manifest-192x192.png
│   │   └── web-app-manifest-512x512.png
│   ├── font 
│   │   ├── OFL.txt
│   │   ├── Poppins-Black.ttf
│   │   ├── Poppins-BlackItalic.ttf
│   │   ├── Poppins-Bold.ttf
│   │   ├── Poppins-BoldItalic.ttf
│   │   ├── Poppins-ExtraBold.ttf
│   │   ├── Poppins-ExtraBoldItalic.ttf
│   │   ├── Poppins-ExtraLight.ttf
│   │   ├── Poppins-ExtraLightItalic.ttf
│   │   ├── Poppins-Italic.ttf
│   │   ├── Poppins-Light.ttf
│   │   ├── Poppins-LightItalic.ttf
│   │   ├── Poppins-Medium.ttf
│   │   ├── Poppins-MediumItalic.ttf
│   │   ├── Poppins-Regular.ttf
│   │   ├── Poppins-SemiBold.ttf
│   │   ├── Poppins-SemiBoldItalic.ttf
│   │   ├── Poppins-Thin.ttf
│   │   └── Poppins-ThinItalic.ttf
│   ├── icons 
│   │   ├── air_icon.svg
│   │   ├── anti_theft_icon.svg
│   │   ├── arrow.svg
│   │   ├── calendar_icon.svg
│   │   ├── control_panel_icon.svg
│   │   ├── cookie_icon.svg
│   │   ├── cpu_icon.svg
│   │   ├── dashboard_icon.svg
│   │   ├── diagnosis_icon.svg
│   │   ├── electric_icon.svg
│   │   ├── email_icon.svg
│   │   ├── engine_icon.svg
│   │   ├── facebook_icon.svg
│   │   ├── filter_icon.svg
│   │   ├── fuel_icon.svg
│   │   ├── key_icon.svg
│   │   ├── map_icon.svg
│   │   ├── phone_icon.svg
│   │   ├── road_icon.svg
│   │   ├── status_icon.svg
│   │   └── wrench_icon.svg
│   ├── images
│   │   ├── animation-logo.mp4
│   │   ├── empty-carousel-image.svg
│   │   ├── empty-used-cars-image.jpeg
│   │   ├── home-image.jpeg
│   │   └── services-image.jpeg
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── index.css
    ├── index.js
    ├── js
    │   ├── App.js
    │   ├── components 
    │   ├── hooks
    │   ├── logic
    │   ├── sections
    │   └── utils
    └── styles 
        ├── App.css
        ├── components
        ├── sections
        └── variables.css

18 directories, 69 files
</pre>

<br>

## 🏗️ System Architecture 
🌐 **Client-side (React app)**
  - Supabase interactions via Serverless API

⚙️ **Serverless Functions**
   - Implemented as Vercel Functions
   - Act as middleware between frontend and backend
     
☁️ **Backend / BaaS (Supabase)**
   - PostgreSQL database for used car data
   - Storage bucket for used car images
   - Row-level security with custom policies
   - Optimized with indexes for performance
   - Accessed via RESTful API

📦 **Deployment**
   - Source control: GitHub
   - Automatic deployment to Vercel on push to main
<br> 

![image](https://github.com/user-attachments/assets/14279d07-681d-4c55-9175-cb0619df5960)

<br>
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
      - Scalable deployment workflow (automatic deploy on Vercel)

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

## 📡 API Documentation

<br>

## 🧪 Testing

<br>

## 🚀 Deployment
The project follows a fully automated deployment pipeline using **Vercel** and **GitHub** : 
- Vercel is connected to the GitHub repository
- Every successful commit to main is automatically built and deployed to https://mmeletricarservice.it
- Preview deploys are generated for other branches and PRs
- Real-time analytics and performance insights are available via Vercel Dashboard
- Rollbacks and previous deploys are tracked for recovery or auditing

**🔐 Environment Variables**
Environment-specific secrets (Supabase project keys) are:
- Defined in a local `.env` file (excluded from version control)
- Securely configured via the Vercel Dashboard
- Not exposed to the browser

<br>
<img width="651" alt="image" src="https://github.com/user-attachments/assets/e63ab0a0-10a9-4089-bcb1-f39296f57e9e" />
<br>
<br>
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

## 👨‍💻 Author
**Michele Patella**
