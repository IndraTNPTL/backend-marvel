# Marvel Comics App Backend 🚀

Hey there! Welcome to the backend of the Marvel Comics App. If you haven't checked out the frontend yet, here it is => [ Marvel Comics App Frontend Repository](https://github.com/IndraTNPTL/frontend-marvel).

## Overview 🦸🏽‍♂️🔧

The backend acts as a bridge between the Marvel API and the frontend, ensuring a smooth flow of data. Let's dive into the key aspects:

### API Integration 🔄

The backend connects to the [Le Reacteur Marvel API](https://lereacteur-marvel-api.herokuapp.com) to retrieve data for the frontend.

### Routes Breakdown 🛣️

#### 1. **GET /characters**

- **Description**: Fetches all Marvel characters.
- **Query Parameters**:
  - `page` (optional): Specifies the page number for pagination.
  - `name` (optional): Filters characters by name.
- **Response**: Returns a list of Marvel characters.

#### 2. **GET /character/:characterId**

- **Description**: Fetches details of a specific character by ID.
- **Params**:
  - `characterId`: ID of the character.
- **Response**: Returns details of the specified character.

#### 3. **GET /comics**

- **Description**: Fetches all Marvel comics.
- **Query Parameters**:
  - `page` (optional): Specifies the page number for pagination.
  - `title` (optional): Filters comics by title.
- **Response**: Returns a list of Marvel comics.

#### 4. **GET /comics/:characterId**

- **Description**: Fetches comics associated with a specific character ID.
- **Params**:
  - `characterId`: ID of the character.
- **Response**: Returns a list of comics associated with the specified character.

#### 5. **GET /comic/:comicId**

- **Description**: Fetches details of a specific comic by ID.
- **Params**:
  - `comicId`: ID of the comic.
- **Response**: Returns details of the specified comic.

#### 6. **GET / (Root)**

- **Description**: Fetches data from the Le Reacteur Marvel API for the homepage.
- **Response**: Returns data from the Marvel API.

#### 7. **Wildcard Route**

- **Description**: Handles all undefined routes.
- **Response**: Returns a 404 status with a message stating the route doesn't exist.

### Project Dependencies 🧰

Here are the main packages used in this backend:

```json
"dependencies": {
  "axios": "^0.24.0",
  "cors": "^2.8.5",
  "dotenv": "^10.0.0",
  "express": "^4.17.1"
}
```

### Get Started 🚀

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/backend-marvel.git
   ```

2. Navigate to the project directory:

   ```bash
   cd backend-marvel
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

That's it! You're ready to explore the backend of the Marvel Comics App. If you have any questions or run into issues, feel free to reach out. Happy coding! 🌟
