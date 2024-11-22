//# CONFIG EXPRESS:

//* INIT EXPRESS
const express = require("express");
const app = express();
const port = 3000;

//* JSON PARSER FOR BODY REQUEST
app.use(express.json());

//* SERVING PUBLIC FOLDER
app.use(express.static("public"));

//* IMPORT ROUTERS
const postsRouter = require("./routers/posts");

//* SETTING ROUTERS
app.use("/posts", postsRouter);

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
