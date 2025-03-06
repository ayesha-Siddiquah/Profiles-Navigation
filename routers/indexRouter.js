const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  const pages = [
    { name: 'About', path: '/about' },
    { name: 'Profiles', path: '/profiles' },
    { name: 'Contact', path: '/contact' },
  ];
  res.render('index', { pages, title: 'Home Page', layout: 'layouts/full-width' });
});

indexRouter.get('/about', (req, res) => {
  const pages = [
    { name: 'About', path: '/about' },
    { name: 'Profiles', path: '/profiles' },
    { name: 'Contact', path: '/contact' },
  ];
  res.render('about', { pages, title: 'About Page', layout: 'layouts/full-width' });
});

indexRouter.get('/contact', (req, res) => {
  const pages = [
    { name: 'About', path: '/about' },
    { name: 'Profiles', path: '/profiles' },
    { name: 'Contact', path: '/contact' },
  ];
  res.render('contact', { pages, title: "Contact Us", layout: 'layouts/full-width' });
});

indexRouter.post('/contact', (req, res) => {
  console.log('Form data:', req.body);
  const pages = [
    { name: 'About', path: '/about' },
    { name: 'Profiles', path: '/profiles' },
    { name: 'Contact', path: '/contact' },
  ];
  res.render('contact', { pages, title: "Thank You", submittedName: req.body.name, 
            submittedEmail: req.body.email, submittedMessage: req.body.message, layout: 'layouts/full-width' });
});

module.exports = indexRouter;
