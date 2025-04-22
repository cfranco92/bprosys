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

- **Framework**: [Next.js](https://nextjs.org/) (App Router) v15.3.1
- **Language**: [TypeScript](https://www.typescriptlang.org/) v5
- **Styling**: [TailwindCSS](https://tailwindcss.com/) v4 + [Styled Components](https://styled-components.com/) v6.1.17
- **Charts**: [Chart.js](https://www.chartjs.org/) v4.4.9 and [react-chartjs-2](https://react-chartjs-2.js.org/) v5.3.0
- **React**: v19.0.0

## 🎨 Styling Approach: Tailwind CSS + Styled Components

We use a hybrid styling approach that combines the advantages of both **Tailwind CSS** and **styled-components**.

### When to use each technology

#### Tailwind CSS for:

- **Basic layouts**: Containers, grids, flexbox, spacing, and positioning
- **Simple visual utilities**: Margins, padding, background colors, basic borders
- **Responsive design**: Media queries through breakpoint prefixes like `md:`, `lg:`
- **Elements without state logic**: Static components without complex variants

```jsx
// Example of using Tailwind for layouts
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
  {items.map(item => (
    <ItemCard key={item.id} item={item} />
  ))}
</div>
```

#### Styled Components for:

- **Reusable UI components**: Buttons, cards, badges, tabs
- **Components with variants**: Elements that change appearance based on props
- **Components with complex styling logic**: Styles dependent on multiple conditions
- **Design abstractions**: Components that encapsulate behavior and style

```jsx
// Example of a reusable component with styled-components
const Button = styled.button<{ $variant: 'primary' | 'secondary' }>`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  
  ${props => props.$variant === 'primary' 
    ? `background-color: blue; color: white;` 
    : `background-color: gray; color: black;`
  }
`;
```

### Reusable Components

We've created several reusable components in the `src/common/styled-components/` folder:

- **Button**: Button with variants (primary, secondary, outline)
- **Card**: Card with optional header, body, and footer
- **Badge**: Label for categories or states
- **InfoRow**: Information rows with label and value
- **Section**: Container for page sections
- **ImageWithFallback**: Image component with fallback
- **CategoryTabs**: Tabs for category filtering

### Usage Principles

1. **Don't duplicate styles**: Prefer reusing existing styled components
2. **Visual consistency**: Use reusable components to maintain coherence
3. **Maintain separation of concerns**:
   - Use Tailwind for structure and spacing
   - Use styled-components for behaviors and variants
4. **Adopt established patterns**: Follow patterns from existing components

### Practical Example: Product Component

```jsx
// Using both approaches in a component
import Card from '@/common/styled-components/Card';
import Badge from '@/common/styled-components/Badge';

const ProductComponent = ({ product }) => (
  <div className="p-4 md:p-6"> {/* Tailwind for spacing */}
    <Badge variant="success" rounded> {/* styled-component for badge */}
      {product.category}
    </Badge>
    
    <h3 className="text-xl font-semibold my-3"> {/* Tailwind for typography */}
      {product.name}
    </h3>
    
    <Card> {/* styled-component for card */}
      <Card.Body>
        {/* Content... */}
      </Card.Body>
    </Card>
  </div>
);
```

### Migration and Maintenance

As we evolve the codebase:

1. New components should follow the hybrid approach described here
2. When refactoring existing components, migrate to this model
3. Keep documentation of reusable components updated

## 🚦 Installation and Usage

### Prerequisites

- Node.js 16.8 or higher (as specified in package.json engines)
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

### Current Structure

```
bprosys/
├── public/               # Static files
├── src/
│   ├── app/              # Next.js App Router routes
│   │   ├── page.tsx      # Main page
│   │   ├── layout.tsx    # Main layout
│   │   ├── globals.css   # Global styles
│   │   ├── not-found.tsx # 404 page
│   │   └── product/      # Dynamic product detail route
│   ├── common/           # Shared components
│   │   ├── components/   # Page/functional components
│   │   │   └── templates/# Page templates
│   │   └── styled-components/ # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   ├── services/         # External services integration
│   ├── utils/            # Utility functions
│   ├── context/          # React context providers
│   ├── constants/        # Application constants
│   ├── providers/        # React providers configuration
│   └── data/             # Mock data for development
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration
├── eslint.config.mjs     # ESLint configuration
└── package.json          # Dependencies and scripts
```

### Structure Implementation (Clean Architecture)

The proposed structure has been implemented, reorganizing the code following Clean Architecture principles:

1. **Separation of concerns**: Each folder has a clear and defined purpose.
2. **Framework independence**: Business logic is separated from UI components.
3. **Improved testability**: By separating layers, it's easier to test each one in isolation.
4. **Better scalability**: Makes project growth easier without increasing complexity.
5. **Improved maintainability**: Clear organization makes it easier for developers to find and modify code.

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
