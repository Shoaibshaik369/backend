const db = require('../config/db');

// Function to save SMS settings to the database
const saveSmsSettings = (gateway_name, username, password, api_key, status, callback) => {
  const query = `
    INSERT INTO sms_settings (gateway_name, username, password, api_key, status)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [gateway_name, username, password, api_key, status], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = {
  saveSmsSettings
};
