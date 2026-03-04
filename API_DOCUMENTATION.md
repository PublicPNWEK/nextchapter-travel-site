# API Documentation

## Base URL
- Development: `http://localhost:5000/api`
- Production: `https://yourdomain.com/api`

## Authentication

All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

Tokens are returned upon successful login/registration and should be stored in localStorage.

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Optional success message"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description"
}
```

---

## Endpoints

### Authentication

#### Register User
```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "phone": "+1234567890"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
```

#### Login
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": { ... }
}
```

#### Get Current User
```http
GET /api/auth/me
```
*Requires authentication*

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "role": "customer",
    "preferences": { ... },
    "createdAt": "2026-01-01T00:00:00.000Z"
  }
}
```

#### Update User Details
```http
PUT /api/auth/updatedetails
```
*Requires authentication*

**Request Body:**
```json
{
  "firstName": "Jane",
  "phone": "+0987654321",
  "preferences": {
    "newsletter": true
  }
}
```

#### Update Password
```http
PUT /api/auth/updatepassword
```
*Requires authentication*

**Request Body:**
```json
{
  "currentPassword": "OldPass123!",
  "newPassword": "NewPass456!"
}
```

#### Logout
```http
POST /api/auth/logout
```
*Requires authentication*

---

### Bookings

#### Get All Bookings
```http
GET /api/bookings
```
*Requires authentication*

**Query Parameters:**
- `status` - Filter by status (inquiry, pending, confirmed, completed, cancelled)
- `tripType` - Filter by trip type

**Response:**
```json
{
  "success": true,
  "count": 5,
  "bookings": [
    {
      "_id": "booking_id",
      "bookingNumber": "NCT260300001",
      "customer": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com"
      },
      "tripType": "disney-world",
      "destination": "Orlando, Florida",
      "startDate": "2026-06-01T00:00:00.000Z",
      "endDate": "2026-06-07T00:00:00.000Z",
      "numberOfGuests": {
        "adults": 2,
        "children": 1
      },
      "status": "confirmed",
      "pricing": {
        "total": 5000
      },
      "createdAt": "2026-03-01T00:00:00.000Z"
    }
  ]
}
```

#### Get Single Booking
```http
GET /api/bookings/:id
```
*Requires authentication*

**Response:**
```json
{
  "success": true,
  "booking": {
    "_id": "booking_id",
    "bookingNumber": "NCT260300001",
    "customer": { ... },
    "agent": { ... },
    "tripType": "disney-world",
    "destination": "Orlando, Florida",
    "startDate": "2026-06-01T00:00:00.000Z",
    "endDate": "2026-06-07T00:00:00.000Z",
    "numberOfGuests": {
      "adults": 2,
      "children": 1
    },
    "status": "confirmed",
    "pricing": {
      "basePrice": 4500,
      "taxes": 400,
      "fees": 100,
      "total": 5000
    },
    "itinerary": [],
    "accommodations": [],
    "specialRequests": "Celebrating anniversary",
    "notes": [],
    "documents": []
  }
}
```

#### Create Booking
```http
POST /api/bookings
```
*Requires authentication*

**Request Body:**
```json
{
  "tripType": "disney-world",
  "destination": "Orlando, Florida",
  "startDate": "2026-06-01",
  "endDate": "2026-06-07",
  "numberOfGuests": {
    "adults": 2,
    "children": 1
  },
  "specialRequests": "Celebrating anniversary"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Booking created successfully",
  "booking": { ... }
}
```

#### Update Booking
```http
PUT /api/bookings/:id
```
*Requires authentication (Agent/Admin only)*

**Request Body:**
```json
{
  "status": "confirmed",
  "pricing": {
    "basePrice": 4500,
    "taxes": 400,
    "fees": 100
  }
}
```

#### Delete Booking
```http
DELETE /api/bookings/:id
```
*Requires authentication (Admin only)*

#### Add Note to Booking
```http
POST /api/bookings/:id/notes
```
*Requires authentication (Agent/Admin only)*

**Request Body:**
```json
{
  "content": "Called customer to confirm details"
}
```

---

### Dashboard (Agent/Admin Only)

#### Get Dashboard Statistics
```http
GET /api/dashboard/stats
```
*Requires authentication (Agent/Admin only)*

**Response:**
```json
{
  "success": true,
  "stats": {
    "bookings": {
      "total": 150,
      "pending": 12,
      "confirmed": 45,
      "completed": 88
    },
    "customers": 200,
    "revenue": 250000,
    "upcomingSchedule": [ ... ],
    "recentBookings": [ ... ]
  }
}
```

#### Get All Customers
```http
GET /api/dashboard/customers
```
*Requires authentication (Agent/Admin only)*

**Response:**
```json
{
  "success": true,
  "count": 200,
  "customers": [
    {
      "id": "user_id",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "createdAt": "2026-01-01T00:00:00.000Z",
      "isEmailVerified": true
    }
  ]
}
```

#### Get Schedules
```http
GET /api/dashboard/schedule
```
*Requires authentication (Agent/Admin only)*

**Query Parameters:**
- `startDate` - Filter by start date (ISO 8601)
- `endDate` - Filter by end date (ISO 8601)

**Response:**
```json
{
  "success": true,
  "count": 10,
  "schedules": [
    {
      "_id": "schedule_id",
      "agent": { ... },
      "title": "Client Meeting - John Doe",
      "type": "appointment",
      "startTime": "2026-03-05T14:00:00.000Z",
      "endTime": "2026-03-05T15:00:00.000Z",
      "customer": { ... },
      "status": "scheduled",
      "priority": "medium"
    }
  ]
}
```

#### Create Schedule
```http
POST /api/dashboard/schedule
```
*Requires authentication (Agent/Admin only)*

**Request Body:**
```json
{
  "title": "Client Meeting",
  "description": "Discuss vacation details",
  "type": "appointment",
  "startTime": "2026-03-05T14:00:00.000Z",
  "endTime": "2026-03-05T15:00:00.000Z",
  "customer": "customer_id",
  "priority": "medium"
}
```

#### Update Schedule
```http
PUT /api/dashboard/schedule/:id
```
*Requires authentication (Agent/Admin only)*

#### Delete Schedule
```http
DELETE /api/dashboard/schedule/:id
```
*Requires authentication (Agent/Admin only)*

---

### Health Check

#### Server Health
```http
GET /api/health
```
*Public endpoint*

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2026-03-02T12:00:00.000Z"
}
```

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request (validation error) |
| 401 | Unauthorized (authentication required) |
| 403 | Forbidden (insufficient permissions) |
| 404 | Not Found |
| 429 | Too Many Requests (rate limit exceeded) |
| 500 | Internal Server Error |

---

## Rate Limiting

- **Window**: 15 minutes
- **Max Requests**: 100 per window per IP
- Exceeding this limit returns a 429 error

---

## Caching

The following endpoints are cached:
- `GET /api/bookings` - 5 minutes
- `GET /api/dashboard/stats` - 1 minute
- `GET /api/dashboard/customers` - 5 minutes

Cache is automatically invalidated on data changes.

---

## Security

### Best Practices
1. Always use HTTPS in production
2. Store JWT tokens securely (httpOnly cookies recommended for production)
3. Never expose JWT_SECRET
4. Implement CSRF protection for production
5. Use strong passwords (min 8 characters)

### Content Security Policy
The API enforces CSP headers. Adjust as needed for your frontend.

---

## Examples

### JavaScript (Fetch)
```javascript
// Login
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'john@example.com',
    password: 'password123'
  })
});

const data = await response.json();
const token = data.token;

// Use token for authenticated request
const bookings = await fetch('/api/bookings', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

### cURL
```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'

# Get bookings (with token)
curl -X GET http://localhost:5000/api/bookings \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## Postman Collection

Import this URL into Postman for a ready-to-use collection:
```
[Coming Soon]
```

---

**Version**: 1.0.0  
**Last Updated**: March 2026
