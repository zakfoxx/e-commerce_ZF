const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // find all categories
  router.get(/api/categories, (req, res) => {
    res.send(categories)
  })
  // be sure to include its associated Products

  // find one category by its `id` value
  router.get(/api/categories, id, (req, res) => {
    let category = categories.find((category) => category.id === req.params.id);
    res.send(category);
  })
  // be sure to include its associated Products

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
