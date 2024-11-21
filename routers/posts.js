const express = require("express");
const router = express.Router();

const postsControllers = require("../controllers/posts_controllers.js");

//# COLLEGAMENTO FILE CON LISTA POSTS

const posts = require("../db/posts-db.js");
// console.log(posts);

//# ROTTE POSTS

//* INDEX

router.get("/", postsControllers.index);

//* SHOW

router.get("/:id", postsControllers.show);

//* STORE

router.post("/", postsControllers.store);

//* UPDATE

router.put("/:id", (req, res) => {
  res.send("Modifica interamente un post");
});

//* MODIFY

router.patch("/:id", (req, res) => {
  res.send("Modifica parzialmente un post");
});

//* DESTROY

router.delete("/:id", (req, res) => {
  res.send("Elimina un post");
});

module.exports = router;
