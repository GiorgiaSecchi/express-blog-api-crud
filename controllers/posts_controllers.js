//# INDEX

function index(req, res) {
  res.json("Visualizza la lista di tutti i posts");
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

module.exports = { index, show, store };
