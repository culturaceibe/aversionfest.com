var express = require('express')
  , app = express()
;

app.use( express.static( __dirname + '/media' ) );

app.listen(8080, console.log.bind(null, 'server listening @ http://localhost:8080') );
