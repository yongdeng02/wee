// 这是 路由文件。
var file = require('./file');
var path = require('path');
var url = require('url');
var qs = require('querystring');

module.exports = {
  login: function(req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    var data = file.readFile(path.resolve(__dirname, '../views/login.html'));
    res.write(data);
    res.end();
  },

  register: function(req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    var data = file.readFile(path.resolve(__dirname, '../views/register.html'));
    res.write(data);
    res.end();
  },

  home: function(req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    var data = file.readFile(path.resolve(__dirname, '../views/home.html'));
    res.write(data);
    res.end();
  },

  img: function(req, res) {
    res.writeHead(200, {
      'Content-Type': 'image/jpeg'
    });
    var data = file.readImg(path.resolve(__dirname, '../images/1.jpg'));
    // 写图片到页面中，
    res.write(data, 'binary');
    res.end();
  },

  /**
   * 在登录页面点击登录按钮之后，会发生请求到这个路径 http://localhost:3000/handleLogin
   * @param {*} req 
   * @param {*} res 
   */
  handlelogin: function(req, res) {
    // 1. 如何取到 用户名与密码  GET 方法
    // var params = url.parse(req.url, true).query;
    // console.log(params);
    // console.log(params.username);
    // console.log(params.password);

    // 2. POST 方式
    var rawData = '';
    req.on('data', function(chunk) {
      rawData += chunk;
    })

    req.on('end', function() {
      // console.log(rawData);
      var params = qs.parse(rawData);
      console.log(params.username);
      console.log(params.password);
    })
  }
}