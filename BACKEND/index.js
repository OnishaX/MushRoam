const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const DBLINK = "mongodb+srv://james:hello@cluster0.4dqqd.mongodb.net/Blog?retryWrites=true&w=majority";

mongoose.connect("mongodb+srv://simonfolkerts:watermelon@testdb.flgps.gcp.mongodb.net/Blog?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
},
    () => {
        console.log("connected to database...");
        app.listen(3000, () => {
            console.log("listening on 3000");
        });
    }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const Post = require("./models/Post");

app.get('/postCreate', async (req, res) => {
    const posts = await Post.find();
    res.status(200).json(posts);
});

app.post('/posts', async (req, res) => {
    console.log(req.body);
    
    const post = new Post({
        species: req.body.species,
        location: req.body.location,
        description: req.body.description,
    });
    const savedPost = await post.save();
    res.status(200).send(savedPost);
});



