# StockTrader Pro - Real-time Stock Trading Platform

## Quick Start
1. Extract all files maintaining the folder structure
2. Open `index.html` in your web browser
3. Login using credentials:
   - Regular user: demo/demo
   - Admin user: admin/admin

## Features
- Real-time stock price simulation
- Interactive heat map showing market performance
- Stock charts on home and watchlist pages
- Stock trading functionality (buy/sell) in watchlist
  - Persistent stock selection in trade form
  - Trade requests require admin approval
- Portfolio tracking with profit/loss indicators
- Account management with money operations
- Admin panel features:
  - Trade approval system for buy/sell requests
  - Balance adjustment for user accounts
  - Pending trades display with approve/reject actions
  - Toggle switch for price/chart visibility

## Notes
- This is a standalone version that works without a server
- Stock data is simulated and updates every 5 seconds
- User data is stored in browser's localStorage
- All trades require admin approval
- Green/red indicators show profit/loss status