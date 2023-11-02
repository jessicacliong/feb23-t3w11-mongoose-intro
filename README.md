# feb23-t3w11-mongoose-intro

Note that we didn't do process.env.DB_URI package/setup stuff in this lesson, but we have to use that so that our DB password isn't exposed


## Thursday Goals

- Start a lil cat-tracking backend app project
- Data design / planning some schemas
- Basic CRUD for notes in Mongoose and Express

- Users
     - Username
     - Password
- Cats
     - All that cat data from Tuesday
     - name, breed, favouritePlaceToSit, etc
- Sightings
     - date
     - place
     - User.id
     - Cat.id


## Extra Notes

npm run seed
node src/seed.js
     database.js

npm run start
npm run dev
node src/index.js
     server.js
          database.js

