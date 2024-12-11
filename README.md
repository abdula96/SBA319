# SBA319

SBA319 API Documentation

Overview

This is a RESTful API built using Express.js, MongoDB, and Mongoose. It provides basic CRUD operations (Create, Read, Update, Delete) for managing Users, Posts, and Comments. This API allows clients to perform operations like retrieving, creating, updating, and deleting users, posts, and comments.

Technologies Used

Node.js (JavaScript runtime)
Express.js (Web framework)
MongoDB (NoSQL Database)
Mongoose (ODM for MongoDB)
Postman or any API testing tool
API Endpoints

Users
GET /api/users

Fetch all users.
Response Example:

[
{
"_id": "userId1",
"name": "John Doe",
"email": "johndoe@example.com",
"created_at": "2024-12-11T05:15:40.764Z",
"__v": 0
},
{
"_id": "userId2",
"name": "Jane Smith",
"email": "janesmith@example.com",
"created_at": "2024-12-11T05:15:40.765Z",
"__v": 0
}
]
POST /api/users

Create a new user.
Request Body:

{
"name": "Alice Johnson",
"email": "alice@example.com",
"age": 30
}
Response Example:

{
"\_id": "newUserId",
"name": "Alice Johnson",
"email": "alice@example.com",
"created_at": "2024-12-11T05:17:54.194Z",
"\_\_v": 0
}
GET /api/users/:id

Fetch a user by ID.
Response Example:

{
"\_id": "userId",
"name": "Alice Johnson",
"email": "alice@example.com",
"age": 30,
"created_at": "2024-12-11T05:17:54.194Z",
"\_\_v": 0
}
PATCH /api/users/:id

Update a user by ID.
Request Body:

{
"name": "Alice Updated",
"email": "alice.updated@example.com",
"age": 31
}
Response Example:

{
"\_id": "userId",
"name": "Alice Updated",
"email": "alice.updated@example.com",
"age": 31,
"created_at": "2024-12-11T05:17:54.194Z",
"\_\_v": 0
}
DELETE /api/users/:id

Delete a user by ID.
Response Example:

{
"message": "User deleted successfully"
}
Posts
GET /api/posts

Fetch all posts.
Response Example:

[
{
"_id": "postId1",
"title": "Post Title",
"content": "This is the content of the post.",
"user": "userId1",
"created_at": "2024-12-11T05:20:40.764Z",
"__v": 0
},
{
"_id": "postId2",
"title": "Another Post Title",
"content": "This is another post.",
"user": "userId2",
"created_at": "2024-12-11T05:20:40.764Z",
"__v": 0
}
]
POST /api/posts

Create a new post.
Request Body:

{
"title": "New Post Title",
"content": "This is the content of the new post.",
"user": "userId"
}
Response Example:

{
"\_id": "newPostId",
"title": "New Post Title",
"content": "This is the content of the new post.",
"user": "userId",
"created_at": "2024-12-11T05:20:40.764Z",
"\_\_v": 0
}
Comments
GET /api/comments/:postId

Fetch all comments for a specific post.
Response Example:

[
{
"_id": "commentId1",
"content": "Great post!",
"user": "userId2",
"post": "postId1",
"created_at": "2024-12-11T05:25:40.764Z",
"__v": 0
},
{
"_id": "commentId2",
"content": "Nice post!",
"user": "userId1",
"post": "postId2",
"created_at": "2024-12-11T05:25:40.764Z",
"__v": 0
}
]
POST /api/comments

Create a new comment.
Request Body:

{
"content": "Nice post!",
"user": "userId1",
"post": "postId2"
}
Response Example:

{
"\_id": "newCommentId",
"content": "Nice post!",
"user": "userId1",
"post": "postId2",
"created_at": "2024-12-11T05:25:40.764Z",
"\_\_v": 0
}
Setup and Installation

1. Clone the Repository
   git clone https://github.com/yourusername/SBA319.git
2. Install Dependencies
   Navigate to the project folder and install dependencies:

cd SBA319
npm install 3. Create an .env File
Create a .env file in the root of the project with the following content:

MONGO_URI=mongodb+srv://yourMongoURIHere
PORT=5000 4. Start the Application
To run the app, use the following command:

npm start
The API will be available at http://localhost:5000.

5. Populate Data (Optional)
   To populate the database with sample data, run the populate script:

node data/populateData.js
This will add some sample users, posts, and comments into the database.

Testing API Endpoints

You can use Postman or Insomnia to test the endpoints.

Headers
Ensure that the Content-Type header is set to application/json for all POST, PATCH, and PUT requests.

Example Requests
GET /api/users – Retrieve all users.
POST /api/users – Create a new user.
PATCH /api/users/:id – Update a user by ID.
DELETE /api/users/:id – Delete a user by ID.
