# Movie-Cat API

This is the backend repository for the Movie-Cat API, which provides endpoints to retrieve information about movies and actors from a MongoDB database.

## Installation

To set up the project, follow the instructions below:

### Prerequisites

Ensure you have Node.js installed on your machine. Then, install `pnpm` globally if you haven't already:

```shell
npm install -g pnpm
```

### Clone the repository

Clone the repository to your local machine:

```shell
git clone <repository-url>
cd <repository-name>
```

### Install dependencies

Navigate to the repository directory and install the necessary dependencies:

```shell
pnpm install
```

## Environment Variables

To run the project, you need to set up a `.env` file in the root of the project directory with the following variables:

```plaintext
PORT=4000
PRODUCTION_MODE=no
PROD_MONGO_URI=mongodb+srv://madina123:aPEJFANNm8F2fPxl@mernapp.ypjkarx.mongodb.net/movie_cat?retryWrites=true&w=majority&appName=MERNapp
TEST_MONGO_URI=mongodb+srv://madina123:aPEJFANNm8F2fPxl@mernapp.ypjkarx.mongodb.net/movie_cat_dev?retryWrites=true&w=majority&appName=MERNapp
RESET_TEST_DB=yes
```

- **PORT**: The port the server will run on. The default is 4000.
- **PRODUCTION_MODE**: Set to `no` for development mode and `yes` for production mode.
- **PROD_MONGO_URI**: The URI for the production MongoDB database.
- **TEST_MONGO_URI**: The URI for the test MongoDB database.
- **RESET_TEST_DB**: If set to `yes`, the test database will be wiped and repopulated with mock data.

When running the server in production, you should set `PRODUCTION_MODE` to `yes` and use the `PROD_MONGO_URI` for database connections.

## Running the Server

Once you have configured the environment variables and installed the dependencies, you can start the server.

### Local Development

For development purposes, you can start the server with hot reloading:

```shell
pnpm dev
```

This command will start the server on the port specified in your `.env` file and enable hot reloading, so changes to the code will automatically restart the server.

### Production

To run the server in production mode:

- Set `PRODUCTION_MODE` to `yes` in your `.env` file.
- Start the server using the following command:

```shell
pnpm start
```

This command will start the server in production mode, which will disable hot reloading and use optimized settings.

## Endpoints

This API provides endpoints to retrieve data on movies and actors from the MongoDB database. For a detailed overview of available endpoints, please refer to the API documentation.

## Contributing

No contributions accepted at the moment.

## License

This project is licensed under the [Creative Commons Attribution License (CC BY)](https://creativecommons.org/licenses/by/4.0/). See the [LICENSE](LICENSE) file for more details.

---

Created by Madina Omarova.