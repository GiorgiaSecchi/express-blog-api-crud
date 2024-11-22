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
  // const newPostData = req.body;
  // console.log(newPostData);

  //* controllo SE errore uno dei nuovi parametri inseriti
  if (
    !req.body.titolo ||
    !req.body.contenuto ||
    !req.body.immagine ||
    !Array.isArray(req.body.tags) // = se "tags" non è un array
  ) {
    return res.status(404).json({
      error: "Invalid params",
      message: "I parametri inseriti sono incompleti o non sono validi",
    });
  }

  //* .at(-1) = inzia a contare partendo dall'ultimo elemento, come scrivere [postsData.lenght -1]
  //* .id = accedo all'id dell'ultima pizza
  //* +1 = nuovo id incrementato
  const newId = postsData.at(-1).id + 1;
  console.log("Il nuovo post ha ID: " + newId);

  //* creo nuovo oggetto post
  const newPostData = {
    id: newId,
    titolo: req.body.titolo,
    contenuto: req.body.contenuto,
    immagine: req.body.immagine,
    tags: req.body.tags,
  };

  //* aggiungo nuovo post all'array posts
  postsData.push(newPostData);
  console.log(postsData);

  res.status(201);
  res.json(newPostData);

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
  console.log("Eliminato il post con ID: " + id);
  console.log("Lista aggiornata dei post: ", postsData);

  // res.json("Elimina il post " + id);
}

module.exports = { index, show, store, update, modify, destroy };
