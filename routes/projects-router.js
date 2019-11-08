const express = require('express');
const router = express.Router();

// const knex = require('../data/db-config');
const Projects = require('../models/projects-models');

// GET: all projects
router.get('/', (req, res) => {
  Projects.get()
    .then(projects => {
      let projectList = projects.map(project => {
        return { ...project, completed: project.completed === 0 ? false : true }
      })
      res.json(projectList);
    })
    .catch(err => res.status(500).json({
      error: 'Failed to retrieve projects' 
    }));
});

// GET: Single Project
router.get('/:id', (req, res) => {
  Projects.get(req.params.id)
  .then(project => res.json({ ...project, completed: project.completed === 0 ? false : true }))
  .catch(err = res.status(500).json({ error: 'Failed to retrieve project' }))
})

// GET: All tasks for project
router.get('/:id/tasks', (req, res) => {
  
})

// Post new project
router.post('/', (req, res) => {
  knex
    .insert(req.body, 'id')
    .into('projects')
    .then(id => res.status(200).json(id))
    .catch(err => res.status(500).json({ error: 'Failed to add project' }));
});

router.put('/:id', (req, res) => {
  const changes = req.body;

  knex('projects')
    .where({ id: req.params.id })
    .update(changes)
    .then(count => res.status(200).json(count))
    .catch(err => res.status(500).json({ error: 'Failed to update project' }));
});

router.delete('/:id', (req, res) => {
  knex('projects')
    .where({ id: req.params.id })
    .del()
    .then(count => res.status(200).json(count))
    .catch(err => res.status(500).json({ error: 'Failed to delete project' }));
});

module.exports = router;
