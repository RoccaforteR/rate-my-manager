const Manager = require('./manager');
const Rating = require('./rating');

Manager.hasMany(Rating, {
    foreignKey: 'manager_id',
    onDelete: 'CASCADE'
});

Rating.belongsTo(Manager, {
    foreignKey: 'manager_id'
});

module.exports = { Rating };