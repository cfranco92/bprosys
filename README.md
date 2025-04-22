# BProSys - Financial Products Catalog

A modern landing page for a fintech company showcasing a catalog of financial products, developed with Next.js, TypeScript, TailwindCSS and Styled Components.

## 🚀 Demo

[View Demo](https://bprosys.vercel.app)

## 🔍 Features

- **Mobile First Design**: Optimized experience for mobile devices.
- **Product Catalog**: Financial products grid with category filters.
- **Detail Page**: Detailed view of each product with performance charts.
- **Professional Design**: Trustworthy and accessible interface for financial products.
- **Solid Architecture**: Modular and well-typed components with TypeScript.
- **Optimized Performance**: Fast loading and fluid experience.

## 🛠️ Technologies

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) + [Styled Components](https://styled-components.com/)
- **Charts**: [Chart.js](https://www.chartjs.org/) and [react-chartjs-2](https://react-chartjs-2.js.org/)

## 🚦 Installation and Usage

### Prerequisites

- Node.js 16.8 or higher
- npm or yarn

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bprosys.git
   cd bprosys
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run in development mode:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Access the application:
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

1. Generate production build:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Run production version:
   ```bash
   npm start
   # or
   yarn start
   ```

## 📋 Project Structure

```
bprosys/
├── public/               # Static files
│   └── images/           # Images
├── src/
│   ├── app/              # Next.js App Router routes
│   │   ├── page.tsx      # Main page
│   │   ├── layout.tsx    # Main layout
│   │   └── product/[id]/ # Dynamic product detail route
│   ├── components/       # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── ...           # Other components
│   └── lib/              # Utilities and business logic
│       ├── data/         # Mock data
│       ├── hooks/        # Custom hooks
│       └── types/        # Type definitions
├── next.config.ts        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## 🤔 Complementary Questions

### 1. What criteria did you follow to design the UI for financial products?

For designing the UI of financial products, I followed these criteria:

1. **Reliability and Professionalism**: I used a sober color palette with blue as the main color, conveying trust, stability, and professionalism, which are fundamental aspects in the financial sector.

2. **Information Hierarchy**: I organized information clearly, highlighting key data such as interest rates or risk level, allowing users to make informed decisions quickly.

3. **Visual Consistency**: I maintained consistent design patterns (cards, buttons, labels) to facilitate recognition and reduce cognitive load.

4. **Accessibility**: I implemented high contrast between text and backgrounds, readable font sizes, and ARIA labels to improve the experience for users with visual limitations.

5. **Simplicity**: I simplified the presentation of complex information through clear visualizations and spacious organization, avoiding overwhelming the user.

6. **Mobile First**: I designed first for mobile devices, ensuring that the experience is optimal on small screens and then scales correctly to larger screens.

### 2. How did you decide when to use Tailwind and when to use Styled Components?

My approach to deciding between Tailwind CSS and Styled Components was based on the nature and complexity of each component:

1. **Tailwind CSS**: Used primarily for:
   - Layout and general structure (containers, grids, spacing)
   - Quick utilities (margins, paddings, flex)
   - Simple styles not dependent on logic
   - Base classes shared between components

2. **Styled Components**: Used for:
   - Reusable UI components with styling logic (buttons, cards, tabs)
   - Elements with conditional styles based on props
   - Components with complex animations or states
   - Design abstractions that encapsulate behavior and style

Combining both technologies allows leveraging the productivity of Tailwind for general structures and the flexibility of Styled Components for complex components. As a general rule, if the component encapsulates behavior along with styles or has variants based on props, I used Styled Components. For structure, layout, and simple utilities, Tailwind proved more straightforward and efficient.

### 3. What would you do to scale this project into a real digital banking application?

To scale this project to a real digital banking application, I would implement:

1. **Robust Architecture**:
   - Implement Clean Architecture clearly separating domain, use cases, and infrastructure
   - Develop a more robust state management system (Redux Toolkit or Zustand)
   - Define clear boundaries between modules using a documented Design System

2. **Security**:
   - Implement OAuth 2.0 / OpenID Connect authentication
   - Use JWT with token rotation and refresh tokens
   - Apply strict HTTPS, CSP, and CSRF protection
   - Implement end-to-end encryption of sensitive data

3. **Backend Integration**:
   - Develop a RESTful or GraphQL API with Node.js/Express or Next.js API Routes
   - Implement a BFF (Backend for Frontend) to optimize queries
   - Use efficient cache management (SWR or React Query)

4. **Performance and Scalability**:
   - Implement SSR/SSG selectively based on page type
   - Configure advanced caching strategies with Redis
   - Migrate to a microservices architecture for different modules
   - Implement CI/CD with automated testing

5. **User Experience**:
   - Add behavior-based personalization features
   - Implement real-time notification systems
   - Improve accessibility (WCAG AA or higher)
   - Add multilanguage support with i18n

6. **Operations**:
   - Implement advanced monitoring (Sentry, LogRocket)
   - Configure alerts and performance dashboards
   - Establish a feature flags system for gradual releases

### 4. What tools would you use to improve performance and monitoring in production?

To optimize performance and monitoring in production, I would implement:

1. **Performance Analysis**:
   - **Lighthouse/Web Vitals**: Automatic monitoring of core metrics (LCP, FID, CLS)
   - **Next.js Analytics**: Integrated Next.js-specific metrics
   - **WebPageTest**: Comprehensive periodic performance tests
   - **Bundle Analyzer**: Analysis of bundle size for optimization

2. **Real-Time Monitoring**:
   - **Sentry**: Frontend error tracking with complete stack traces
   - **LogRocket**: User session recording and playback
   - **Datadog/New Relic**: APM monitoring for backend and frontend
   - **Grafana + Prometheus**: Custom dashboards for critical metrics

3. **Continuous Optimization**:
   - **Next.js Image Component**: Automatic image optimization
   - **CDN (Vercel Edge Network/Cloudflare)**: Global distribution with low latency
   - **Service Workers**: Advanced caching and offline support
   - **Dynamic Imports**: On-demand loading of secondary components

4. **Business Metrics**:
   - **Mixpanel/Amplitude**: User behavior and journey analysis
   - **Google Analytics 4**: General usage and conversion metrics
   - **Smartlook**: Heat maps and selective session recording
   - **Fullstory**: Analysis of frustration and usability

This combination allows proactively detecting problems, continuously optimizing the experience, and correlating technical metrics with business indicators to prioritize improvements with greater impact.

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.
