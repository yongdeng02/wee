var http = require('http');
var routes = require('./modules/routes');
var url = require('url');

var server = http.createServer(function(req, res) {

  // 阻止  favicon.ico 的请求，不响应它。
  // console.log(req.url);  // 得到请求地址的 pathName
  if (req.url === '/favicon.ico') {
    res.end();
    return;
  }

  // url地址有可能会有  ?  # 
  // var pathName = req.url.substr(1);
  // console.log(pathName);

  var pathName = url.parse(req.url).pathname.substr(1);
  console.log(pathName);

  try {
    routes[pathName](req, res);
  } catch (error) {
    console.log(error);
    // 如果访问 路由中 没有定义的 url地址。那么就给他访问首页
    routes['home'](req, res);
  }
  


  // if (req.url === '/login') {
  //   res.writeHead(200, {
  //     'Content-Type': 'text/html; charset=utf-8'
  //   });
  //   res.write('这是登陆页面');
  //   res.end();
  //   return;
  // }

  // if (req.url === '/register') {
  //   res.writeHead(200, {
  //     'Content-Type': 'text/html; charset=utf-8'
  //   });
  //   res.write('这是注册页面');
  //   res.end();
  //   return;
  // }

  // res.writeHead(200, {
  //   'Content-Type': 'text/html; charset=utf-8'
  // });
  // res.write('项目首页');
  // res.end();
});

server.listen(3000);