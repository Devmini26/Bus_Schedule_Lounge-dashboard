# Bus Schedule Lounge Dashboard

A modern web application for managing bus schedules and lounge information, built with Angular 21.

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── core/                    # Core modules
│   │   │   ├── config/              # App configuration
│   │   │   ├── interceptors/        # HTTP interceptors
│   │   │   ├── models/              # Data models & interfaces
│   │   │   └── services/            # Core services (API, etc.)
│   │   ├── features/                # Feature modules
│   │   │   ├── auth/                # Authentication (Login)
│   │   │   ├── home/                # Home page
│   │   │   ├── lounge/              # Lounge management
│   │   │   └── schedules/           # Schedule management
│   │   ├── shared/                  # Shared components
│   │   │   └── components/
│   │   │       ├── header/          # Navigation header
│   │   │       └── loading-spinner/ # Loading indicator
│   │   ├── app.config.ts            # Application config
│   │   ├── app.routes.ts            # Route definitions
│   │   └── app.ts                   # Root component
│   └── environments/                # Environment configs
└── angular.json                     # Angular CLI config
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Angular CLI 21+

### Installation

```bash
cd frontend
npm install
```

### Development Server

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`

### Build

```bash
# Development build
npm run build

# Production build
npm run build -- --configuration production
```

### Running Tests

```bash
npm test
```

## Features

- **Routing**: Pre-configured routes for home, schedules, lounge, and authentication
- **HTTP Client**: Configured with interceptors for API calls
- **Authentication**: Token-based auth interceptor
- **Responsive Layout**: Header component with navigation
- **TypeScript Models**: Type-safe interfaces for Schedule, User, and Lounge
- **Environment Management**: Separate dev/prod configs
- **SSR Ready**: Server-side rendering configured

## Tech Stack

- **Angular 21** - Standalone components
- **TypeScript** - Type safety
- **SCSS** - Styling
- **RxJS** - Reactive programming
- **Angular Router** - Navigation
- **HttpClient** - API integration

## Development Notes

- All components use Angular standalone API (no modules)
- HTTP interceptors handle authentication tokens
- Environment files separate dev/prod API endpoints
- Core services are provided at root level