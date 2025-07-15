# Developer Portfolio Application

## Overview

This is a full-stack developer portfolio application built with React, TypeScript, and Express. It features a creative solar system-themed interface where planets represent different technical skills, along with traditional portfolio sections for projects, skills, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Radix UI components with shadcn/ui for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Custom CSS animations for the solar system interface

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful APIs with JSON responses
- **Error Handling**: Centralized error handling middleware

### Development Setup
- **Package Manager**: npm with lockfile version 3
- **TypeScript**: Strict mode enabled with modern ESNext target
- **Development Server**: Vite dev server with HMR
- **Production Build**: Vite build + esbuild for server bundling

## Key Components

### Solar System Interface
- Interactive planet-based skill representation
- Orbital mechanics with CSS animations
- Hover effects and tooltips for skill details
- Randomized starting positions for visual variety

### Portfolio Sections
- **Hero Section**: Solar system animation with star field background
- **Skills Section**: Traditional skill bars with categorized abilities
- **Projects Section**: Project cards with technology tags and links
- **Contact Section**: Form with validation and submission handling

### UI Components
- Comprehensive shadcn/ui component library
- Custom themed components with dark space aesthetic
- Responsive design with mobile-first approach
- Accessibility features built-in through Radix UI

## Data Flow

### Contact Form Submission
1. User fills out contact form (name, email, subject, message)
2. Frontend validates data using Zod schema
3. TanStack Query mutation sends POST request to `/api/contact`
4. Backend validates with shared schema and stores in database
5. Success/error feedback displayed via toast notifications

### Data Storage
- **Development**: In-memory storage implementation
- **Production**: PostgreSQL database with Drizzle ORM
- **Schema**: Shared TypeScript types between frontend and backend
- **Validation**: Zod schemas for runtime type checking

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI component primitives
- **wouter**: Lightweight routing library
- **date-fns**: Date manipulation utilities

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for production builds
- **tailwindcss**: Utility-first CSS framework
- **postcss**: CSS processing

### UI and Styling
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class name utility
- **lucide-react**: Icon library

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: `NODE_ENV=development` with tsx for server
- **Production**: `NODE_ENV=production` with compiled JavaScript
- **Database**: `DATABASE_URL` environment variable required

### File Structure
```
client/          # Frontend React application
├── src/         # Source code
├── index.html   # HTML template
server/          # Backend Express application
├── index.ts     # Server entry point
├── routes.ts    # API route definitions
├── storage.ts   # Database abstraction layer
shared/          # Shared code between frontend and backend
├── schema.ts    # Database schema and validation
```

### Production Deployment
- Server serves static frontend files from `dist/public`
- API routes handle backend functionality
- Database migrations managed through Drizzle Kit
- Environment variables for database connection and configuration

The application is designed to be deployed on platforms like Replit, Vercel, or similar services that support Node.js applications with PostgreSQL databases.