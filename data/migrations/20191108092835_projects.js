
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('projects', tbl => {
      tbl.increments();
      // tbl.integer('id').unique();
      tbl.string('name').notNullable();
      tbl.string('description');
      tbl.boolean('completed');
    }),
    knex.schema.createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name').unique().notNullable();
      tbl.string('description');
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    }),
    knex.schema.createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description').notNullable();
      tbl.string('notes');
      tbl.boolean('completed');
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
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
