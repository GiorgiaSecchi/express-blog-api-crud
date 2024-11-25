//# CONFIG EXPRESS:

//* INIT EXPRESS
const express = require("express");
const app = express();
const port = 3000;

//* REGISTERING MIDDLEWARES

// LOG TIME MIDDLEWARE
const checkTime = require("./middlewares/checkTime");
const errorsHandler = require("./middlewares/errorsHandler");

// registrato per tutte le rotte dell'app (globale)
app.use(checkTime);

// BODY-PARSER FOR BODY REQUEST (JSON)
app.use(express.json());

// SERVING PUBLIC FOLDER (assets statici)
app.use(express.static("public"));

//* REGISTERING ROUTERS
// import routers
const postsRouter = require("./routers/posts");

// setting routers
app.use("/posts", postsRouter);

//* ERROR HANDLERS (gli errori si gestiscono alla fine)
app.use(errorsHandler);

//* START LISTENING
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/************************************************************************ */

app.get("/", (req, res) => {
  const text = "Server del mio blog";
  res.send(text);
  // res.type("json").send(text) --> res.json(text)
});

// app.get("/bacheca", (req, res) => {
//   const tag = req.query.tag;
//   if (tag) {
//     const filteredPosts = posts.filter((post) => {
//       return post.tags.includes(tag.toLowerCase());
//     });
//     res.json(filteredPosts);
//     console.log(filteredPosts);
//   } else {
//     res.json({
//       count: posts.length,
//       posts: posts,
//     });
//   }
// });
