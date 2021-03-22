
const express = require("express");
const next = require("next");

const app = next({ dev });

app.prepare()
 .then(() => {
 const server = express(); 
 
 server.get('/search/search', (req, res) => {
 const actualPage = '/search';
 const queryParams = { search: req.params.search };
 app.render(req, res, actualPage, queryParams);
 })
 })
 .catch((err) => {
 console.log(err);
 });