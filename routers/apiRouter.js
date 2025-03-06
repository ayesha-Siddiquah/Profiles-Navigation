const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/profiles', (req, res) => {
    // Fetch profiles data from profiles.json
    const profilesData = require('../data/profiles.json');
    res.json(profilesData);
});

apiRouter.get('/profiles/:id', (req, res) => {
    // Fetch individual profile based on :id from profiles.json
    const profilesData = require('../data/profiles.json');
    const profile = profilesData.find(profile => profile.id === parseInt(req.params.id));

    if (!profile) {
        // If profile is not found, return an error message
        return res.status(404).json({ error: 'Profile not found' });
    }

    // If profile is found, return the profile
    res.json(profile);
});


module.exports = apiRouter;