
"use strict";

const express = require("express");
const profilesRouter = express.Router();

const fs = require('fs');

// to give the path to html files set the path....
const path = require("path");

// Read profiles.json
const profilesPath = path.join(__dirname, '../data/profiles.json');
let profilesData = [];
fs.readFile(profilesPath, 'utf8', (err, data) =>{
    if (err) {
        console.error('Error reading or parsing the profiles file:', err);
        return;
  } try {
    profilesData = JSON.parse(data);
  } catch (err) {
    console.error("Error while parsing JSON data:", err)
  }
})

// Profiles List Page
profilesRouter.get('/', (req, res) => {
    const pages = [
        { name: 'About', path: '/about' },
        { name: 'Profiles', path: '/profiles' },
        { name: 'Contact', path: '/contact' },
      ];
    res.render('profiles', { pages, title: "Our Team", profiles: profilesData });
  });


// Individual Profile Page
profilesRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const profile = profilesData.find(p => p.id === parseInt(id));
    const pages = [
        { name: 'About', path: '/about' },
        { name: 'Profiles', path: '/profiles' },
        { name: 'Contact', path: '/contact' },
      ];
    // Filter other profiles excluding the current one
    const otherProfiles = profilesData.filter(p => p.id !== parseInt(id));
  
    res.render('profile', { pages, title: "Team Member", layout: 'layouts/sidebar', profile, otherProfiles});
  });

module.exports = profilesRouter; 