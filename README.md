# Juspay UI Developer Assignment

A modern, responsive dashboard application built with Next.js 16, featuring a pixel-perfect implementation of the provided Figma design. This project showcases advanced UI/UX patterns, interactive data visualizations, and responsive design principles.

## 🚀 Live Demo

**Deployed Application:** [https://juspay-assignment-gkpw.vercel.app/](https://juspay-assignment-gkpw.vercel.app/)

## 🎨 Design

**Figma Design:** [View Design](https://www.figma.com/design/ZzpFsCT86yRXvRpGR5UodD/UI-Developer-Assignment?node-id=0-1&p=f&t=7fXcWNxC4fFdMTaJ-0)

This project is a pixel-perfect implementation of the provided Figma design, ensuring consistency across all screen sizes and maintaining design fidelity.

## 🎥 Demo 

https://github.com/user-attachments/assets/57b0e535-6ae5-40df-9a0e-47bf351fcedb


https://github.com/user-attachments/assets/73d5c94e-f20e-438b-b8c1-ef260383177b



## ✨ Features

- **📊 Interactive Dashboard**: Real-time data visualization with multiple chart types
- **🌓 Dark/Light Mode**: Seamless theme switching with persistent user preferences
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **🗺️ Interactive World Map**: Geographic revenue visualization using react-simple-maps
- **📈 Advanced Charts**: Line charts, pie charts, and bar charts using Recharts
- **🔍 Order Management**: Comprehensive order list with search, filter, and pagination
- **🎯 Pixel-Perfect Design**: Faithful implementation of Figma specifications
- **⚡ Performance Optimized**: Built with Next.js 16 for optimal performance
- **♿ Accessible**: Follows web accessibility best practices

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** [Recharts](https://recharts.org/)
- **Maps:** [react-simple-maps](https://www.react-simple-maps.io/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager:** Bun / npm
- **Deployment:** [Vercel](https://vercel.com/)

## 📁 Project Structure

```
juspay-assignment/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── DashboardView.tsx    # Main dashboard container
│   ├── Header.tsx           # Top navigation header
│   ├── Sidebar.tsx          # Left navigation sidebar
│   ├── RightSidebar.tsx     # Right sidebar with notifications
│   ├── StatCard.tsx         # Statistics card component
│   ├── RevenueChart.tsx     # Revenue line chart
│   ├── ProjectionsChart.tsx # Projections vs actuals chart
│   ├── TotalSalesChart.tsx  # Sales pie chart container
│   ├── SalesPieChart.tsx    # Responsive pie chart
│   ├── RevenueByLocation.tsx # Location revenue card
│   ├── WorldMap.tsx         # Interactive world map
│   ├── TopSellingProducts.tsx # Product list component
│   ├── OrderListView.tsx    # Order management view
│   ├── OrderTableRow.tsx    # Individual order row
│   ├── OrderToolbar.tsx     # Order actions toolbar
│   ├── OrderFilter.tsx      # Order filtering component
│   ├── OrderPagination.tsx  # Pagination controls
│   └── Icons.tsx            # SVG icon components
├── data/                    # Mock data
│   ├── index.ts            # Data exports
│   └── orders.ts           # Order data
├── hooks/                   # Custom React hooks
│   ├── useTheme.tsx        # Theme management hook
│   └── useSidebar.tsx      # Sidebar state hook
├── types/                   # TypeScript type definitions
│   └── index.ts            # Shared types
└── public/                  # Static assets
    └── images/             # Image files

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/bibekkd/juspay-assignment.git
cd juspay-assignment
```

2. **Install dependencies**

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

Using bun:
```bash
bun install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

The page will auto-reload when you make changes to the code.

### Build for Production

```bash
npm run build
npm start
```

This will create an optimized production build and start the production server.

## 📦 Component Documentation

### Core Components

#### `DashboardView`
Main dashboard container that orchestrates all dashboard widgets and charts.

**Props:** None

**Features:**
- Responsive grid layout
- Stat cards with growth indicators
- Multiple chart visualizations
- Top selling products list

#### `Header`
Top navigation bar with search, notifications, and user profile.

**Props:** None

**Features:**
- Global search functionality
- Theme toggle (dark/light mode)
- Notification center
- User profile dropdown

#### `Sidebar`
Left navigation sidebar with menu items and user information.

**Props:** None

**Features:**
- Collapsible on mobile
- Active route highlighting
- Nested menu support
- User profile section

#### `SalesPieChart`
Responsive donut chart for sales data visualization.

**Props:**
- `data: SalesDataPoint[]` - Array of sales data

**Features:**
- Responsive radius based on screen size
- Custom tooltips with percentage
- Smooth animations
- Mobile-optimized sizing

#### `RevenueChart`
Line chart showing revenue trends over time.

**Props:** None

**Features:**
- Multiple data series
- Interactive tooltips
- Gradient fills
- Responsive design

#### `WorldMap`
Interactive world map showing revenue by location.

**Props:** None

**Features:**
- Geographic data visualization
- Location markers
- Hover interactions
- Responsive scaling

#### `OrderListView`
Comprehensive order management interface.

**Props:** None

**Features:**
- Search and filter
- Sortable columns
- Bulk actions
- Pagination
- Copy-to-clipboard for addresses

### Custom Hooks

#### `useTheme`
Manages theme state and persistence.

```typescript
const { theme, toggleTheme } = useTheme();
```

**Returns:**
- `theme: 'light' | 'dark'` - Current theme
- `toggleTheme: () => void` - Toggle function

#### `useSidebar`
Manages sidebar open/closed state.

```typescript
const { isOpen, toggle } = useSidebar();
```

**Returns:**
- `isOpen: boolean` - Sidebar state
- `toggle: () => void` - Toggle function

## 🎨 Styling

The project uses Tailwind CSS with a custom configuration for:

- Custom color palette matching the Figma design
- Dark mode support with CSS variables
- Responsive breakpoints
- Custom animations and transitions

### Theme Colors

```javascript
// Light mode
--bw-bg-light: #F7F9FB
--bw-card-light: #FFFFFF

// Dark mode
--bw-bg-dark: #1C1C1C
--bw-card-dark: #2C2C2C
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile:** < 768px
- **Tablet:** 768px - 1279px
- **Desktop:** ≥ 1280px

Special attention has been given to:
- Chart responsiveness (dynamic sizing)
- Navigation adaptation (hamburger menu on mobile)
- Table scrolling on small screens
- Touch-friendly interactions

## 🚢 Deployment

This project is deployed on [Vercel](https://vercel.com/), the platform created by the makers of Next.js.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bibekkd/juspay-assignment)

### Manual Deployment

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

The application will be live at your Vercel URL.

## 🔧 Configuration

### Environment Variables

Currently, this project doesn't require environment variables. If you need to add API endpoints or keys:

1. Create a `.env.local` file
2. Add your variables:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## 🧪 Testing

To ensure code quality:

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📝 Code Quality

- **TypeScript:** Full type safety across the application
- **ESLint:** Code linting with Next.js recommended rules
- **Prettier:** Code formatting (configure as needed)
- **Component Documentation:** Clear prop types and JSDoc comments

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is created as part of the Juspay UI Developer Assignment.

## 👨‍💻 Author

**Bibek Kumar**

- GitHub: [@bibekkd](https://github.com/bibekkd)
- Project Repository: [juspay-assignment](https://github.com/bibekkd/juspay-assignment)

## 🙏 Acknowledgments

- Design provided by Juspay
- Built with Next.js and React
- Charts powered by Recharts
- Maps powered by react-simple-maps

---

**Note:** This project demonstrates modern React patterns, responsive design, and attention to detail in implementing pixel-perfect UI from Figma designs.
