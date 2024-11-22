//# COLLEGAMENTO FILE CON LISTA POSTS

const postsData = require("../data/posts_data.js");
// console.log(posts);

//# INDEX

function index(req, res) {
  const tag = req.query.tag;
  // res.json(tag);
  // console.log("TAG: " + tag);

  if (tag) {
    const post = postsData.filter((post) => {
      return post.tags.includes(tag.toLowerCase());
    });
    res.json(post);
    console.log(post);
  } else {
    res.json({
      count: postsData.length,
      posts: postsData,
    });
  }

  // res.json("Visualizza la lista di tutti i posts");
  // res.json(postsData);
}

//# SHOW

function show(req, res) {
  //* logica per recupero id
  const id = parseInt(req.params.id);
  const post = postsData.find((post) => post.id === id);

  //* avviso errore se il post non esiste
  if (!post) {
    return res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  //* risposta mostra post
  res.json(post);
  console.log("Il post mostrato è: ", post);

  // res.json("Visualizza un post: " + id);
}

//# STORE

function store(req, res) {
  const newPost = req.body;
  console.log(newPost);

  // res.json("Crea un nuovo post");
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

//# DESTROY

function destroy(req, res) {
  //* logica per recupero id
  const id = parseInt(req.params.id);
  const post = postsData.find((post) => post.id === id);

  //* avviso errore se il post non esiste
  if (!post) {
    return res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  //* rimuovo il post
  const postIndex = postsData.indexOf(post);
  postsData.splice(postIndex, 1);

  //* risposta con uno status (senza body) = "la cancellazione è andata a buon fine"
  res.sendStatus(204);
  console.log("Lista aggiornata dei post: ", postsData);

  // res.json("Elimina il post " + id);
}

module.exports = { index, show, store, update, modify, destroy };
