# vinery-be

### Summary
Welcome to vinery-be. This API is built to return categories of wine, wines associated to those categories, and food types that pair with each wine category. Thank you for checking out vinery-be!

### Versions
* npm 5.5.1
* Node.js v8.9.3
* Express.js 4.15.5
* Knex CLI:  0.14.2
  Local Knex:  0.14.3

### Set-up
* From the command line `git clone git@github.com:dionew1/vinery-be.git`
* `cd vinery-be`
* `npm install`
* `knex migrate:latest`
* `knex seed:run`

### End Points
To hit the endpoint after going through setup, run `npm start`. 
The development base url is `localhost:3000`. 
The production base url is `https://vinery-be.herokuapp.com/`. 

Wine Categories
* /api/v1/wine-categories
* /api/v1/wine-categories/:id/wines
* /api/v1/wine-categories/:id/foods

Wine
* /api/v1/wines
* /api/v1/wines/:id

Foods
* /api/v1/foods
* /api/v1/foods/:id/categories