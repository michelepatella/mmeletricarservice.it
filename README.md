# 🌐 [mmeletricarservice.it](https://mmeletricarservice.it)

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
- [🔍 SEO & Analytics](#-seo--analytics)
- [📈 Metrics](#-metrics)
- [🌎 Impact on the Real World](#-impact-on-the-real-world)
- [👨‍💻 Author](#-author)

<br>

## 👁️ Overview

📌 **What**

A production-ready, full-stack web application developed for MM Eletricar Service, an Italian car workshop and used car dealership.
<br>

❓ **Why**

To enhance the company's digital presence and give customers clear, accessible information for confident decision-making.
<br>

👤 **Who**

Designed for customers exploring company details, services, and used vehicles.
<br>

📅 **When**

Launched in February 2025.
<br>

🌎 **Where**

The web application is available at https://mmeletricarservice.it 🌐

<br>

## 🛠️ Tech Stack

| Layer                    | Technology                                                 |
| ------------------------ | ---------------------------------------------------------- |
| ⚛️ Frontend              | React.js                                                   |
| 🖌️ UI Library            | Ant Design                                                 |
| 🎨 Styling               | CSS, Custom Design Tokens                                  |
| 🌀 Animations            | CSS, Framer Motion                                         |
| 🧭 Routing               | React Router (HashRouter)                                  |
| 🧩 State Management      | React Hooks, Custom Hooks                                  |
| 🔄 Fetching & Caching    | React Query                                                |
| ⚙️ API Communication     | Serverless API (Vercel Functions)                          |
| ☁️ Backend-as-a-Service  | Supabase (PostgreSQL, Storage)                             |
| 🔐 Environment Variables | .env, Vercel Environment Variables, GitHub Action Secrets  |
| 🧪 Testing               | Jest, React Testing Library                                |
| 🧹 Code Quality          | ESLint, Prettier                                           |
| 📦 Deployment & CI/CD    | Vercel, GitHub Actions                                     |
| 🔍 SEO                   | Clean URLs, HTTPS, Meta Tags, Local SEO                    |
| 📊 Monitoring            | Vercel Logs, Error Tracking                                |
| 📈 Analytics             | Vercel Analytics                                           |

<br>

## 📌 Software Engineering Principles

This project follows the best practices of software engineering:

<details>
<summary>🧠 <strong>Abstraction</strong></summary>

- Business logic abstracted via hooks and functions
- Reusable component library supports consistent UI patterns
- Centralized configuration

</details>

<details>
<summary>🔄 <strong>Change Readiness</strong></summary>

- Environment variables and settings externalized for flexibility
- CI/CD pipeline ensure safe, repeatable updates

</details>

<details>
<summary>🛠️ <strong>Maintainability</strong></summary>

- Clean and consistent codebase
- ESLint and Prettier for formatting
- Well-documented code with meaningful names and docstrings
- Centralized constants and links (`const.js` and `links.js`) for easier updates
- Use of centralized CSS variables
- Tests colocated with components for better traceability

</details>

<details>
<summary>🧱 <strong>Modularity</strong></summary>

- Components follow the Single Responsibility Principle
- Clear separation between UI, business logic, and styling
- Logic encapsulated via custom hooks and shared utility functions
- Sections are structured as atomic, composable components

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
<summary>✅ <strong>Reliability & Robustness</strong></summary>

- Error handling for API and UI (try-catch, logging, and Vercel monitoring)
- Loading states and fallback UIs improve resilience
- Automated tests with Jest and React Testing Library
- Data integrity ensured via database constraints, foreign keys, and Row-Level Security policies

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
- Scalable CI/CD pipeline

</details>

<details>
<summary>🔐 <strong>Security & Compliance</strong></summary>

- GDPR compliance: cookie consent, legal/privacy notes
- Safe handling of third-party cookies
- No sensitive data exposed client-side
- Row-Level Security policies on Supabase

</details>

<details>
<summary>👤 <strong>Usability</strong></summary>

- Clean, intuitive, and consistent UI aligned with branding
- Accessibility best practices
- Responsive navigation (anchor menu on desktop, drawer on mobile)
- Fast feedback to user actions
- Mobile-first design, tested on 20+ devices and viewports
- Clear visual hierarchy to reduce cognitive load

</details>

<br>

## 🏗️ System Architecture

The system is built on a **Jamstack architecture** shown below:

<img width="500" height="800" alt="image" src="https://github.com/user-attachments/assets/12749716-971e-41ff-a924-6f5d0d78fec7" />

<br>
<br>

### 🌐 Client-side

🎯 **Role**  
It represents the UI of the application, developed as a Single-Page Application.  
It represents the frontend of the system: everything the user sees and interacts with.

🛡️ **Responsibility**  
It's responsible for:

- UI rendering (through _React Components_)
- User interactions management
- Data fetching and caching (via its internal _Data Fetching & Caching_ layer)

<br>

### 🔄 Data Fetching & Caching

🎯 **Role**  
It serves as the dedicated layer to manage all data fetching and caching in the client-side application.  
It ensures efficient, reliable, and up-to-date data delivery.

🛡️ **Responsibility**  
It's responsible for:

- Data fetching using `useQuery`, custom logic and hooks
- Cache-first retrieval using `STALE_TIME` to minimize unnecessary network requests
- Query deduplication to prevent simultaneous duplicate requests and reduce server load
- Error logging when a fetch fails

<br>

### ⚙️ Serverless Functions

The API endpoints are implemented as Serverless Functions, hosted on Vercel, and accessed through a centralized fecther utility. This architecture allows for modular, scalable, and stateless backend logic with minimal overhead.

#### 1. Get used cars overview

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

#### 2. Get used car info

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

### ☁️ Backend / BaaS

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

The project uses a fully automated pipeline to validate, build, and deploy the application.

**🧪 Continuous Integration (CI)**  
Runs on every push, and pull request to `main`:
  - Install dependencies
  - Run linting and Prettier checks
  - Run automated tests
  - Build the project

**🚀 Continuous Deployment (CD)**  
Triggered after successful CI:
  - Install dependencies
  - Build the project
  - Deploy to Vercel

The application is deployed to Vercel, hosting the frontend and serverless functions, with features including:  
- Domain management
- Preview deployments for all branches and pull requests
- Versioned deployments with easy rollback to previous stable releases
- Management of environment variables
- Automatic caching of static content and serverless responses at the edge
- Automatic scaling with traffic demand
- Security features including firewall
- Logs monitoring
- Integrated analytics 

<br>

## 🔐 Environment Variables

Environment variables manage all sensitive configurations and secrets of the application in a secure, scalable, and maintainable way.  

Sources of environment variables:  
- **📝 Local `.env` file** (`DATABASE_URL`, `SUPABASE_ANON_KEY`)  
  - Used during development  
  - Excluded from version control via `.gitignore`
- **☁️ Vercel Environment Variables** (`DATABASE_URL`, `SUPABASE_ANON_KEY`)  
  - Used for production deployments  
  - Injected automatically during deployment
- **🔒 GitHub Actions Secrets**  
  - Used in CI/CD pipeline (`VERCEL_TOKEN`)  
  - Not exposed to the client-side  

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
