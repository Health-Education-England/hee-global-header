const connect = require('gulp-connect');
const cors = require('cors');
const fs = require('fs');

function serve() {
  connect.server({
    host: 'localhost',
    livereload: true,
    port: 8080,
    root: 'public',
  });
}

exports.connect = connect
exports.serve = serve
