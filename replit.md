# Adhesive & Resin Monitoring UI

## Overview
A React-based frontend prototype for monitoring adhesive and resin machines. This is a frontend-only application with mock data, featuring a clean Apple-inspired design aesthetic with beige/white color palette, airy spacing, and soft shadows.

**Current State**: Fully set up and running in Replit environment

## Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Routing**: React Router 6
- **Icons**: React Icons

## Project Architecture

### Directory Structure
- `src/pages/` - Main page components (Login, Dashboard, Machine, Records, Alerts)
- `src/components/` - Reusable UI components (MachineCard, StatusChip, RatioGauge)
- `src/shell/` - App layout wrapper (AppShell with sidebar + topbar)
- `src/data/mock.ts` - Mock/dummy data for prototype
- `src/state/` - State management (useAuth for mock authentication)
- `src/types.ts` - TypeScript type definitions
- `src/styles/tailwind.css` - Tailwind CSS entry point with design tokens

### Key Features
- Mock authentication using localStorage
- Dashboard with machine cards showing weights, ratio, and status
- Individual machine operator view with ratio gauge and recent readings
- Records page with filterable table (mock data)
- Alerts page with local acknowledge toggle
- Status color coding: Normal (green), Warning (amber), Critical (red)
- Target ratio: 1.00 ± 15% for gauge visualization

## Replit Configuration

### Development Workflow
- **Command**: `npm run dev`
- **Port**: 5000 (configured for Replit's proxy)
- **Host**: 0.0.0.0 (allows Replit iframe preview)

### Deployment Configuration
- **Type**: Autoscale (stateless frontend)
- **Build**: `npm run build`
- **Run**: Vite preview server on port 5000

### Vite Configuration
The Vite config has been set up for Replit's environment:
- Host: 0.0.0.0 for proper iframe preview
- Port: 5000 (Replit's standard frontend port)
- allowedHosts: true (bypasses host header verification for proxy)
- File watching with polling enabled

## Recent Changes
- **2025-09-30**: Initial Replit setup
  - Installed Node.js 20 and npm dependencies
  - Configured Vite for port 5000 with host 0.0.0.0
  - Added allowedHosts: true for Replit proxy compatibility
  - Set up Frontend workflow for development server
  - Configured autoscale deployment

## Future Enhancements
When connecting to a real backend:
- Replace mock.ts with real API calls
- Implement proper authentication and session management
- Add form validations and role-based access
- Implement real-time alerts and acknowledgements
- Add pagination and filtering on Records page
- Connect to actual machine data sources

## Notes
- Authentication is currently mocked via localStorage
- All data is dummy/mock data for prototype purposes
- Design uses Inter font and custom beige color palette defined in Tailwind config
