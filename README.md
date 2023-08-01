# Get YouTube Subscribers
The YouTube Subscribers is a simple backend project that provides a RESTful API for retrieving data about subscribers to YouTube channels. The project is built using Node.js and Express, and uses MongoDB as the database to store the subscriber data.

The API provides several endpoints that allow users to retrieve data in JSON format, including an endpoint to get all subscribers, an endpoint to get all subscribers' names and subscribed channels, and an endpoint to get details about a particular subscriber based on their ID. The project also handles error cases, such as when an incorrect subscriber ID is provided or when a user accesses an unknown endpoint.

The main purpose of this project is to provide a starting point for building a larger application that deals with YouTube data. The project can be used as a basis for building a more complex API that includes additional functionality, such as adding or deleting subscribers, searching for subscribers based on specific criteria, or integrating with the YouTube API to access data about channels and videos.
## Deployment
Deployment link: https://alma-better-get-youtube-subs.vercel.app/

## Content
### How to run Locally
## Clone the project
```
https://github.com/Lakshy18/AlmaBetter_get_Youtube_Subs.git
```
## Go to the project directory
```
  cd almabetter-backend
```
## Install dependencies
```
  npm install
```
#### Create .env file using .env.sample.

#### Set the environment key DATABASE_URL with you mongoDB connection URL

## Start the server
```
  npm run start
```
## Quick Start
Node.js module should be installed in your machine befor download the project and run this command
```
  npm install
```
## Start the server:
```
  npm start
```
### Environment Variables
To run this project, you will need to add the following environment variables to your .env file

``PORT``
``DATABASE_URL``

## Running Tests
To run tests, run the following command
```
  npm run test
```
## API Endpoints
* GET http://localhost:3000/ → The client will see the “Hello User!” message which is used to verify that application is working properly.

* GET http://localhost:3000/subscribers → When the user hit this, endpoint /subscribers, the client will get an array of all subscribers in JSON format from the database where the data is stored in local MongoDB database.

* GET http://localhost:3000/subscribers/names →When the user hit this, endpoint /subscribers/names the client will to get an array of all subscribers in JSON format with only name and subscribed Channel fields from the database, where the data is stored in local MongoDB database.

* GET http://localhost:3000/subscribers/:id → When the user hit this, endpoint /subscribers/:id in ID, the user needs to enter the USER’S ID which is stored in the database to get a particular user’s details like name, subscribed Channel and subscribed Date from the database, where the data is stored in local MongoDB database.

* GET http://localhost:3000/subscribers/:id → When the client gives incorrect USER’S ID instead of correct USER’S ID (where the ID does not match) which is stored in database, the Client will get an Error message like“ Subscriber doesn't exist with the given _id: sdijvrbv” in JSON format with 400 error status code.

* GET http://localhost:3000/something → when the user hit the unwanted route which is not mentioned above (which is used to handle all other requests), they will get an error message like Route not found in JSON format with an 404 error status code.
## Author
* Lakshy Raj Singh dodiya
