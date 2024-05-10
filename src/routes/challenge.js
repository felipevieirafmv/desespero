const express = require('express');
const router = express.Router();
const ChallengeController = require("../controller/challengeController");

router
    .get('/', ChallengeController.get)
    .post('/', ChallengeController.post)
    .post('/begin', ChallengeController.begin)
    .post('/end', ChallengeController.end)

module.exports = router;