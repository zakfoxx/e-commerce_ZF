const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tagData = await Tag.findAll({
    include: [Product],
  });
  res.json(tagData);
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  const tag = await Tag.findOne({ where: { id: req.params.id } });
  res.json(tag);
});
// be sure to include its associated Product data

router.post("/", async ({ body: { tag_name } }, res) => {
  // create a new tag
  const newTag = await Tag.create({
    tag_name,
  });
  res.json(newTag);
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  const updateTag = Tag.update(req.body, {
    where: { id: req.params.id },
  }).then((result) => {
    const tag = Tag.findOne({ where: { id: req.params.id } }).then(
      (results) => {
        res.json(results);
      }
    );
  });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({ where: { id: req.params.id } }).then((results) => {
    res.json(results);
  });
});

module.exports = router;
