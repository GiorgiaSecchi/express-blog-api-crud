//# COLLEGAMENTO FILE CON LISTA POSTS

const postsData = require("../data/posts_data.js");
// console.log(posts);

//# INDEX

function index(req, res) {
  res.json(postsData);
  // res.json("Visualizza la lista di tutti i posts");
}

//# SHOW

function show(req, res) {
  const id = parseInt(req.params.id);

  const post = postsData.find((post) => post.id === id);
  console.log(post);

  if (!post) {
    return res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  res.json(post);

  // res.json("Visualizza un post: " + id);
}

//# STORE

function store(req, res) {
  res.json("Crea un nuovo post");
}

//# UPDATE

function update(req, res) {
  const id = parseInt(req.params.id);
  res.json("Sostituire interamente il post " + id);
}

//# MODIFY

function modify(req, res) {
  const id = parseInt(req.params.id);
  res.json("Modifica il post " + id);
}

//* DESTROY

function destroy(req, res) {
  const id = parseInt(req.params.id);
  res.json("Elimina il post " + id);
}

module.exports = { index, show, store, update, modify, destroy };
