'use strict';
import express from "express";
import { router as movieRouter } from "./movie/index.js";

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use('/movie', movieRouter);


app.get('/', (req, res) => {
    res.redirect('/movie');
});

app.listen(8080, () => {
    console.log('Server is running at http://localhost:8080');
});