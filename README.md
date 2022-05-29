To start the app:
use yarn start: dev

Routes:

POST: localhost:3000/api/auth/login:

It takes username and email from the request (form data and then checks for the password. (The password is hashed using the bcrypt Js library and thus it matches the given password and the hashed password ) . If the entered details are correct then “Login Successful “ response is received.
If the Details provided are incorrect, then unauthorized response is received.
Eg:

Request:

Response :
{
"statusCode": 401,
"message": "Unauthorized"
}

GET: localhost:3000/api/auth/ :
This Route call responds within the session and cookie information the cookie is valid for about 0.5 hours. .
Response:

{
"cookie": {
"originalMaxAge": 432000,
"expires": "2022-05-24T08:55:56.098Z",
"httpOnly": true,
"path": "/"
},
"authenticated": true
}

GET: localhost:3000/api/auth/status :
To get the status whether the user is logged in or not

@Post('localhost:3000/api/users/create'):
It creates the user from the data passed in the body.
The Email and user name have a lot of validations that are needed to be fulfilled and hence reasonable errors are shown . If the conditions are fulfilled then a user is created in the postgres database. The Password is not directly stored, but stored as a hash.

Request:

RESPONSE :
{
"username": "ris2107",
"email": "ris@gmail.com",
"password": "$2b$10$pDEwqdtPR1749X5zq3.GkegnUF.n6PG53dsr1ajsXnHCLY4fTkwY6",
"id": "3"
}

@GET(‘localhost:3000/api/users/username/:username’):
It fetches all the users from the program storage itself(can be used for cached data retrieval).The serialized user class used with it prevents the password from being sent to the client.

Request:
Response:
{
"message": "User has been created successfully",
"user": {
"username": "ris2107",
"email": "ris@gmail.com",
"password": "$2b$10$0bo2B80HXSZEssGNYbddWu1hba3v4fJqkJU8ev7JmRhXlqy8xpt.S",
"id": "21"
}
}

There are various routes for creating customers as well. The customers can later be used as admins or other purposes as required by the project demand.

The Various utilities like Authguard class implementations can be used to protect various routes as well, be it transaction validation routes etc.
The dtos folder has User Dtos which define the constraints as well as data fields which define the structure of the user in the data base as well as prevent the flushing of bad data into the DB.
The Error Responses are usually sent using the HttpStatus class of NestJs, but once, or twice custom errors have also been sent, which makes it easy to personalize and debug the responses.
Passport Validation has been done in the program , but can be replaced by own auth implementation as well.
