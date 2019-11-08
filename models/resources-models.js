const db = require('../data/db-config');

module.exports = {
  get,
  add
};

function get(id) {
  return id
    ? db('resources').where({ id }).first()
    : db('resources')
}

function add(resource) {
  return db('resources')
    .insert(resource);
}