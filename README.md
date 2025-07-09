# Node.js URL Shortener

A simple URL shortener service built with Node.js, Express, MongoDB, and JWT-based authentication.

## Features

- Shorten long URLs to short, shareable links
- Redirect to original URLs using the short link
- Track analytics (number of redirects and visit history with time) for each short URL
- User authentication (signup/login) with JWT cookies
- Role-based access (NORMAL, ADMIN)
- Admin view for all URLs

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/MustafaAjnawala/NodeJS-URL-shortener.git
   cd NodeJS-URL-shortener
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string and JWT secret:
     ```
     MONGOURI=mongodb://localhost:27017/<Your_DB_Name>
     JWT_key=your_jwt_secret
     ```

4. **Start the server:**
   ```sh
   npm run dev
   ```
   The server will run at [http://localhost:8080](http://localhost:8080).

## Usage

### Authentication

- **Signup:**  
  Visit `/signup` or use the form to create a new user.
- **Login:**  
  Visit `/login` or use the form to log in.  
  On successful login, a JWT token is set as a cookie.

### URL Shortening

- After logging in, use the form on the home page to shorten URLs.
- Only authenticated users can create and view their URLs.

### Admin

- Admins can view all URLs at `/admin/urls`.

## API Endpoints

- `POST /url/`  
  Shorten a new URL.  
  **Body:** `{ "url": "https://example.com" }`  
  **Requires authentication**

- `GET /:shortId`  
  Redirect to the original URL.

- `GET /url/analytics/:shortId`  
  Get analytics for the shortID (clicks/redirects and timestamps for each).

## Folder Structure

```
url-shortner/
├── controller/
├── middlewares/
├── model/
├── routes/
├── service/
├── views/
├── .env
├── index.js
├── mongoConnect.js
├── package.json
```

## License

This project is open source and available under the [BSD 2-Clause License](LICENSE).
