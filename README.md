# Node.js URL Shortener

A simple URL shortener service built with Node.js, Express, and MongoDB.

## Features

- Shorten long URLs to short, shareable links
- Redirect to original URLs using the short link
- Track analytics (number of redirects and visit history with time) for each short URL

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
   - Add your MongoDB connection string:
     ```
     MONGOURI=mongodb://localhost:27017/<Your_DB_Name>
     ```

4. **Start the server:**
   ```sh
   npm run dev
   ```
   The server will run at [http://localhost:8080](http://localhost:8080).

## API Endpoints

- `POST /url/`  
  Shorten a new URL.  
  **Body:** `{ "url": "https://example.com" }`

- `GET /:shortId`  
  Redirect to the original URL.

- `GET /url/analytics/:shortId`  
  Get analytics for the shortID (clicks/redirects and timestamps for each).

## License

This project is open source and available under the [BSD 2-Clause License](LICENSE).
