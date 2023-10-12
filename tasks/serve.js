const connect = require('gulp-connect');
const cors = require('cors');
const fs = require('fs');

function serve() {
  connect.server({
    host: 'localhost',
    livereload: true,
    port: 8080,
    root: 'public',
    middleware: function(connect, opt) {
      return [
        cors()
      ]
    }
  });
}

exports.connect = connect
exports.serve = serve
