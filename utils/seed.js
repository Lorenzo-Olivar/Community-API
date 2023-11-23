const connection = require('../config/connection');
const { User , Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async() => {
    console.log('connected');

    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    };

    let thoughtCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('users');
    };

    const thoughtInitData = [];

    for (let i = 0; i < 20; i++) {
        const username = getRandomName();
        const email = `${username}@gmail.com`;
    
        userInitData.push({
          username,
          email,
        });
    };
    
    await Thought.collection.insertMany();

    const userInitData = [];

    for (let i = 0; i < 20; i++) {
        const username = getRandomName();
        const email = `${username}@gmail.com`;
    
        userInitData.push({
          username,
          email,
        });
    };

    await User.collection.insertMany();

    console.info('Seeding complete! <3');
    process.exit(0);
});