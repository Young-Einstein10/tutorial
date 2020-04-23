const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const userRoutes = require("./routes/user");
const commentRoutes = require("./routes/comment");
const articleRoutes = require("./routes/article");
const gifRoutes = require("./routes/gifs");
const feedRoutes = require("./routes/feed");

app.use(cors());

// Parse incoming requests data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
  })
);


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

// Account Signup, Login, Getting and Modifying users
app.use("/api/v1/auth/", userRoutes);

//  Articles
app.use("/api/v1/articles", articleRoutes);

// GIFs
app.use("/api/v1/gifs", gifRoutes);

// Comments
app.use("/posts", commentRoutes);

// Central Middleware for Article and GIFs
app.use("/api/v1/feed", feedRoutes);


module.exports = app;