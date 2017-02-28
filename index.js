var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

// static
app.use(express.static(publicPath));

//  RESTful API
app.use(bodyParser.json({ type: 'application/json' }))

var port = process.env.PORT || 80;

app.put('/api/login', function(req, res) {
  var credentials = req.body;
  if(credentials.user==='admin' && credentials.password==='123456'){
    res.cookie('uid', '1', {domain:'127.0.0.1'});
    res.json({'user': credentials.user, 'role': 'ADMIN', 'uid': 1});
  }else{
    res.status('500').send({'message' : 'Invalid user/password'});
  }
});

app.post('/api/menu', function(req, res) {
  res.json({
    menus: [
      {
        key: 1,
        name: 'Dashboard',
        icon: 'user',
        child: [
          {
            name: '选项1',
            key: 101,
            url: '/home'
          },
          {
            name: '选项2',
            key: 102,
            url: '/page2'
          },
          {
            name: '选项3',
            key: 103
          },
          {
            name: '选项4',
            key: 104
          }
        ]
      },
      {
        key: 2,
        name: '导航二',
        icon: 'laptop',
        child: [
          {
            name: '选项5',
            key: 201
          },
          {
            name: '选项2',
            key: 202
          },
          {
            name: '选项3',
            key: 203
          },
          {
            name: '选项4',
            key: 204
          }
        ]
      },
      {
        key: 3,
        name: '导航三',
        icon: 'notification',
        child: [
          {
            name: '选项1',
            key: 301
          },
          {
            name: '选项2',
            key: 302
          },
          {
            name: '选项3',
            key: 303
          },
          {
            name: '选项4',
            key: 304
          }
        ]
      }
    ]
  });
});

app.post('/api/my', function(req, res) {
  res.json({'user': 'admin', 'role': 'ADMIN', 'uid': 1});
});

app.post('/api/logout', function(req, res) {
  res.clearCookie('uid');
  res.json({'user': 'admin', 'role': 'ADMIN'});
});

app.listen(port, function (err, result) {
  if(err){
    console.log(err);
  }
  console.log('Server running on http://localhost:' + port);
});
