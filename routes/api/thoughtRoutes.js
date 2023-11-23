const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  putSingleThought,
  deleteSingleThought,
  createThoughtReaction,
  deleteThoughtReaction,
} = require('../../controllers/thoughtController');

router.route('/')
.get(getThoughts)
.post(createThought);

router.route('/:thoughtId')
.get(getSingleThought)
.put(putSingleThought)
.delete(deleteSingleThought);

router.route('/:thoughtId/reactions')
.post(createThoughtReaction)
.delete(deleteThoughtReaction);

module.exports = router;