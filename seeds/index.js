const seedRating = require('./reviewData');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedRating();
    console.log('\n----- RATINGS SEEDED -----\n');

    process.exit(0);
};

seedAll();
