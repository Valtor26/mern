# Authentication System

A beginner-friendly Node.js authentication system with email OTP verification using Gmail OAuth2 and MongoDB.

## Features

- User registration with hashed passwords (SHA-256)
- Email OTP verification for account activation
- Login with JWT access tokens and refresh tokens stored in cookies
- Session management with refresh token hashing and revocation
- OTPs stored hashed in the database
- Uses Gmail OAuth2 for sending emails via Nodemailer

## Project structure

- `server.js` - entry point that connects DB and starts the server
- `src/app.js` - Express app and route registration
- `src/routes/` - Express route definitions
  - `auth.routes.js` - authentication endpoints
- `src/controllers/` - request handlers and core logic
  - `auth.controller.js` - register, login, verify, refresh, logout
- `src/services/` - reusable services
  - `email.service.js` - Nodemailer transporter and `sendEmail` helper
- `src/models/` - Mongoose models (`user`, `otp`, `session`, etc.)
- `src/utils/` - utility helpers (`generateOtp`, `getOtpHtml`)
- `src/config/` - configuration and DB connection

## Prerequisites

- Node.js 18+ and npm
- MongoDB instance (local or cloud)
- Google Cloud OAuth2 credentials for Gmail (see below)

## Environment variables

Create a `.env` file in the project root with these variables:

- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret used to sign JWTs
- `GOOGLE_CLIENT_ID` - OAuth2 client ID from Google Cloud
- `GOOGLE_CLIENT_SECRET` - OAuth2 client secret from Google Cloud
- `GOOGLE_REFRESH_TOKEN` - OAuth2 refresh token for the sending account
- `GOOGLE_USER` - the Gmail address used to send emails (e.g. `you@example.com`)

Important notes about Gmail OAuth2:
- Create credentials in Google Cloud Console (OAuth 2.0 Client IDs).
- Enable Gmail API for the project.
- To get a `GOOGLE_REFRESH_TOKEN`, you typically run a small OAuth flow (or use `oauth2client` tools) to authorize your app for the Gmail scope and capture the refresh token.
- The `GOOGLE_USER` account must match the account used to generate the refresh token.

## Installation

1. Install dependencies

```bash
npm install
```

2. Create `.env` with the variables listed above

3. Start the server in development mode

```bash
npm run dev
```

The server listens on port `3000` by default.

## API endpoints

Base path: `/api/auth`

- `POST /register`
  - Body: `{ "username": "alice", "email": "you@example.com", "password": "Pass1234" }`
  - Creates the user, stores a hashed OTP in the `otps` collection, and sends an OTP email (HTML).

- `POST /verify-email`
  - Body: `{ "email": "you@example.com", "otp": "123456" }`
  - Hashes the provided OTP and verifies against stored hashed OTP; marks the user as verified and removes OTP records.

- `POST /login`
  - Body: `{ "email": "you@example.com", "password": "Pass1234" }`
  - Requires the user to be verified; returns an access token and sets a `refreshToken` cookie.

- `GET /refresh-token`
  - Uses the `refreshToken` cookie to issue a new access token and rotate the refresh token.

- `GET /logout` and `GET /logout-all`
  - Revoke the session refresh token or all sessions for the user.

## How OTP flow works (brief)

1. On registration the server generates a 6-digit OTP and hashes it with SHA-256 before saving it to the `otps` collection.
2. The plain OTP is sent in an HTML email via Nodemailer + Gmail OAuth2.
3. The user submits the OTP via `POST /verify-email` and the server hashes the submitted OTP and compares it to the stored hash.
4. When verified, the user's `verified` field is set to `true` and OTP records are removed.

## Testing the API (examples)

Register a user (replace email/password):

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"you@example.com","password":"Pass1234"}'
```

Verify email with OTP (replace email/otp):

```bash
curl -X POST http://localhost:3000/api/auth/verify-email \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com","otp":"123456"}'
```

Login:

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com","password":"Pass1234"}'
```

## Troubleshooting

- Emails not sent
  - Confirm `.env` values (especially `GOOGLE_REFRESH_TOKEN` and `GOOGLE_USER`).
  - Check server console for Nodemailer errors (transporter.verify and sendMail errors are logged).
  - Ensure Gmail API is enabled and the refresh token is valid and has the required scopes.

- Invalid OTP
  - Ensure you submit the exact 6-digit OTP shown in the registration email.
  - Verify the OTP record exists in the `otps` collection (it stores the SHA-256 hash).
  - If needed for local testing, inspect the `otps` collection in MongoDB Compass to see stored hashes.

## Development tips

- To temporarily test email without Gmail OAuth2, consider using `nodemailer.createTestAccount()` and `nodemailer.getTestMessageUrl(info)` to preview messages.
- Keep secrets out of source control; use a local `.env` and add it to `.gitignore`.

## Security notes

- Passwords and OTPs are hashed using SHA-256 before being stored. Consider using a stronger KDF (bcrypt/scrypt/argon2) for passwords in production.
- Refresh tokens and OTPs are hashed in the DB to reduce the risk of token leakage.
- Cookies are set with `httpOnly`, `secure`, and `sameSite` where appropriate — check environment (development vs production) before enforcing `secure`.

## Contributing

Contributions are welcome. Open an issue or submit a pull request with improvements.

## License

This project is provided as-is for learning and demonstration purposes.
