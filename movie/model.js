'use strict';
let data = [
    { id: 1, title: "The Father", year: "2020"},
    { id: 2, title: "Die Entdeckung der Unendlichkeit", year: "2014"},
    { id: 3, title: "The Power of the Dog", year: "2021"},
];
function getNextId(movie) {
    return Math.max(...data.map((movie) => movie.id)) + 1;
}
function insert(movie) {
    movie.id = getNextId();
    data.push(movie);
}
function update(movie) {
    movie.id = parseInt(movie.id);
    const index = data.findIndex((item) => item.id === movie.id);
    data[index] = movie;
}

export function getAll() {
   return Promise.resolve(data);
}

export function remove(id) {
    data = data.filter(movie => movie.id !== id);
    return Promise.resolve();
}

export function get(id) {
    return Promise.resolve(data.find((movie) => movie.id === id));
}

export async function save(movie) {
    if (movie.id === '') {
        insert(movie);
    } else {
        update(movie);
    }
    return Promise.resolve();
}