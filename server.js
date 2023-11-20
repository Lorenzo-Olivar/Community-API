// imports
const express = require("express");
// const { MongoClient, Timestamp } = require("mongodb");
const db = require('./config/connection');
// const userData = require('./models/userData');
// const thoughtData = require('./models/thoughtData');

const app = express();
const port = process.env.PORT || 3001;

// mongoose connection
db.once('open', () => {
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    });
});

// Connection string to local instance of MongoDB
// const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Initialize a new instance of MongoClient
// const client = new MongoClient(connectionStringURI);

// Declare a variable to hold the connection
// let db;

// Create variable to hold our database name
// const dbName = "socialDB";

// Use connect method to connect to the mongo server
// const initServer = async () => {
//     try {
//         await client.connect();
//         console.log("Connected to MongoDB");
//         db = client.db(dbName);

//         await db.collection('userCollection').deleteMany({});
//         await db.collection('thoughtCollection').deleteMany({});

//         await db.collection('userCollection').insertMany(userData);
//         await db.collection('thoughtCollection').insertMany(thoughtData);

        // app.listen(port, () => {
        //     console.log(`App listening at http://localhost:${port}`);
        // });
//     } catch (error) {
//         console.error(`Mongo Connection Error ${error.message}`);
//     }
// };
// initServer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create user
app.post('/user', (req, res) => {
    db.collection('userCollection').insertOne(
        {
            thoughts: [thoughtCollection.id],
            friends: [userCollection.id],
            username: req.body.username,
            email: req.body.email,
        }
    )
        .then(results => res.json(results))
        .catch(err => {
            if (err) throw err;
        });
});

// create thoughts
app.post('/thoughts', (req, res) => {
    db.collection('thoughtCollection').insertOne(
        {
            thoughtText: req.body.thoughtText,
            username: req.body.username,
            createdAT: Timestamp,
            reactions: [req.body.reactions],
        }
    )
        .then(results => res.json(results))
        .catch(err => {
            if (err) throw err;
        });
});

// view all users
app.get('/read', (req, res) => {
    db.collection('userCollection')
        .find({})
        .toArray()
        .then(results => res.json(results))
        .catch(err => {
            if (err) throw err;
        });
});

// view all thoughts
app.get('/read', (req, res) => {
    db.collection('thoughtCollection')
        .find({})
        .toArray()
        .then(results => res.json(results))
        .catch(err => {
            if (err) throw err;
        });
});