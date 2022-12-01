# zModernization

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Backend API Server

To start the API server, connect to the WSC vpn, then cd into the backend dir and run `npm install` and then `npm start`

# Using zCX for the backend API Server

To run the backend API Server in a zCX environment on esysmvs1:
  - start the mongo container: 
    - docker run --rm --network bills_network --name mongo -d -p 27017:27017 -v mongo_data_db:/data/db icr.io/ibmz/mongo:4.4.1
      note: I'm not sure where the mongo_data_db is actually stored, or if only my id (bkeller) can start the container with that volume mount
  - start the node-api-concentrator container passing in the env var for the mongodb connection string pointing to the mongo container:
    - docker run --rm --network bills_network -d -e MONGODB_CONNSTRING=mongodb://mongo:27017/item_catalog -p 3000:3000 node-api-concentrator


