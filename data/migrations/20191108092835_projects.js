
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.integer('id').unique();
      tbl.string('name').notNullable();
      tbl.string('description');
      tbl.boolean('boolean', false);
    }),
    knex.schema.createTable('resources', tbl => {
      tbl.integer('id').unique();
      tbl.string('name').notNullable();
      tbl.string('description');
    }),
    knex.schema.createTable('tasks', tbl => {
      tbl.interger('id').unique();
      tbl.string('description').notNullable();
      tbl.string('notes');
      tbl.boolean('boolean', false);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('projects'),
    knex.schema.dropTableIfExists('resources'),
    knex.schema.dropTableIfExists('tasks')
  ])
};
