# 🌐 [mmeletricarservice.it](https://mmeletricarservice.it)

### 📚 Table of Content

- [👁️ Overview](#️-overview)
- [🛠️ Tech Stack](#️-tech-stack)
- [📌 Software Engineering Principles](#-software-engineering-principles)
- [🏗️ System Architecture](#%EF%B8%8F-system-architecture)
- [🌐 Client-side](#-client-side)
- [⚙️ Serverless Functions](#%EF%B8%8F-serverless-functions)
- [🔄 Data Fetching & Caching](#-data-fetching--caching)
- [☁️ Backend / BaaS](#%EF%B8%8F-backend--baas)
- [📦 Deployment & CI/CD](#-deployment--cicd)
- [🔐 Environment Variables](#-environment-variables)
- [🔍 SEO & Analytics](#-seo--analytics)
- [📈 Metrics](#-metrics)
- [🌎 Impact on the Real World](#-impact-on-the-real-world)
- [👨‍💻 Author](#-author)

<br>

## 👁️ Overview

### 📌 What

A production-ready, full-stack web application developed for MM Eletricar Service, an Italian car workshop and used car dealership.
<br>

### ❓ Why

To enhance the company's digital presence and give customers clear, accessible information for confident decision-making. 
<br>

### 👤 Who

Designed for customers exploring company details, services, and used vehicles.
<br>

### 📅 When

Launched in February 2025.
<br>

### 🌎 Where

The web application is available at https://mmeletricarservice.it 🌐

<br>

## 🛠️ Tech Stack

| Layer                    | Technology                              |
| ------------------------ | --------------------------------------- |
| ⚛️ Frontend              | React.js                                |
| 🖌️ UI Library            | Ant Design                              |
| 🎨 Styling               | CSS + Custom Design Tokens              |
| 🌀 Animations            | CSS + Framer Motion                     |
| 🧭 Routing               | React Router (HashRouter)               |
| 🧩 State Management      | React Hooks + Custom Hooks              |
| 🔄 Fetching & Caching    | React Query                             |
| ⚙️ API Communication     | Serverless API (Vercel Functions)       |
| ☁️ Backend-as-a-Service  | Supabase (PostgreSQL, Storage)          |
| 🔐 Environment Variables | .env + Vercel Dashboard                 |
| 🧪 Testing               | Jest + React Testing Library            |
| 🧹 Code Quality          | ESLint + Prettier                       |
| 📦 Deployment & CI/CD    | Vercel + GitHub                         |
| 🔍 SEO                   | Clean URLs, HTTPS, Meta Tags, Local SEO |
| 📊 Monitoring            | Vercel Logs + Error Tracking            |
| 📈 Analytics             | Vercel Analytics                        |

<br>

## 📌 Software Engineering Principles

This project follows the best practices of software engineering:

<details>
<summary>🧱 ### Modularity</summary>

- Components follow the Single Responsibility Principle
- Clear separation between UI, business logic, and styling
- Logic encapsulated via custom hooks and shared utility functions
- Sections are structured as atomic, composable components

</details>

<details>
<summary>🛠️ <strong>Maintainability</strong></summary>

- Clean and consistent codebase
- ESLint and Prettier for formatting
- Well-documented code with meaningful names and docstrings
- Centralized constants and links (`const.js` and `links.js`) for easier updates
- Use of centralized CSS variables and design tokens
- Tests colocated with components for better traceability

</details>
   
<details>
<summary>♻️ <strong>Reusability</strong></summary>

- Common components reused across multiple pages
- DRY (Don't Repeat Yourself) principles followed across logic and styles

</details>
  
<details>
<summary>🚀 <strong>Scalability</strong></summary>

- Backend powered by Supabase (PostgreSQL), allowing seamless scaling
- Indexes created to optimize data retrieval
- Vercel's serverless functions scale automatically with demand, including a caching system
- Fetching and caching handled with React Query
  - Automatic deduplication of requests
  - Background re-fetching for data freshness
  - Query invalidation for precise cache control

</details>
  
<details>
<summary>✅ <strong>Reliability & Robustness</strong></summary>

- Error handling for API and UI (try-catch, logging, and Vercel monitoring)
- Loading states and fallback UIs improve resilience
- Automated tests with Jest and React Testing Library
- Data integrity ensured via database constraints, foreign keys, and Row-Level Security policies

</details>

<details>
<summary>🔐 <strong>Security & Compliance</strong></summary>

- GDPR compliance: cookie consent, legal/privacy notes
- Safe handling of third-party cookies
- No sensitive data exposed client-side
- Row-Level Security policies on Supabase

</details>

<details>
<summary>⚡️ <strong>Performance & Efficiency</strong></summary>

- Lazy loading
- Modern image format (AVIF)
- Optimized for Lighthouse metrics
- Session caching of used car data
- React Query for efficient data fetching and caching

</details>

<details>
<summary>🧠 <strong>Abstraction</strong></summary>

- Business logic abstracted via hooks and functions
- Reusable component library supports consistent UI patterns
- Centralized configuration

</details>

<details>
<summary>🔄 <strong>Change Readiness</strong></summary>

- Environment variables and settings externalized for flexibility
- Scalable deployment workflow supporting future changes
- CI/CD pipeline ensure safe, repeatable updates

</details>

<details>
<summary>👤 <strong>Usability</strong></summary>

- Clean, intuitive, and consistent UI aligned with branding
- Accessibility best practices
- Responsive navigation (anchor menu on desktop, drawer on mobile)
- Fast feedback to user actions
- Mobile-first design, tested on 20+ devices and viewports
- Clear visual hierarchy to reduce cognitive load
- SEO-optimized for discoverability

</details>

<br>

## 🏗️ System Architecture

🌐 **Client-side**

- Supabase interactions via Serverless API
- Interaction implemented via React Query, called from React components

⚙️ **Serverless Functions**

- Implemented as Vercel Functions
- Act as middleware between frontend and backend

🔄 **Data Fetching & Caching**

- Handled via React Query
- Redundant requests prevented
- Better managament of loading, error, and success states

☁️ **Backend / BaaS**

- PostgreSQL database for used car data
- Storage bucket for used car images
- Accessed via RESTful API

📦 **Deployment & CI/CD**

- GitHub + Vercel: automatic deploys on push to `main` and previews for PRs
- CI pipeline runs automated unit and integration tests on every commit
- Rollbacks, env variables, and analytics managed via Vercel dashboard

<br>

<img width="776" alt="image" src="https://github.com/user-attachments/assets/1d2d3b30-c13b-476a-8401-cab627842d89" />

<br>
<br>

## 🌐 Client-side

The client-side is a modern, production-grade React.js application.

- **Component-driven Architecture**: UI compose of reusable, atomic components
- **Routing**: Navigation managed via Hash Routing, supporting both static and dynamic routes
- **Styling & Theming**: Styling using Ant Design components, CSS and design tokens
- **State Management**: Local state handled with React's hooks (`useState`, `useEffect`, etc.) and logic is abstracted into custom hooks to promote reuse
- **Data Fecthing & Caching**: Data fetching and caching handled via React Query
- **Performance & Optimization**: Lazy loading, image modern formats and other tricks to optimize performance
- **Responsive & Accessible UI**: Design follows mobile-first approach, enhanced by advanced UI components and animations

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

## ⚙️ Serverless Functions

The API endpoints are implemented as Serverless Functions, hosted on Vercel, and accessed through a centralized fecther utility. This architecture allows for modular, scalable, and stateless backend logic with minimal overhead.

### 1. Get used cars overview

- **Description**: Returns an array of used car overviews with the first available image for each car.
- **URL**: `/api/usedCarsOverview`
- **Method**: `GET`
- **Query Params**: `None`
- **Response**: `JSON`

<br>

| Field     | Type    | Description                                          |
| --------- | ------- | ---------------------------------------------------- |
| `id`      | Integer | Unique identifier of the used car.                   |
| `name`    | String  | Name or model of the used car.                       |
| `price`   | Float   | Displayed price in euros.                            |
| `year`    | Integer | Year of registration or manufacturing.               |
| `mileage` | Integer | Kilometers driven.                                   |
| `fuel`    | String  | Type of fuel.                                        |
| `status`  | String  | Overall condition.                                   |
| `image`   | String  | Public URL of the first (overview) image of the car. |

<br>

Response example:

<pre>
  {
  "used_cars_overview": [
    {
      "id": 1,
      "name": "Fiat Panda",
      "price": 7200,
      "year": 2015,
      "mileage": 80000,
      "fuel": "Diesel",
      "status": "Ottimo",
      "image": "https://..."
    },
    ...
  ]
}
</pre>

<br>

### 2. Get used car info

- **Description**: Returns complete details for a specific used car, including technical specifications and all associated images.
- **URL**: `/api/usedCarInfo`
- **Method**: `GET`
- **Query Params**: `id` (of the requested used car)
- **Response**: `JSON`

<br>

| Field                 | Type             | Description                             |
| --------------------- | ---------------- | --------------------------------------- |
| `id`                  | Integer          | Unique identifier of the used car.      |
| `engine_displacement` | Integer          | Engine size in liters.                  |
| `cylinders`           | Integer          | Number of engine cylinders.             |
| `power`               | Integer          | Engine power in CV.                     |
| `transmission`        | String           | Type of transmission.                   |
| `consumption`         | String           | Fuel consumption in L/100km (min-max).  |
| `emission_class`      | String           | Emission standard.                      |
| `emissions`           | String           | CO₂ emissions in g/km (min-max).        |
| `doors`               | Integer          | Number of doors.                        |
| `bodywork`            | String           | Body type.                              |
| `external_color`      | String           | Exterior color of the car.              |
| `internal_color`      | String           | Interior color scheme.                  |
| `internal_material`   | String           | Interior material.                      |
| `seats`               | Integer          | Number of seats.                        |
| `images`              | Array of Strings | List of public image URLs for this car. |

<br>

<pre>
  {
  "used_car_info": [
    {
      "id": 1,
      "engine_displacement": 1200,
      "cylinders": 4,
      "power": 69,
      "transmission": "Manuale (5)",
      "consumption": "5,5-6,0",
      "emission_class": "Euro 6",
      "emissions": "127-137",
      "doors": 5,
      "bodywork": "Utilitaria",
      "external_color": "Rosso",
      "internal_color": "Grigio/Rosso",
      "internal_material": "Tessuto",
      "seats": 5,
      "images": [
        "https://..."
        ...
      ]
    },
    ...
  ]
}
</pre>

<br>

## 🔄 Data Fetching & Caching

**📡 Declarative Data Fetching**

- Minimizes redundant requests
- Simplifies data fetching using `useQuery`

**🧠 Cache-First Approach**

- Retrieves data from cache before network request
- Cached data is revalidated for freshness

**🔁 Automatic Background Refetching**

- Periodic background re-fetching for up-to-date info
- Reduces perceived latency for a seamless UX

**⏳ Stale-While-Revalidate**

- Shows cached data immediately while fetching new data
- New data replaces old data seamlessly for an uninterrupted experience

**🛡️ Error Handling & Retries**

- Built-in retry mechanism with exponential backoff for failed requests
- Ensures resilience during temporary issues (e.g., network failures)

**🚫 Query Deduplication**

- Prevents redundant requests for the same data
- Reduces server load and improves performance

<br>

## ☁️ Backend / BaaS

The backend architecture levarages Supabase as a Backend-as-a-Service platform, combining PostgreSQL database and Storage bucket in a scalable environment.

💿 **Data Layer**

- Relational database
- Index created on the `id` fields to optimize query performance
- Foreign key relationships established among tables to maintain data integrity
- `ON DELETE CASCADE` to ensure the proper handling of related data when records are deleted
- Attributes governed by contraints to enforce rules for data quality and consistency (`NOT NULL`, `CHECK`)

🖼️ **Storage**

- All used car images are stored in Supabase buckets with public access policies
- Folder naming follows a strict convention (id of the used car) to allow deterministic fetching

🔐 **Row-Level Security (RLS)**

- RLS policies restrict accesses
- Insert/update/delete operations are blocked client-side and managed exclusively through admin interfaces
- Policies are written in SQL to robust protection

<br>

**Schema**:

<img width="863" alt="image" src="https://github.com/user-attachments/assets/d24ccc16-5b29-4b38-b0b5-695cc110c280" />

<br>
<br>

## 📦 Deployment & CI/CD

- Fully automated pipeline with Vercel and GitHub integration
- Commits to `main` trigger instant production builds at [mmeletricarservice.it](https://mmeletricarservice.it)
- Preview deployments created for all branches and PRs for testing and review
- CI runs tests on every push and PR
- Real-time build, deployment, and performance monitoring via Vercel Dashboard
- Versioned deploys with easy rollback to previous stable releases
- Secure management of environment variables and secrets in Vercel
- Enables rapid, reliable delivery aligned with modern DevOps best practices

<br>

## 🔐 Environment Variables

Environment variables are used to manage in a secure, scalable and maintanable way, all sensible configurations and secrets of the web application.

Environment-specific secrets (Supabase project keys) are:

- Defined in a local `.env` file, excluded from version control, by using `.gitignore`
- Securely configured via the Vercel Dashboard, to manage them in a centralized and secure way
- Not exposed to the browser
- Taken from `.env` while developing the application
- Injected by Vercel, when the application is deployed

<br>

## 🔍 SEO & Analytics

Search engine optimization has been implemented to ensure the web application is discoverable and ranks well for relevant queries.

- **Clean URLs**: Localized, human-readable URLs enhance both user experience and search relevance
- **Keyword-Optimized Content**: Text content has been carefully crafted with relevant keywords to improve rankings
- **HTTPS**: The entire application runs over a secure HTTPS connection
- **Google Maps Integration**: Embedded Google Maps via `<iframe>` supports local SEO targeting
- **Favicon and Branding**: A custom favicon and consistent branding improve recognizability in search results and browser tabs

Vercel Analytics is used to monitor and optimize the UX and app performance. It offers valuable insights into the real-world usage of the app, including key metrics such as:

- Visitors
- Page Views
- Bounce Rate
- Countries
- Devices
- Browsers
- Operating Systems
- Pages
- Routes
- Hostname
- Referrers
- UTM Parameters

Vercel Analytics provides a privacy-friendly and cookie-free solution, ensuring compliance with privacy regulations while delivering essential insights into the app's performance and user engagement. This approach ensures that the application can continuously improve based on real, actionable data, without compromising user privacy.

<br>

## 📈 Metrics

### 📊 Lighthouse Scores

| Category       | Score (%) |
| -------------- | --------- |
| Performance    | 96        |
| Accessibility  | 90        |
| Best Practices | 100       |
| SEO            | 100       |

### ⚡️ Performance

| Metric                   | Target |
| ------------------------ | ------ |
| First Contentful Paint   | 0.9 s  |
| Largest Contentful Paint | 2.7 s  |
| Total Blocking Time      | 60 ms  |
| Cumulative Layout Shift  | 0      |
| Speed Index              | 2.1 s  |

### ☁️ Backend / Baas (Supabase)

| Metric             | Target (Average) |
| ------------------ | ---------------- |
| API Response Speed | 111.5 ms         |
| Memory Usage       | 45%              |
| Average CPU Usage  | 0.74%            |
| CPU Throttle       | 11.7%            |
| Hot start          | 35.3%            |
| Cold start         | 33.3%            |
| Prewarmed start    | 31.4%            |

### ⚙️ Serverless Functions

| Metric             | Target (Average) |
| ------------------ | ---------------- |
| Error rate         | 0%               |
| Timeout rate       | 0.3%             |
| Time to First Byte | 573 ms           |
| Memory Usage       | 116 MB           |

### 📦 Deployment & CI/CD

| Metric      | Target (Average) |
| ----------- | ---------------- |
| Deploy time | 42 s             |

<br>

## 🌎 Impact on the Real World

The platform demonstrates how thoughtful design and technology can directly improve customer experience and business performance.

### 💻 Enhanced Operational Efficiency

Customers can easily explore services, access company information, and browse used cars with detailed specifications, reducing customer support workload while providing accurate, timely information.

### 🏙️ Support for Local Businesses

The digital platform helps the local business stand out, boosting visibility, and supporting economic growth.

### 💡 Empowerment Through Information

Providing clear information, the platform helps customers make informed decisions, increasing confidence and trust.

### 📊 Data-Driven Business Insights

The platform collects anonymized usage data useful to understand customer behavior, optimize inventory, and guide long-term strategy.

<br>

## 👨‍💻 Author

**Michele Patella**

<br>

> Last update: June 24, 2025
