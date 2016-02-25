require('babel-register')

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const config = require('./webpack.config');

const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;

const app = express();


// Webpack dev server
if (isDeveloping) {
  const WEBPACK_PORT = 3001;
  const compiler = webpack(config);
  app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.listen(WEBPACK_PORT, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('WebpackDevServer listening at localhost:'+WEBPACK_PORT);
  });
}

//  RESTful API
const publicPath = path.resolve(__dirname);
app.use(bodyParser.json({ type: 'application/json' }))
app.use(express.static(publicPath));

const port = isProduction ? (process.env.PORT || 80) : 3000;

// this is necessary to handle URL correctly since client uses Browser History
app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, '', 'index.html'))
})

app.put('/api/login', function(req, res) {
      const credentials = req.body;
      if(credentials.user==='admin' && credentials.password==='123456'){
        res.json({'user': credentials.user, 'role': 'ADMIN', 'uid': 1});
      }else{
        res.status('500').send({'message' : 'Invalid user/password'});
      }
});

app.post('/api/my', function(req, res) {
    res.json({'user': 'admin', 'role': 'ADMIN', 'uid': 1});
});

app.post('/api/logout', function(req, res) {
    res.json({'user': 'admin', 'role': 'ADMIN'});
});

// We need to use basic HTTP service to proxy
// websocket requests from webpack
const server = http.createServer(app);

server.listen(port, function (err, result) {
  if(err){
    console.log(err);
  }
  console.log('Server running on port ' + port);
});
