'use strict';
import { getAll , remove, get, save } from "./model.js";
//import { render } from "./view.js";
import { render as form } from "./form.js";

export async function listAction(req, res) {
    let movies = await getAll();
    res.render('index', {title: 'Filmdatenbank', movies: movies });
}

export async function removeAction(req, res) {
    const id = parseInt(req.params.id);
    await remove(id);
    res.redirect(req.baseUrl);
}

export async function formAction(req, res) {
    let movie = { id: "", title: "", year: ""};

    if(req.params.id) {
        movie = await get(parseInt(req.params.id));
        console.log(movie);
    }

    const body = form(movie);
    res.send(body);
   
}

export async function saveAction(req, res) {
    const movie = {
        id: req.body.id,
        title: req.body.title,
        year: req.body.year
    };
    await save(movie);
    res.redirect(req.baseUrl);
}