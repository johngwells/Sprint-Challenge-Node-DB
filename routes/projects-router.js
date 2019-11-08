const express = require('express');
const knex = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
  knex
    .select('*')
    .from('projects')
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json({
      error: 'Failed to retrieve projects' 
    }));
});

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
