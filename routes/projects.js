const express = require('express');
const router = express.Router();
const { projects } = require('../data');

router.get('/:projectId', setProject, (req, res) => {
  res.json(project)
})

function setProject(req, res, next) {
  const projectId = req.params.projectId;
  project = projects.find(project => project.id.toString() === projectId);
  
  if (!project) return res.status(404).send('Project not found');
  next();
}


module.exports = router;