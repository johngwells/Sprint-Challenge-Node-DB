const db = require('../data/db-config');

module.exports = {
  get,
  getTasks,
  getDetails,
  add,
  addTask
};

function get(id) {
  return id
    ? db('projects').where({ id }).first()
    : db('projects')
}

function getTasks(id) {
  return db('projects as p')
    .join('tasks as t', 'p.id', 't.project_id')
    .select('p.id', 'p.name as project', 't.description as task_description', 't.notes', 't.completed')
    .where({ project_id: id })
}

function add(project) {
  return db('projects')
    .insert(project)
}

function addTask(id, task) {
  return db('tasks')
    .insert({
      ...task,
      project_id: id
    })
}