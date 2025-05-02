# 🌐 [mmeletricarservice.it](https://mmeletricarservice.it)

### 📌 What
A production-ready, full-stack web application developed for MM Eletricar Service, an Italian car workshop and used car dealership.
<br>
### ❓ Why
To enhance the company's digital presence and operational efficiency through a modern, responsive, and informative web platform.
<br>
### 👤 Who
Designed for customers, providing detailed information about the company — including its values, location, and contact details — along with an overview of services and a seamless browsing experience for available used vehicles.
<br>
### 📅 When
Launched in February 2025.
<br>
### 🌎 Where
The web application is available at https://mmeletricarservice.it 🌐

<br>

## 👁️ Table of Content
- [Tech Stack](#️-tech-stack)
- [Pages & Project Structure](#-pages--project-structure)
- [System Architecture](#%EF%B8%8F-system-architecture)
- [Software Engineering Principles](#-software-engineering-principles)
- [API Documentation](#-api-documentation)
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
├── lighthouse.pdf
├── package-lock.json
├── package.json
├── public
│   ├── doc 
│   ├── favicon 
│   ├── font 
│   ├── icons 
│   ├── images
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
      - Modern image format (AVIF)
      - Optimized for Lighthouse metrics and fast time-to-interactive
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
The following API endpoints are implemented as Serverless Functions, hosted on Vercel.

### 1. Get used cars overview
- **Description**: Returns an array of used car overviews with the first available image for each car.
- **URL**: `/api/usedCarsOverview`
- **Method**: `GET`
- **Query Params**: `None`
- **Response**: `JSON`

<pre>
  {
  "used_cars_overview": [
    {
      "id": 1,
      "name": "Fiat Panda",
      "price": "7.200,00",
      "year": "2015",
      "mileage": "80.000",
      "fuel": "Diesel",
      "status": "Ottimo",
      "image": "https://..."
    },
    ...
  ]
}
</pre>

| Field     | Type    | Description                                                        |
|-----------|---------|--------------------------------------------------------------------|
| `id`      | Integer | Unique identifier of the used car.                                 |
| `name`    | String  | Name or model of the used car                                      |  
| `price`   | Float   | Displayed price in euros, formatted as a string.                   |
| `year`    | Integer | Year of registration or manufacturing.                             |
| `mileage` | Integer | Kilometers driven, formatted as a string.                          |
| `fuel`    | String  | Type of fuel.                                                      |
| `status`  | String  | Overall condition.                                                 |
| `image`   | String  | Public URL of the first (overview) image of the car.               |

<br>

### 2. Get used car info
- **Description**: Returns complete details for a specific used car, including technical specifications and all associated images.
- **URL**: `/api/usedCarInfo`
- **Method**: `GET`
- **Query Params**: `id` (of the requested used car)
- **Response**: `JSON`
<pre>
  {
  "used_car_info": [
    {
      "id": 1,
      "engine_displacement": "1.200",
      "cylinders": "4",
      "power": "69",
      "transmission": "Manuale (5)",
      "consumption": "5,5-6,0",
      "emission_class": "Euro 6",
      "emissions": "127-137",
      "doors": "5",
      "bodywork": "Utilitaria",
      "external_color": "Rosso",
      "internal_color": "Grigio/Rosso",
      "internal_material": "Tessuto",
      "seats": "5",
      "images": [
        "https://..."
        ...
      ]
    },
    ...
  ]
}
</pre>

| Field               | Type             | Description                                                                |
|--------------------|------------------|-----------------------------------------------------------------------------|
| `id`               | Integer          | Unique identifier of the used car.                                          |
| `engine_displacement` | Integer       | Engine size in liters.                                                      |
| `cylinders`        | Integer          | Number of engine cylinders.                                                 |
| `power`            | Integer          | Engine power in CV.                                                         |
| `transmission`     | String           | Type of transmission.                                                       |
| `consumption`      | String           | Fuel consumption in L/100km.                                                |
| `emission_class`   | String           | Emission standard.                                                          |
| `emissions`        | String           | CO₂ emissions in g/km.                                                      |
| `doors`            | Integer          | Number of doors.                                                            |
| `bodywork`         | String           | Body type.                                                                  |
| `external_color`   | String           | Exterior color of the car.                                                  |
| `internal_color`   | String           | Interior color scheme.                                                      |
| `internal_material`| String           | Interior material.                                                          |
| `seats`            | Integer           | Number of seats.                                                           |
| `images`           | Array of Strings | List of public image URLs for this car.                                     |

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
| Performance      |             96                |
| Accessibility    |             90                |
| Best Practices   |            100                |
| SEO              |            100                |

### ⚡️ Performance

| Metric                    | Target                   |
|---------------------------|--------------------------|
| First Contentful Paint    |          0.9 s           |
| Largest Contentful Paint  |       2.7 s              |
| Total Blocking Time       |            60 ms         |
| Cumulative Layout Shift   |             0            |
| Speed Index               |            2.1 s         |

<br>

> More details: [Lighthouse Report](./lighthouse.pdf)

<br>

## 👨‍💻 Author
**Michele Patella**

<br>

> Last update: 
