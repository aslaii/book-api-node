# Book API

## Project Description

This project is a simple RESTful API for managing a list of books. It is built using Next.js, Node.js, and Express. The API supports CRUD operations, allowing users to create, retrieve, update, and delete books. Swagger is integrated for API documentation.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/book-api.git
   cd book-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. Start Next.js development server (in another terminal):
   ```bash
   npm run dev
   ```

### Accessing the API

- The API will be running on `http://localhost:3000`.
- Swagger documentation is available at `http://localhost:3000/api-docs`.

## API Endpoint Documentation

### Create a Book

- **Endpoint:** `POST /api/books`
- **Request Body:**
  ```json
  {
    "title": "Book Title",
    "author": "Book Author",
    "publishedDate": "YYYY-MM-DD",
    "summary": "Brief summary of the book"
  }
  ```
- **Response:**
  ```json
  {
    "id": "unique-book-id",
    "title": "Book Title",
    "author": "Book Author",
    "publishedDate": "YYYY-MM-DD",
    "summary": "Brief summary of the book"
  }
  ```

### Retrieve All Books

- **Endpoint:** `GET /api/books`
- **Response:**
  ```json
  [
    {
      "id": "unique-book-id",
      "title": "Book Title",
      "author": "Book Author",
      "publishedDate": "YYYY-MM-DD",
      "summary": "Brief summary of the book"
    },
    ...
  ]
  ```

### Retrieve a Single Book

- **Endpoint:** `GET /api/books/{id}`
- **Response:**
  ```json
  {
    "id": "unique-book-id",
    "title": "Book Title",
    "author": "Book Author",
    "publishedDate": "YYYY-MM-DD",
    "summary": "Brief summary of the book"
  }
  ```

### Update a Book

- **Endpoint:** `PUT /api/books/{id}`
- **Request Body:**
  ```json
  {
    "title": "Updated Book Title",
    "author": "Updated Book Author",
    "publishedDate": "YYYY-MM-DD",
    "summary": "Updated summary of the book"
  }
  ```
- **Response:**
  ```json
  {
    "id": "unique-book-id",
    "title": "Updated Book Title",
    "author": "Updated Book Author",
    "publishedDate": "YYYY-MM-DD",
    "summary": "Updated summary of the book"
  }
  ```

### Delete a Book

- **Endpoint:** `DELETE /api/books/{id}`
- **Response:**
  ```json
  {
    "id": "unique-book-id",
    "title": "Book Title",
    "author": "Book Author",
    "publishedDate": "YYYY-MM-DD",
    "summary": "Brief summary of the book"
  }
  ```

## Example Requests and Responses

### Create a Book Example

**Request:**
```bash
curl -X POST http://localhost:3000/api/books -H "Content-Type: application/json" -d '{
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "publishedDate": "1951-07-16",
  "summary": "A story about the events in the life of a young man"
}'
```

**Response:**
```json
{
  "id": "1",
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "publishedDate": "1951-07-16",
  "summary": "A story about the events in the life of a young man"
}
```

### Retrieve All Books Example

**Request:**
```bash
curl -X GET http://localhost:3000/api/books
```

**Response:**
```json
[
  {
    "id": "1",
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "publishedDate": "1951-07-16",
    "summary": "A story about the events in the life of a young man"
  }
]
```

### Retrieve a Single Book Example

**Request:**
```bash
curl -X GET http://localhost:3000/api/books/1
```

**Response:**
```json
{
  "id": "1",
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "publishedDate": "1951-07-16",
  "summary": "A story about the events in the life of a young man"
}
```

### Update a Book Example

**Request:**
```bash
curl -X PUT http://localhost:3000/api/books/1 -H "Content-Type: application/json" -d '{
  "title": "The Catcher in the Rye (Updated)",
  "author": "J.D. Salinger",
  "publishedDate": "1951-07-16",
  "summary": "An updated summary"
}'
```

**Response:**
```json
{
  "id": "1",
  "title": "The Catcher in the Rye (Updated)",
  "author": "J.D. Salinger",
  "publishedDate": "1951-07-16",
  "summary": "An updated summary"
}
```

### Delete a Book Example

**Request:**
```bash
curl -X DELETE http://localhost:3000/api/books/1
```

**Response:**
```json
{
  "id": "1",
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "publishedDate": "1951-07-16",
  "summary": "A story about the events in the life of a young man"
}
```

