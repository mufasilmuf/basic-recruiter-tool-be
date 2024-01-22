# Recruiter Tool Backend

This repository contains the backend server for the Recruiter Tool project, built using Node.js.

### Prerequisites

- Node.js: Ensure that you have Node.js installed. Download it [here](https://nodejs.org/).

### Setup

1.  Clone the Repository:

    bashCopy code

    `git clone <repository-url>`

    Replace `<repository-url>` with the actual URL of the repository.

2.  Navigate to the Project Folder:

    bashCopy code

    `cd recruiter-tool-be`

3.  Install Dependencies:

    bashCopy code

    `npm install`

4.  Create a `.env` File:

    Create a `.env` file in the root directory with the following content:

    envCopy code

    `HOST=heffalump.db.elephantsql.com
USER=ziipikwn
DB_PORT=5432
DATABASE=ziipikwn
PASSWORD=fLOkas7eEEchRWWKZkdzXX6idamuOdbm
SSL=false
PORT=8050`

    Adjust the values based on your database configuration.

5.  Run the Server:

    bashCopy code

    `npm start`

    The server should start on the specified port (default is 8050).

### API Endpoints

- GET /candidates: Retrieve all candidates.

- POST /add-candidate: Add a new candidate.

  - Request Body Example:

    jsonCopy code

    `{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "qualification": "BE - Computer Science",
  "currentStatus": "CONTACTED",
  "expectedSalary": 80000,
  "computedScore": 0,
  "skillIds": [1, 2, 3]
}`

- GET /candidates/:id: Retrieve candidate details by ID.

- PUT /candidates/:id: Update candidate details by ID.

- DELETE /candidates/:id: Delete a candidate by ID.

### Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

### Additional Notes

- Environment Variables: Ensure that the `.env` file is correctly configured with your database information.

- Database Migrations: Before running the server, ensure that the database migrations have been applied. You can do this by running any migration scripts provided.

- Port Configuration: The default port for the server is 8050. If needed, you can change the port by modifying the `PORT` variable in the `.env` file.

Happy coding!
