# GlassGo - Business Web Application

## 📋 Description

GlassGo is a comprehensive web platform for glass transportation tracking and logistics management. This repository contains the static landing page and business owner dashboard, developed with HTML, CSS, and JavaScript. The platform serves as the entry point for users and stakeholders interested in the product.

## 🎯 Purpose

This web application focuses on:
- **First Impression**: Professional landing page showcasing the platform's value proposition
- **User Onboarding**: Authentication system for new and existing users
- **Dashboard Management**: Complete business owner dashboard for order and inventory management
- **Multi-language Support**: Full i18n implementation for Spanish and English

## 🏗️ Project Structure

```
Open-Business-Web-Page/
├── index.html                 # Main landing page
├── sign-in.html              # User authentication page
├── sign-up.html              # New user registration page
├── README.md                 # Project documentation
│
├── assets/                   # Static resources
│   ├── i18n/                # Internationalization resources
│   │   ├── en.json          # English translations
│   │   ├── es.json          # Spanish translations
│   │   └── i18n.js          # i18n implementation
│   │
│   ├── images/              # Image resources
│   │   ├── logo.png         # GlassGo logo
│   │   ├── tracking.png     # Tracking illustration
│   │   ├── welcome.png      # Welcome screen
│   │   └── [team photos]    # Team member images
│   │
│   ├── js/                  # JavaScript resources
│   │   ├── script.js        # Landing page functionality
│   │   └── sign.js          # Authentication logic
│   │
│   └── styles/              # CSS stylesheets
│       ├── styles.css       # Landing page styles
│       └── sign.css         # Authentication page styles
│
└── dueno-negocio/           # Business owner dashboard
    ├── home.html            # Dashboard home
    ├── create-order.html    # Order creation
    ├── tracking.html        # Real-time tracking
    ├── inventory.html       # Inventory management
    ├── calendar.html        # Delivery calendar
    ├── report.html          # Analytics & reports
    ├── history.html         # Order history
    ├── claims.html          # Claims management
    │
    ├── js/                  # Dashboard JavaScript resources
    │   ├── common.js        # Shared functionality
    │   ├── home.js          # Home page logic
    │   ├── create-order.js  # Order creation logic
    │   ├── tracking.js      # Tracking functionality
    │   ├── inventory.js     # Inventory management
    │   ├── calendar.js      # Calendar logic
    │   ├── report.js        # Report generation
    │   ├── history.js       # History view logic
    │   └── claims.js        # Claims handling
    │
    └── styles/              # Dashboard stylesheets
        ├── common.css       # Shared styles (sidebar, layout)
        ├── home.css         # Home page styles
        ├── create-order.css # Order form styles
        ├── tracking.css     # Tracking page styles
        ├── inventory.css    # Inventory styles
        ├── calendar.css     # Calendar styles
        ├── report.css       # Report page styles
        ├── history.css      # History page styles
        └── claims.css       # Claims page styles
```

## 🌟 Key Features

### Landing Page
- **Hero Section**: Main value proposition and CTAs
- **About Section**: Company mission, vision, and value proposition
- **Development Team**: Team member profiles with social links
- **Benefits**: Feature showcase for different user types
- **Testimonials**: Customer testimonial carousel
- **FAQ**: Expandable frequently asked questions
- **Tutorials**: Video tutorial placeholders

### Authentication System
- **Sign In**: User login with user type selection (Business Owner, Distributor, Transport Company)
- **Sign Up**: New user registration with social auth options (Google, Facebook, Apple)
- **Password Recovery**: Forgot password modal with email resource

### Business Owner Dashboard
- **Home**: Overview with statistics, active orders, and tracking
- **Create Order**: Multi-step order creation form
- **Tracking**: Real-time GPS tracking with order status
- **Inventory**: Stock management and product catalog
- **Calendar**: Delivery schedule and event management
- **Reports**: Analytics dashboard with bar charts
- **History**: Searchable order history archive
- **Claims**: Incident reporting and claim submission

## 🌐 Internationalization (i18n)

The application uses a custom i18n system with language resources stored in JSON format:

- **Supported Languages**: Spanish (default), English
- **Resource Files**: `assets/i18n/en.json`, `assets/i18n/es.json`
- **Implementation**: `assets/i18n/i18n.js`
- **Storage**: User preference saved in browser localStorage
- **Coverage**: All pages and dashboard sections

### Using i18n

```html
<!-- Text content -->
<h1 data-i18n="hero.title">Default text</h1>

<!-- Placeholders -->
<input placeholder="Email" data-i18n-placeholder="auth.signin.emailPlaceholder">

<!-- HTML content -->
<p data-i18n="about.description" data-i18n-html="true">HTML content</p>
```

## 📦 Resources & Data Management

The application uses various resource types:

### Static Resources
- **Images**: Logo, illustrations, team photos, icons
- **Fonts**: Google Fonts (Inter family)
- **Icons**: SVG icons, Flaticon resources

### Dynamic Resources
- **User Data**: Authentication credentials, user preferences
- **Order Data**: Active orders, tracking information, order history
- **Inventory Data**: Stock levels, product catalog
- **Analytics Data**: Performance metrics, reports
- **Calendar Data**: Scheduled deliveries, events
- **Claims Data**: Incident reports, claim records

### Language Resources
- **Translation Files**: JSON-based localization
- **Language Preference**: Stored in localStorage
- **Dynamic Loading**: i18n.js handles resource loading

## 🎨 Styling & Design

- **Design System**: Custom CSS with consistent color palette
- **Primary Color**: #003049 (Navy Blue)
- **Accent Color**: #D62828 (Red)
- **Typography**: Inter font family
- **Responsive**: Mobile-first approach
- **Components**: Reusable UI components across dashboard

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build process required - pure HTML/CSS/JS

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/Open-Business-Web-Page.git
cd Open-Business-Web-Page
```

2. Open in browser:
```bash
# Simply open index.html in your browser
# Or use a deploy server (recommended):
https://rpg2-0-opensource-1asi0729-2520-7327.github.io/GlassGo-Business-Web-page/
```

### Development

- No compilation needed
- Edit HTML/CSS/JS files directly
- Refresh browser to see changes
- Use browser DevTools for debugging

## 📱 User Flow

1. **Landing Page** (`index.html`)
   - View features and benefits
   - Read testimonials and FAQ
   - Choose Sign In or Sign Up

2. **Authentication** (`sign-in.html` or `sign-up.html`)
   - Select user type
   - Enter credentials
   - Access dashboard

3. **Dashboard** (`dueno-negocio/`)
   - View home overview
   - Create orders
   - Track shipments
   - Manage inventory
   - Generate reports
   - Review history
   - Submit claims

## 🔐 User Types

The application supports three user types:
- **Business Owners**: Full dashboard access
- **Distributors**: Order and tracking access
- **Transport Companies**: Delivery and route management

## 📊 Dashboard Features

### Statistics Cards
- Active orders count
- Available stock levels
- Estimated delivery times
- Losses avoided metrics

### Order Tracking
- Real-time GPS tracking
- Order status updates
- Tracking number lookup
- Delivery timeline

### Reports & Analytics
- Bar chart visualizations
- Performance metrics
- Custom report generation
- Export functionality

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👥 Development Team

- **Ever Carlos** - Software Engineer
- **Guillermo Howard** - Software Engineer
- **David Vivar** - Software Engineer
- **Dylan Guillen** - Software Engineer

## 📄 License

This project is part of the GlassGo platform.

## 📞 Contact

For more information about GlassGo, visit our website or contact the development team.

---

**Note**: This is a static web application. For the full backend API and database resources, refer to the main GlassGo platform repository.

