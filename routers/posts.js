const express = require("express");
const router = express.Router();

const postsController = require("../controllers/posts_controller.js");

//# COLLEGAMENTO FILE CON LISTA POSTS

const posts = require("../db/posts-db.js");
// console.log(posts);

//# ROTTE POSTS

//* INDEX

router.get("/", postsController.index);

//* SHOW

router.get("/:id", postsController.show);

//* STORE

router.post("/", postsController.store);

//* UPDATE

router.put("/:id", postsController.update);

//* MODIFY

router.patch("/:id", postsController.modify);

//* DESTROY

router.delete("/:id", (req, res) => {
  res.send("Elimina un post");
});

module.exports = router;
