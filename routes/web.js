const express = require('express');
const router = express.Router();


// The main route
router.get('/', (request, response) => {
 response.render('home', {
   title: 'Home',
   description: 'My portfolio based on Node.js'
 })
});

router.get('/about', (request, response) => {
 response.render('about', {
   title: 'About',
   description: 'My portfolio based on Node.js'
 })
});

router.get('/projects', (request, response) => {
 response.render('projects', {
   title: 'Services',
   description: 'My portfolio based on Node.js'
 })
});


router.get('/contact', (request, response) => {
 response.render('contact', {
   title: 'Contact',
   description: 'My portfolio based on Node.js'
 })
});


module.exports = router;
