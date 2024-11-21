//# INDEX

function index(req, res) {
  res.json("Visualizza la lista di tutti i posts");

  // res.json(posts);
}

//# SHOW

function show(req, res) {
  const id = parseInt(req.params.id);
  res.json("Visualizza un post: " + id);

  //   const post = posts.find((post) => post.id === id);
  //   res.json(post);
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
