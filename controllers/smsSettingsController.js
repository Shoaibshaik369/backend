const smsSettingsModel = require('../models/smsSettingsModel');

// Controller function to save SMS settings
const saveSmsSettings = (req, res) => {
  const { gateway_name, username, password, api_key, status } = req.body;

  if (!gateway_name || !username || !password || !api_key || !status) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  // Call the model function to save the settings
  smsSettingsModel.saveSmsSettings(gateway_name, username, password, api_key, status, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to save settings!', error: err });
    }
    res.status(200).json({ message: 'Settings saved successfully!', result });
  });
};

module.exports = {
  saveSmsSettings
};
