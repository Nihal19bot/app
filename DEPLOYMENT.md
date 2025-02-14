/client
   /server
   /shared
   /css
   /js
   ```

2. **Set Up Database**
   - Create a new PostgreSQL database for the application
   - Note down your database connection URL, it should look like:
     `postgresql://username:password@localhost:5432/database_name`

3. **Configure Environment**
   - Create a file named `.env` in the root directory
   - Add the following configuration:
   ```
   DATABASE_URL=your_postgresql_database_url_from_step_2
   PORT=5000
   ```

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Initialize Database**
   ```bash
   npm run db:push
   ```

6. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Access the application at `http://localhost:5000`
   - IMPORTANT: Always access through the Node.js server, never open index.html directly

## Common Issues

1. **Database Connection**
   - Ensure PostgreSQL is running
   - Verify your DATABASE_URL is correct
   - Check that the database user has proper permissions

2. **Missing Dependencies**
   - If you see module not found errors, run `npm install` again
   - Make sure you're in the root directory when running npm commands

3. **Server Not Starting**
   - Check if port 5000 is already in use
   - Ensure all environment variables are set correctly
   - Look for error messages in the terminal

## File Structure
Essential files for the application:

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
├── server/
│   ├── index.ts
│   ├── routes.ts
│   └── storage.ts
├── shared/
│   └── schema.ts
├── css/
│   └── style.css
├── js/
│   └── app.js
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .env