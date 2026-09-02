# Bank Ledger (backend)

A backend service for a bank ledger implemented with Express and MongoDB. It provides user authentication, account management, and transaction processing for a MERN application.

This README is intentionally detailed — it explains how to run the service, environment configuration, API endpoints, middleware and security considerations so you can use this description for documentation or to showcase the project on a resume.

---

## Table of Contents
- Features
- Tech stack
- Requirements
- Quick start
- Environment variables (example .env)
- Scripts
- API reference (endpoints & example requests)
- Project structure and responsibilities
- Models (overview)
- Authentication & middleware
- Running & deployment recommendations
- Security notes
- Contributing
- License

---

## Features
- JWT- and cookie-based authentication (register, login, logout)
- Account creation and retrieval for authenticated users
- Retrieve account balance per account
- Create transactions and a protected system-only endpoint to seed initial funds
- Email utilities via nodemailer (configurable)
- Modular structure: controllers, routes, services, middleware and models

## Tech stack
- Node.js + Express
- MongoDB (mongoose)
- Authentication: JSON Web Tokens (JWT)
- Utilities: dotenv, cookie-parser, bcrypt / bcryptjs, nodemailer

## Requirements
- Node.js (v16 or later recommended)
- npm
- A running MongoDB instance (Atlas or locally)

## Quick start
1. Clone the repository and change into this subfolder:
   git clone https://github.com/Valtor26/mern.git
   cd mern/backend/bank-ledger

2. Install dependencies:
   npm install

3. Create a `.env` file in `backend/bank-ledger/` (see the example below).

4. Run in development with auto-reload (nodemon):
   npm run dev

5. Or start the server normally:
   npm start

The server entrypoint is `server.js` and the app listens on port 3000 by default.

---

## Environment variables (example .env)

Create a `.env` file at `backend/bank-ledger/.env`. The project expects a MongoDB connection and a JWT secret at minimum. The controllers/config may reference additional names — inspect `src/config/` and `src/controllers/` for exact usages.

Example:

MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/bank-ledger?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_here
PORT=3000

# Optional: email settings for nodemailer
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password

# Optional: system user credentials or API key used by system middleware (if implemented)
SYSTEM_USER_EMAIL=system@example.com
SYSTEM_USER_KEY=some-system-key

Note: Replace placeholder values and keep secrets out of source control.

---

## Scripts
Defined in `package.json`:
- `npm run dev` — development mode using `npx nodemon server.js` (auto-reload)
- `npm start` — start the server with node

---

## API reference (overview)

The Express app mounts routes under `/api`. The following endpoints are available based on the current route files.

Authentication
- POST /api/auth/register
  - Register a new user.
  - Example body (typical): { "name": "Alice", "email": "alice@example.com", "password": "securepassword" }

- POST /api/auth/login
  - Login and receive an authentication cookie and/or JWT in response.
  - Example body: { "email": "alice@example.com", "password": "securepassword" }

- POST /api/auth/logout
  - Logout the current user (clears cookie / invalidates token on client).

Accounts (protected by authentication middleware)
- POST /api/accounts
  - Create a new account for the authenticated user.
  - Example body (typical): { "type": "checking", "currency": "USD", "nickname": "Everyday" }

- GET /api/accounts
  - Get a list of accounts belonging to the authenticated user.

- GET /api/accounts/balance/:accountId
  - Get balance information for a specific account.

Transactions
- POST /api/transactions
  - Create a transaction between accounts or for a single account depending on payload.
  - Example body (typical): { "fromAccountId": "<id>", "toAccountId": "<id>", "amount": 100.50, "currency": "USD", "description": "Transfer" }

- POST /api/transactions/system/initial-funds
  - Protected endpoint intended for system-only use (seed initial funds, etc.). Middleware guards this route with a special system-user check.
  - Example body (typical): { "accountId": "<id>", "amount": 1000000, "note": "Initial funds" }

Notes:
- All protected endpoints require authentication through middleware in `src/middleware`.
- Actual request/response shapes are implemented in `src/controllers/*` — inspect those files for exact field names, validations and error handling.

---

## Project structure and responsibilities

- server.js — application entrypoint: loads env, connects to database, starts server
- package.json / package-lock.json — dependencies and scripts
- src/
  - app.js — creates express app, registers middleware and mounts routes
  - config/
    - db.js (or similar) — DB connection logic (connectDB) and configuration
  - controllers/ — API controllers that implement business logic for auth, accounts and transactions
  - middleware/ — authentication and system-level middleware
  - models/ — mongoose models for User, Account, Transaction (expected)
  - routes/ — route definitions: auth.routes.js, account.routes.js, transaction.routes.js
  - services/ — helper services such as email sending, transaction helpers, or domain logic

This separation keeps HTTP concerns (routes) isolated from business logic (controllers) and data layer (models/services).

---

## Models (overview)

The repository contains a `src/models` folder. Typical models for a bank ledger are:

- User
  - Fields: name, email, passwordHash, roles/flags, createdAt
  - Responsible for authentication and ownership of accounts

- Account
  - Fields: owner (user ref), accountNumber (or auto-generated ID), type, currency, balance, metadata
  - Responsible for storing per-account balances and metadata

- Transaction
  - Fields: fromAccount (ref), toAccount (ref, optional), amount, currency, type (credit/debit), description, createdBy, createdAt
  - Logs financial movements and is typically used to recalculate balances or audit operations

For exact schemas and field names, inspect the model files in `src/models`.

---

## Authentication & middleware

Authentication is implemented using JWTs (jsonwebtoken) and cookies (cookie-parser). Passwords are hashed (bcrypt / bcryptjs).

- `auth.middleware` — verifies incoming JWT or session cookie and populates request user context
- `authSystemUserMiddleware` (or similarly named) — checks that the request is coming from a trusted system account or using a system key; used to protect system-only endpoints like seeding initial funds

Ensure JWT_SECRET and any system credentials are set in the `.env` file.

---

## Running, testing & local development

- Use `npm run dev` for iterative development (nodemon restarts on changes).
- Seed your DB with test data (create a test user and a few accounts) to try endpoints.
- Use tools like Postman or curl to exercise endpoints.
- Add automated tests (recommended) to validate auth flows and transaction behavior.

Example curl (login):

curl -X POST http://localhost:3000/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"alice@example.com","password":"password"}' \
  -c cookies.txt

This stores cookies in cookies.txt for subsequent calls.

---

## Deployment suggestions

- Use environment-specific `.env` values (do not commit secrets).
- Use a process manager (pm2, systemd) for production.
- Run behind a reverse proxy (NGINX) and enable TLS.
- Use MongoDB Atlas for a managed DB or a robust self-hosted instance.
- Monitor logs and set up centralized logging for production.

Optional: Containerize the service with Docker, expose port 3000, and orchestrate with Docker Compose or Kubernetes.

---

## Security notes

- Keep `JWT_SECRET` strong and rotate if compromised.
- Use HTTPS in production to protect cookies and tokens in transit.
- Secure the system-only endpoint and do not expose system credentials in client code.
- Validate and sanitize incoming request data in controllers — especially transaction amounts and account identifiers.

---

## Contributing

- Create issues for bugs or feature requests.
- Follow repository-level contribution guidelines if present.
- Run tests and linters before submitting pull requests.

---

## License
Refer to the repository-level license. If none exists, add a license to the project if you intend to open-source it.


