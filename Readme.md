# HNG12 Stage 0 Backend API Task

## Project Description

This is a public API for the HNG12 internship program that returns:

- A registered email address.
- The current date and time in ISO 8601 format (UTC).
- The GitHub URL of this project's codebase.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Adedejiosvaldo/hng_api_stage0.git
   ```

2. Install dependencies:

   ```bash
   cd hng_api_stage0
   npm install
   ```

3. Run the application:

   ```bash
   npm run start:dev
   ```

4. Access the API at:
   ```
   http://localhost:3000/api/v1/info
   ```

The backend server requires certain environment variables to be set. Create a .env file in the root directory of the project and add the following variables:

```
 PORT=3000
 NODE_ENV= development
```

## API Documentation

### Endpoint

- **GET** `/api/v1/info`

### Example Response:

```json
{
  "email": "useremail@gmail.com",
  "current_datetime": "2025-01-30T13:22:26.378Z",
  "github_url": "https://github.com/Adedejiosvaldo/hng_api_stage0"
}
```

## Deployment

The API is deployed on Heroku and accessible at:

```
https://your-deployed-api-url.com/api/v1/info
```

## CORS

This API handles Cross-Origin Resource Sharing (CORS) for cross-origin requests.

## Backlink

[HNG NodeJS Developers](https://hng.tech/hire/nodejs-developers)

```


```
