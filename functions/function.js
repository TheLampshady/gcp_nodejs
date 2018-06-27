'use strict';

// [START functions_data]
exports.getData = (req, res) => {
  res.json({key: 'value'});
};
// [END functions_data]


// [START functions_helloworld_template]
const path = require('path');
const pug = require('pug');

// Renders the index.pug
exports.index = (req, res) => {
  // Render the index.pug file
  const html = pug.renderFile(path.join(__dirname, 'views', 'index.pug'));

  res.send(html).end();
};
// [END functions_helloworld_template]
