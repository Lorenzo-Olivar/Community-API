# Community-Network-API

## General Information

We decided to try and create a Pokémon turn-based battle system. The project uses Node.js and Express.js for a RESTful API to manage user-server interactions, Handlebars.js for dynamic HTML generation, and MySQL with Sequelize for structured data storage. It follows the Model-View-Controller pattern for code organization, employs security measures like user authentication and data protection, and conducts thorough testing for quality assurance, aligning with the class requirements.


## Table of Contents

- [General](#general-information)
- [Description](#description)
- [Deployed Site](#deployed-site)
- [Technologies Used](#technologies-used)
- [Installation](#local-installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Deployed Site


Experience playing a [Pokémon](https://poke-fight-poke-dex1-c86d1d43fd89.herokuapp.com/) battle through our Heroku deployment.

## Walkthrough Video 

[Link to the Video Walkthougth](https://drive.google.com/file/d/1xbsX5GkBXMYy_dEqEyU7er7-QS2RAleh/view)

## Description

For our second project at Berkeley Coding Bootcamp, we tackled the task of creating a Pokémon turn-based battle system. To make this happen, we built a robust RESTful API using Node.js and Express.js, which forms the core of our web application. This API facilitates communication between users and the server by handling various requests and responses.

On the front-end, we employed Handlebars.js as our template engine, enabling us to generate HTML content dynamically for a smooth user experience. To store data persistently, we opted for MySQL and Sequelize, ensuring efficient database management while adhering to a well-structured schema for Pokémon and user data.

We implemented GET and POST routes to enable users to interact with the system. This allows users to access information about their Pokémon, initiate battles, and save their progress. Our project follows the Model-View-Controller (MVC) paradigm, providing clear organization and separation of files to enhance code maintenance.

Security is a priority, so we integrated user authentication through Express-Session and Cookies to protect user instances. Additionally, sensitive information like API keys is securely stored using .ENV variables to prevent unauthorized access.

Lastly, rigorous testing ensures the quality of our application. We focus on well-labeled code, data integrity, and consistency in data types throughout the system.

## Technologies Used

- Insomnia
- Mongoose
- Moment.js
- Express.js
- Node.js
- MongoDB

## Local Installation 

If you would like to see a local version of the site, follow the steps below: 

  1. Clone the [repository](https://github.com/Lorenzo-Olivar/Community-Network-API).
  2. Change to root directory of the cloned repo in your command line.
  3. Run `npm install` to bring in dependencies.
  4. Start the server by running `npm start`.
  5. In Insomnia Core, go to `http://localhost:3001`.


## Usage

## Credits

## License

[![License: MIT](https://img.shields.io/badge/NoLicense-blue.svg)](https://opensource.org)

## Contact

### Collaborators

- Zo Olivar - [Lorenzo-Olivar](https://github.com/Lorenzo-Olivar)

GitHub: 
[Community-Network-API](https://github.com/Lorenzo-Olivar/Community-Network-API)


---
