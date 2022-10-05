const router = require("express").Router();
const { reject } = require("bcrypt/promises");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
router.get("/", async (req, res) => {
  const categoryData = await Category.findAll({});
  res.json(categoryData);
});
// be sure to include its associated Products

// find one category by its `id` value
router.get("/:id", async (req, res) => {
  const category = await Category.findOne({ where: { id: req.params.id } });
  res.json(category);
});

// ModelName.findOne({
//   // Optional options
//   // Filtering results using where
//   where: { firstColumn: "value" },
//   // Returning only specified columns
//   attributes: ["firstColumn", "secondColumn"],
// }).then((foundResult) => {});

// be sure to include its associated Products

router.post("/", async ({ body: { category_name } }, res) => {
  // create a new category
  const newCategory = await Category.create({
    category_name,
  });
  res.json(newCategory);
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
