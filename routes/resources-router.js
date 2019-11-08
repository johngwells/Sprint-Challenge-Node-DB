const express = require('express')
const router = express.Router();

const Resources = require('../models/resources-models');

// GET: All resources
router.get('/', (req, res) => {
  Resources.get()
  .then(resources => res.status(200).json(resources))
  .catch(err => res.status(500).json({ error: 'Failed to retrieve all resources' }));
});

// GET: A single resource
router.get('/:id', (req, res) => {
  Resources.get(req.params.id)
  .then(resource => res.status(200).json(resource))
  .catch(err => res.status(500).json({ error: 'Failed to get single resource'}));
});

router.post('/', (req, res) => {
  Resources.add(req.body)
  .then(count => res.status(201).json(count))
  .catch(err => res.status(500).json({ error: 'Failed to add new resource' }))
});

module.exports = router;
