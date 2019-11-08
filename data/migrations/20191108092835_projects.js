
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('projects', tbl => {
      tbl.increments();
      // tbl.integer('id').unique();
      tbl.string('name').notNullable();
      tbl.string('description');
      tbl.boolean('boolean', false);
    }),
    knex.schema.createTable('resources', tbl => {
      // tbl.integer('id').unique();
      tbl.string('name').unique().notNullable();
      tbl.string('description');
    }),
    knex.schema.createTable('tasks', tbl => {
      // tbl.integer('id').unique();
      tbl.string('description').notNullable();
      tbl.string('notes');
      tbl.boolean('boolean', false);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTableIfExists('projects'),
    knex.schema.dropTableIfExists('resources'),
    knex.schema.dropTableIfExists('tasks')
  ])
};
