# HNG12 Stage 1 Backend Task

This is a **Number Classification API** that classifies numbers based on certain mathematical properties and returns a fun fact. The API checks if the number is **Armstrong**, **Perfect**, **Odd**, or **Even**. Additionally, it fetches a fun fact from the [Numbers API](http://numbersapi.com/#42) related to the given number.

## API Endpoint

### **GET** `/api/classify-number?number={number}`

- **Query Parameter**: `number` - The number to classify (must be a valid integer).
- **Response Format**: JSON
- **CORS**: The API handles Cross-Origin Resource Sharing (CORS), so it can be accessed from any domain.

### Example Request

```
GET http://localhost:3000/api/classify-number?number=371
```

### Example Response (200 OK)

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Example Response (400 Bad Request)

```json
{
  "number": "alphabet",
  "error": true,
}
```

## Technology Stack

- **Node.js**: JavaScript runtime to run the server.
- **Express.js**: Framework to build the RESTful API.
- **TypeScript**: Superset of JavaScript for type safety.
- **Zod**: Schema validation library to validate the number input.
- **Axios**: HTTP client to fetch fun facts from the Numbers API.
- **CORS**: Middleware for handling Cross-Origin Resource Sharing.
- **Fly.io**: A platform to deploy the API publicly.

## Installation

To run the API locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/number-classification-api.git
cd number-classification-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a .env file and fill it with the following

```bash
PORT = 3000
NODE_ENV=development
```
### 4. Run the Application

```bash
npm run dev
```

The server will start on `http://localhost:3000`.

## API Usage

### Query Parameters:

- **`number`**: A valid integer to be classified. This will be checked and validated via Zod.

### Response:

- **`number`**: The number passed in the request.
- **`is_prime`**: Boolean indicating if the number is prime (currently based on the perfect number check).
- **`is_perfect`**: Boolean indicating if the number is a perfect number.
- **`properties`**: Array of properties such as:
  - **"armstrong"**: If the number is an Armstrong number.
  - **"odd"**: If the number is odd.
  - **"even"**: If the number is even.
- **`digit_sum`**: Sum of all digits in the number.
- **`fun_fact`**: Fun fact about the number (fetched from the Numbers API).

## Error Handling

- **400 Bad Request**: If the `number` query parameter is missing or invalid (not a valid integer), the API returns a `400` error with a detailed message.
- **500 Internal Server Error**: If there's an issue with the fun fact service or other internal server errors.

## Example Usage

- **Valid Request**:

```bash
curl http://localhost:3000/api/classify-number?number=371
```

Response:

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

- **Invalid Request**:

```bash
curl http://localhost:3000/api/classify-number?number=ghgt
```

Response:

```json
{
  "number": "alphabet",
  "error": true,
}
```

## Conclusion

This Number Classification API provides mathematical properties and fun facts about numbers. It validates the input, classifies the number, and returns relevant information in a structured JSON format. The app is ready to be deployed on platforms like Heroku, Vercel, or Render for public access.

## License

This project is open-source and available under the [MIT License](LICENSE).
