const { truncateTables, seedUsersTable } = require('./dbUtils');

module.exports = async () => {
  await truncateTables();
  await seedUsersTable();
};
