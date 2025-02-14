# Complete Website Setup Guide

## Project Structure
This document contains all the necessary files and setup instructions for running the stock market website offline.

## Required Files

### 1. Configuration Files
- package.json: Node.js dependencies and scripts
- tsconfig.json: TypeScript configuration
- .env.example: Environment variables template
- tailwind.config.ts: Tailwind CSS configuration

### 2. Client-Side Code
#### Pages (/client/src/pages/)
- home-page.tsx: Main dashboard
- auth-page.tsx: Authentication page
- dashboard.tsx: Market overview

#### Components (/client/src/components/)
- user-portfolio.tsx: Portfolio display
- notification-bell.tsx: Notifications
- bottom-nav.tsx: Navigation bar

#### Hooks and Utils (/client/src/hooks/, /client/src/lib/)
- use-auth.tsx: Authentication hook
- websocket.ts: Real-time data connection
- queryClient.ts: API request handling

### 3. Server-Side Code (/server/)
- index.ts: Express server setup
- routes.ts: API endpoints
- storage.ts: Data storage interface
- zip-generator.ts: Code packaging utility

### 4. Shared Code (/shared/)
- schema.ts: TypeScript types and database schema

### 5. Static Assets
- /css/style.css: Styling
- /js/app.js: Client-side JavaScript

## Setup Instructions

1. Prerequisites:
   - Node.js 20.x or later
   - PostgreSQL database
   - npm package manager

2. Installation:
   ```bash
   # Clone or extract the files
   npm install
   ```

3. Environment Setup:
   - Copy .env.example to .env
   - Configure your database connection

4. Start the Server:
   ```bash
   npm run dev
   ```

5. Access the Website:
   - Open http://localhost:5000 in your browser

## Features
- Real-time stock price tracking
- Interactive stock price heat map
- Portfolio management
- User authentication
- WebSocket-powered live updates

For detailed API documentation and component usage, refer to the inline comments in each file.
