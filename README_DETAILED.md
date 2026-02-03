# Backend Project - Video Tube API

A comprehensive backend application built with Node.js, Express.js, and MongoDB. This project implements a complete video streaming platform backend with user authentication, video management, and subscription features.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Middleware](#middleware)
- [Utilities](#utilities)
- [Authentication Flow](#authentication-flow)
- [Development Workflow](#development-workflow)
- [Database Connection](#database-connection)
- [Security Considerations](#security-considerations)
- [Contributing](#contributing)

---

## 🎯 Project Overview

This is a full-featured backend API for a video streaming platform (similar to YouTube). It provides complete user management, authentication, video uploads with cloud storage, and social features like subscriptions. The API is built following industry best practices with proper error handling, validation, and security measures.

**Workspace Reference:** [Eraser.io Workspace](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

### Key Highlights
- ✅ Production-ready Node.js backend
- ✅ RESTful API architecture
- ✅ JWT-based authentication with access and refresh tokens
- ✅ File uploads with Cloudinary integration
- ✅ MongoDB with Mongoose ODM
- ✅ Input validation and error handling
- ✅ CORS and security middleware
- ✅ Modular project structure

---

## ✨ Features

### User Management
- **User Registration**: Create new user accounts with validation
  - Email and username uniqueness checks
  - Avatar upload (required)
  - Cover image upload (optional)
  - Password hashing with bcryptjs
  
- **User Authentication**: Secure login with JWT tokens
  - Support for login with email or username
  - Password verification
  - Access and refresh token generation
  
- **Token Management**: Stateless authentication
  - Short-lived access tokens (default: 1 day)
  - Long-lived refresh tokens (default: 10 days)
  - Token refresh endpoint
  - Secure cookie storage
  
- **Profile Management**: Update user details
  - Update full name and email
  - Upload and change avatar
  - Upload and change cover image
  - Delete old images from Cloudinary
  
- **Session Management**: Secure logout
  - Clear refresh token from database
  - Clear cookies

### Video Management
- **Video Upload**: Upload videos with automatic cloud storage
  - Files stored on Cloudinary
  - Support for title, description, thumbnail
  - Duration tracking
  - View counter
  - Publication status control
  
- **Video Metadata**: Store comprehensive video information
  - Title and description
  - Duration
  - Thumbnail URL
  - Owner reference
  
- **Publish Control**: Toggle video visibility
  - isPublished boolean field
  - Control public/private videos
  
- **View Tracking**: Monitor video engagement
  - View counter
  - Track popular content
  
- **Pagination**: Efficient data retrieval
  - Mongoose aggregate pagination
  - Large result set handling

### Social Features
- **Subscriptions**: Users can subscribe to channels
  - Subscriber and channel reference
  - One-to-many relationships
  
- **Watch History**: Track user viewing patterns
  - Array of video references
  - User engagement tracking

### Security Features
- **JWT Authentication**: Secure token-based authentication
  - Stateless authentication
  - No session storage required
  - Token verification on protected routes
  
- **CORS Protection**: Cross-origin resource sharing
  - Configured origins
  - Credentials support
  
- **Cookie Security**: HttpOnly and Secure flags
  - Prevent XSS attacks
  - Secure transmission over HTTPS
  
- **Input Validation**: Comprehensive data validation
  - Required field checks
  - Format validation
  - Sanitization
  
- **Error Handling**: Standardized error responses
  - Custom error class
  - Proper HTTP status codes
  - Informative error messages

---

## 🛠️ Tech Stack

### Core Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `express` | 4.21.2 | Fast, unopinionated web framework |
| `mongoose` | 8.12.1 | MongoDB object modeling |
| `jsonwebtoken` | 9.0.2 | JWT token creation and verification |
| `bcryptjs` | 3.0.2 | Password hashing library |
| `cloudinary` | 2.6.0 | Cloud storage for images and videos |
| `multer` | 1.4.5-lts.1 | Middleware for handling file uploads |
| `cors` | 2.8.5 | Enable CORS with various options |
| `cookie-parser` | 1.4.7 | Parse Cookie header and populate req.cookies |
| `dotenv` | 16.4.7 | Load environment variables from .env file |
| `mongoose-aggregate-paginate-v2` | 1.0.12 | Pagination plugin for Mongoose aggregation |

### Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `nodemon` | 3.1.9 | Auto-restart server on file changes |
| `prettier` | 3.5.3 | Code formatter |

---

## 📦 Installation

### Prerequisites
- **Node.js**: v16.20.1 or higher
- **npm**: v7 or higher
- **MongoDB**: Local instance or MongoDB Atlas account
- **Cloudinary**: Free or paid account for image storage
- **Git**: For version control

### Step-by-Step Installation

#### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd Backend-With_Project
```

#### Step 2: Install Dependencies
```bash
npm install
```
This will install all packages listed in `package.json`.

#### Step 3: Environment Variables Setup

Create a `.env` file in the project root directory:

```bash
touch .env
```

Copy and modify the following template:

```env
# Server Configuration
PORT=8000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority

# JWT Token Configuration
ACCESS_TOKEN_SECRET=your_super_secret_access_token_key_12345
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_super_secret_refresh_token_key_12345
REFRESH_TOKEN_EXPIRY=10d

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

**Getting Credentials:**

- **MongoDB**: 
  - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - Create a cluster
  - Get connection string from "Connect" button

- **Cloudinary**:
  - Sign up at [Cloudinary](https://cloudinary.com/)
  - Dashboard shows API credentials

#### Step 4: Start Development Server

```bash
npm run dev
```

Output:
```
App is listening on port 8000
MongoDB connected !! DB Host: ac-xxxxx-shard-00-00.mongodb.net
```

The server will automatically restart when you modify files (thanks to nodemon).

### Verification

Test the server:
```bash
curl http://localhost:8000/api/v1/users/login
```

---

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `8000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `ACCESS_TOKEN_SECRET` | Secret for access token | `your_secret_key` |
| `ACCESS_TOKEN_EXPIRY` | Access token expiration | `1d` |
| `REFRESH_TOKEN_SECRET` | Secret for refresh token | `your_secret_key` |
| `REFRESH_TOKEN_EXPIRY` | Refresh token expiration | `10d` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | `cloud_name` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `123456789` |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | `secret_key` |
| `CORS_ORIGIN` | Allowed CORS origin | `http://localhost:3000` |

### Nodemon Configuration

The `nodemon.json` file:

```json
{
  "env": {
    "ACCESS_TOKEN_SECRET": "123456789",
    "REFRESH_TOKEN_SECRET": "987654321"
  },
  "exec": "node -r dotenv/config src/index.js"
}
```

- Automatically restarts on changes
- Loads environment variables
- Watches all `.js` files by default

### Code Formatting

The `.prettierrc` file:

```json
{
  "singleQuote": false,
  "bracketSpacing": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "semi": true
}
```

**Apply formatting:**
```bash
npx prettier --write .
```

---

## 📁 Project Structure

```
Backend-With_Project/
│
├── src/
│   ├── index.js                    # Application entry point
│   │   └── Connects to MongoDB
│   │   └── Starts Express server
│   │   └── Handles startup errors
│   │
│   ├── app.js                      # Express app configuration
│   │   └── Middleware setup
│   │   └── CORS configuration
│   │   └── Routes registration
│   │
│   ├── constants.js                # Project constants
│   │   └── Database names
│   │   └── Configuration values
│   │
│   ├── db/
│   │   └── index.js                # MongoDB connection logic
│   │       └── Mongoose configuration
│   │       └── Error handling
│   │       └── Connection pooling
│   │
│   ├── models/                     # Mongoose schemas and models
│   │   ├── user.model.js           # User schema with methods
│   │   │   └── Password hashing
│   │   │   └── Token generation
│   │   │   └── Password verification
│   │   │
│   │   ├── video.model.js          # Video schema
│   │   │   └── File references
│   │   │   └── Metadata fields
│   │   │   └── Pagination plugin
│   │   │
│   │   └── subscription.model.js   # Subscription schema
│   │       └── Subscriber reference
│   │       └── Channel reference
│   │
│   ├── controllers/                # Business logic for routes
│   │   └── user.controller.js      # User operations
│   │       ├── registerUser
│   │       ├── loginUser
│   │       ├── logoutUser
│   │       ├── refreshAccessToken
│   │       ├── changeCurrentPassword
│   │       ├── getCurrentUser
│   │       ├── updateAccountDetails
│   │       ├── updateUserAvatar
│   │       └── updateUserCoverImage
│   │
│   ├── routes/                     # API route definitions
│   │   └── user.routes.js          # User endpoints
│   │       ├── /register
│   │       ├── /login
│   │       ├── /logout
│   │       └── /refresh-token
│   │
│   ├── middlewares/                # Custom middleware functions
│   │   ├── auth.middleware.js      # JWT verification
│   │   │   └── verifyJWT function
│   │   │   └── Token extraction
│   │   │   └── User attachment
│   │   │
│   │   └── multer.middleware.js    # File upload handling
│   │       └── Disk storage config
│   │       └── Temporary file storage
│   │
│   └── utils/                      # Utility functions and classes
│       ├── asyncHandler.js         # Async error wrapper
│       │   └── Promise-based error handling
│       │
│       ├── ApiError.js             # Custom error class
│       │   └── Status codes
│       │   └── Error messages
│       │   └── Stack traces
│       │
│       ├── ApiResponse.js          # Standardized response class
│       │   └── Response formatting
│       │   └── Status handling
│       │
│       └── cloudinary.js           # Cloudinary upload utility
│           └── File upload
│           └── Error handling
│           └── Local cleanup
│
├── public/
│   └── temp/                       # Temporary file storage
│       └── .gitkeep               # Git placeholder
│
├── package.json                    # Project metadata and dependencies
├── package-lock.json               # Locked dependency versions
├── nodemon.json                    # Nodemon configuration
├── .prettierrc                      # Prettier configuration
├── .prettierignore                  # Prettier ignore patterns
├── .gitignore                       # Git ignore patterns
├── readme.md                        # Original README
└── README_DETAILED.md               # This detailed guide
```

### Directory Purposes

- **src/**: Source code directory
- **db/**: Database connection logic
- **models/**: Mongoose schemas
- **controllers/**: Request handlers
- **routes/**: API endpoints
- **middlewares/**: Express middlewares
- **utils/**: Helper functions
- **public/temp/**: Temporary file storage (for multer)

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:8000/api/v1
```

### User Routes

All user endpoints are prefixed with `/users`.

#### 1. Register User

**Endpoint:** `POST /users/register`

**Description:** Create a new user account with avatar and optional cover image.

**Headers:**
```
Content-Type: multipart/form-data
```

**Request Body (Form Data):**
```
fullName: string (required, min 1 char)
email: string (required, valid email)
username: string (required, min 1 char)
password: string (required, min 1 char)
avatar: file (required, image file)
coverImage: file (optional, image file)
```

**Example using cURL:**
```bash
curl -X POST http://localhost:8000/api/v1/users/register \
  -F "fullName=John Doe" \
  -F "email=john@example.com" \
  -F "username=johndoe" \
  -F "password=Password123" \
  -F "avatar=@./avatar.jpg" \
  -F "coverImage=@./cover.jpg"
```

**Success Response (201):**
```json
{
  "statusCode": 201,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "fullName": "John Doe",
    "email": "john@example.com",
    "username": "johndoe",
    "avatar": "https://res.cloudinary.com/...",
    "coverImage": "https://res.cloudinary.com/...",
    "watchHistory": [],
    "createdAt": "2024-02-04T10:00:00.000Z",
    "updatedAt": "2024-02-04T10:00:00.000Z"
  },
  "message": "User registered successfully",
  "success": true
}
```

**Error Response (400/409):**
```json
{
  "statusCode": 409,
  "data": null,
  "message": "User with email or username already exists",
  "success": false
}
```

---

#### 2. Login User

**Endpoint:** `POST /users/login`

**Description:** Authenticate user and receive tokens.

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "username": "johndoe",
  "password": "Password123"
}
```

*Note: Provide either email or username*

**Example using cURL:**
```bash
curl -X POST http://localhost:8000/api/v1/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"Password123"}'
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "data": {
    "user": {
      "_id": "507f1f77bcf86cd799439011",
      "fullName": "John Doe",
      "email": "john@example.com",
      "username": "johndoe",
      "avatar": "https://res.cloudinary.com/...",
      "coverImage": "https://res.cloudinary.com/..."
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "User Logged In successfully",
  "success": true
}
```

**Cookies Set:**
- `accessToken`: Short-lived token (1 day)
- `refreshToken`: Long-lived token (10 days)

---

#### 3. Logout User

**Endpoint:** `POST /users/logout`

**Description:** Logout user and clear tokens.

**Headers:**
```
Authorization: Bearer <accessToken>
```

**Authentication:** Required (verifyJWT middleware)

**Example using cURL:**
```bash
curl -X POST http://localhost:8000/api/v1/users/logout \
  -H "Authorization: Bearer <your_access_token>"
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "data": {},
  "message": "User Logged out",
  "success": true
}
```

**Cookies Cleared:**
- `accessToken`: Cleared
- `refreshToken`: Cleared

---

#### 4. Refresh Access Token

**Endpoint:** `POST /users/refresh-token`

**Description:** Get a new access token using refresh token.

**Headers:**
```
Content-Type: application/json
```

**Request Body (Optional):**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

*Note: If not in body, taken from cookies*

**Example using cURL:**
```bash
curl -X POST http://localhost:8000/api/v1/users/refresh-token \
  -H "Content-Type: application/json" \
  -d '{"refreshToken":"<your_refresh_token>"}'
```

**Success Response (200):**
```json
{
  "statusCode": 200,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "access token refreshed",
  "success": true
}
```

---

## 📊 Models

### User Model

**File:** `src/models/user.model.js`

**Schema Definition:**

```javascript
{
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String,              // Cloudinary URL
    required: true
  },
  coverImage: {
    type: String               // Cloudinary URL (optional)
  },
  watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video"
    }
  ],
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  refreshToken: {
    type: String
  },
  timestamps: true
}
```

**Custom Methods:**

1. **isPasswordCorrect(password)**
   - Compares provided password with hashed password
   - Returns: boolean

2. **generateAccessToken()**
   - Creates JWT access token
   - Payload: _id, email, username, fullName
   - Expiry: 1 day

3. **generateRefreshToken()**
   - Creates JWT refresh token
   - Payload: _id, email, username, fullName
   - Expiry: 10 days

**Middleware:**

- `pre("save")`: Hashes password before saving if modified

---

### Video Model

**File:** `src/models/video.model.js`

**Schema Definition:**

```javascript
{
  videoFile: {
    type: String,              // Cloudinary URL
    required: true
  },
  thumbnail: {
    type: String,              // Cloudinary URL
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,              // In seconds
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  timestamps: true
}
```

**Plugins:**
- `mongooseAggregatePaginate`: Enables pagination on aggregation queries

---

### Subscription Model

**File:** `src/models/subscription.model.js`

**Schema Definition:**

```javascript
{
  subscriber: {
    type: Schema.Types.ObjectId,  // User subscribing
    ref: "User"
  },
  channel: {
    type: Schema.Types.ObjectId,  // User being subscribed to
    ref: "User"
  },
  timestamps: true
}
```

---

## 🔐 Middleware

### 1. Authentication Middleware (`verifyJWT`)

**File:** `src/middlewares/auth.middleware.js`

**Purpose:** Verify JWT tokens and attach user to request

**Function:**
```javascript
export const verifyJWT = asyncHandler(async (req, res, next) => { ... })
```

**Workflow:**
1. Extract token from Authorization header (Bearer format) or cookies
2. Verify token using ACCESS_TOKEN_SECRET
3. Find user by decoded token ID
4. Attach user to req.user
5. Call next() to proceed

**Usage:**
```javascript
router.route("/logout").post(verifyJWT, logoutUser)
```

**Error Handling:**
- 401 if no token provided
- 401 if token is invalid
- 401 if user not found

---

### 2. File Upload Middleware (`multer`)

**File:** `src/middlewares/multer.middleware.js`

**Purpose:** Handle file uploads to temporary storage

**Configuration:**
```javascript
const storage = multer.diskStorage({
  destination: "./public/temp",
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

export const upload = multer({ storage })
```

**Usage Examples:**

Single file upload:
```javascript
router.post("/avatar", upload.single("avatar"), controller)
```

Multiple files:
```javascript
router.post("/register", upload.fields([
  { name: "avatar", maxCount: 1 },
  { name: "coverImage", maxCount: 1 }
]), registerUser)
```

**Note:** Files are temporarily stored in `public/temp/` before being uploaded to Cloudinary and deleted.

---

## 🛠️ Utilities

### 1. AsyncHandler

**File:** `src/utils/asyncHandler.js`

**Purpose:** Wrap async route handlers to catch errors automatically

**Implementation:**
```javascript
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
      .catch((err) => next(err))
  }
}
```

**Why It's Needed:**
- Catches errors in async functions
- Passes errors to Express error handler
- Eliminates need for try-catch in every route

**Usage:**
```javascript
const registerUser = asyncHandler(async (req, res) => {
  // Your async code here
})
```

---

### 2. ApiError

**File:** `src/utils/ApiError.js`

**Purpose:** Standardized error class for API responses

**Class Definition:**
```javascript
class ApiError extends Error {
  constructor(statusCode, message = "Something Went Wrong", errors = [], stack = "") {
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.success = false
    this.error = errors
    
    if(stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}
```

**Properties:**
- `statusCode`: HTTP status code (400, 401, 404, 500, etc.)
- `message`: Error message
- `success`: Always false for errors
- `error`: Array of additional error details
- `data`: Always null
- `stack`: Stack trace

**Usage:**
```javascript
throw new ApiError(400, "All fields are required")
throw new ApiError(401, "Invalid credentials")
throw new ApiError(409, "User already exists")
```

---

### 3. ApiResponse

**File:** `src/utils/ApiResponse.js`

**Purpose:** Standardized response class for successful responses

**Class Definition:**
```javascript
class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode
    this.data = data
    this.message = message
    this.success = statusCode < 400
  }
}
```

**Properties:**
- `statusCode`: HTTP status code
- `data`: Response data
- `message`: Success message
- `success`: true if statusCode < 400, false otherwise

**Usage:**
```javascript
return res.status(201).json(
  new ApiResponse(201, createdUser, "User registered successfully")
)
```

---

### 4. Cloudinary Upload

**File:** `src/utils/cloudinary.js`

**Purpose:** Upload files to Cloudinary and manage local cleanup

**Configuration:**
```javascript
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})
```

**Function:** `uploadONCloudinary(localFilePath)`

**Parameters:**
- `localFilePath`: Path to file in temp storage

**Returns:**
- `response`: Cloudinary response object with URL
- `null`: If upload fails

**Workflow:**
1. Check if local file path exists
2. Upload to Cloudinary with `resource_type: "auto"`
3. Delete local file if upload successful
4. Delete local file if upload fails
5. Return response or null

**Usage:**
```javascript
const avatar = await uploadONCloudinary(avatarLocalPath)
const coverImage = await uploadONCloudinary(coverImageLocalPath)

if (!avatar) {
  throw new ApiError(400, "Failed to upload avatar")
}
```

---

## 🔄 Authentication Flow

### Registration Flow

```
User submits form with files
        ↓
Multer uploads files to temp folder
        ↓
Validation checks:
  - All fields required
  - Email/username not duplicate
        ↓
Files uploaded to Cloudinary
        ↓
User document created in MongoDB:
  - Password hashed (bcryptjs)
  - Avatar URL stored
  - Cover image URL stored
        ↓
Temp files deleted
        ↓
User returned (without password/refreshToken)
        ↓
201 Created response
```

### Login Flow

```
User submits email/username and password
        ↓
User found in database
        ↓
Password compared using bcryptjs.compare()
        ↓
If password incorrect: 401 error
        ↓
Generate tokens:
  - Access token (1 day)
  - Refresh token (10 days)
        ↓
Refresh token stored in database
        ↓
Tokens sent as HttpOnly cookies
        ↓
Response includes user data and tokens
        ↓
200 OK with cookies set
```

### Token Refresh Flow

```
Client sends refresh token
        ↓
Token verified using REFRESH_TOKEN_SECRET
        ↓
User fetched from database
        ↓
Stored token compared with sent token
        ↓
If mismatch: 401 error (token expired or reused)
        ↓
New tokens generated
        ↓
Tokens sent as HttpOnly cookies
        ↓
Response includes new tokens
        ↓
200 OK with new cookies
```

### Protected Route Flow

```
Client sends request with cookies
        ↓
verifyJWT middleware extracts token
        ↓
Token verified
        ↓
User fetched and attached to req.user
        ↓
Route handler executes
        ↓
Access to req.user throughout handler
```

---

## 🚀 Development Workflow

### Running the Application

```bash
npm run dev
```

**Expected Output:**
```
App is listening on port 8000
MongoDB connected !! DB Host: ac-xxxxx-shard-00-00.mongodb.net
```

### Code Formatting

Format all files:
```bash
npx prettier --write .
```

Format specific file:
```bash
npx prettier --write src/app.js
```

### Making API Requests

#### Using cURL

```bash
# Register
curl -X POST http://localhost:8000/api/v1/users/register \
  -F "fullName=Test User" \
  -F "email=test@example.com" \
  -F "username=testuser" \
  -F "password=Test123" \
  -F "avatar=@./avatar.jpg"

# Login
curl -X POST http://localhost:8000/api/v1/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123"}'

# Logout
curl -X POST http://localhost:8000/api/v1/users/logout \
  -H "Authorization: Bearer <token>"
```

#### Using Postman

1. **Create new request**
   - Set method (POST/GET/PUT/DELETE)
   - Enter URL: `http://localhost:8000/api/v1/users/...`

2. **For file uploads**
   - Select "Body" tab
   - Choose "form-data"
   - Add fields with type "file" for files

3. **For authentication**
   - Add "Authorization" header
   - Type: Bearer Token
   - Paste access token

#### Using Thunder Client (VS Code)

1. Install Thunder Client extension
2. Create request
3. Set method and URL
4. Configure headers and body
5. Send request

---

## 📝 Database Connection

**File:** `src/db/index.js`

**Connection Process:**

```javascript
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    
    console.log(`MongoDB connected !! DB Host: ${connectionInstance.connection.host}`)
  } catch (error) {
    console.error("Error connecting to database", error)
    process.exit(1)
  }
}
```

**Connection Details:**
- Uses connection pooling
- Handles connection errors
- Exits process on failed connection
- Logs connection host on success

**Environment Variable:**
```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
```

---

## 🔒 Security Considerations

### 1. Password Hashing

- **Library:** bcryptjs
- **Salt Rounds:** 10
- **Hashing:** Automatic before save via Mongoose pre-hook
- **Verification:** bcryptjs.compare() for login

### 2. JWT Tokens

- **Access Token:**
  - Short-lived (1 day by default)
  - Used for request authentication
  - Included in Authorization header or cookies

- **Refresh Token:**
  - Long-lived (10 days by default)
  - Stored in database
  - Used to generate new access tokens

### 3. CORS

```javascript
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))
```

- Restricts requests to configured origin
- Allows credentials (cookies)

### 4. Cookie Security

```javascript
const options = {
  httpOnly: true,    // Prevents XSS attacks
  secure: true       // Only sent over HTTPS
}

res.cookie("accessToken", accessToken, options)
```

### 5. Input Validation

```javascript
if([fullName, email, username, password].some((field) => {
  return field?.trim() === ""
})) {
  throw new ApiError(400, "All fields are required")
}
```

### 6. Environment Variables

- All sensitive data in .env
- Never hardcoded
- .env added to .gitignore

### 7. File Upload Security

- Files validated before upload
- Stored in temporary folder
- Uploaded to Cloudinary (external service)
- Local files deleted after upload
- File size limits enforced by multer

---

## 🤝 Contributing

### Development Workflow

1. **Create feature branch:**
   ```bash
   git checkout -b feature/YourFeature
   ```

2. **Make changes and commit:**
   ```bash
   git add .
   git commit -m "Add YourFeature description"
   ```

3. **Push to branch:**
   ```bash
   git push origin feature/YourFeature
   ```

4. **Create Pull Request:**
   - Go to GitHub/GitLab
   - Create PR with description
   - Request review

### Code Standards

- Follow Prettier formatting rules
- Use meaningful variable names
- Add comments for complex logic
- Handle all error cases
- Write descriptive commit messages

### Testing

Before submitting PR:
```bash
npm run dev  # Ensure no startup errors
npx prettier --write .  # Format code
```

---

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [MongoDB Atlas Setup](https://docs.atlas.mongodb.com/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [JWT Introduction](https://jwt.io/introduction)
- [CORS Explained](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [REST API Best Practices](https://restfulapi.net/)

---

## 📞 Support

For issues or questions:
- Check existing issues in repository
- Create detailed issue with error logs
- Include steps to reproduce
- Attach relevant code snippets

---

## 📄 License

ISC

---

**Project Type:** Video Streaming Platform Backend  
**Created:** February 2024  
**Last Updated:** February 4, 2026

---

### Quick Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npx prettier --write .` | Format code |
| `npm start` | Start production server |

### Useful Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/v1/users/register` | Create account |
| POST | `/api/v1/users/login` | Login |
| POST | `/api/v1/users/logout` | Logout |
| POST | `/api/v1/users/refresh-token` | Get new token |

---

**Happy Coding! 🚀**
