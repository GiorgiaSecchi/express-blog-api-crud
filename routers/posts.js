const express = require("express");
const router = express.Router();

//# COLLEGAMENTO FILE CON LISTA POSTS

const posts = require("../db/posts-db.js");
// console.log(posts);

//# ROTTE POSTS

//* INDEX

router.get("/", (req, res) => {
  //   res.send("Visualizza la lista di tutti i posts");
  res.json(posts);
});

//* SHOW

router.get("/:id", (req, res) => {
  //   res.send("Visualizza un post");
  // res.json(`Visualizza un post: ${id}`);

  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  res.json(post);
});

//* STORE

router.post("/", (req, res) => {
  res.send("Crea un nuovo post");
});

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
