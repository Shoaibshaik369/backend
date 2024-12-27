const express = require('express');
const router = express.Router();
const smsSettingsController = require('../controllers/smsSettingsController');

// POST route to save SMS settings
router.post('/save', smsSettingsController.saveSmsSettings);

module.exports = router;
