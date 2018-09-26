var RpcClient = require('paccoind-rpc');

var client = new RpcClient({
  host: '127.0.0.1',
  port: 7111,
  user: 'user',
  pass: 'password',
  protocol: 'http'
});

client.getInfo(function(err, info) {
  if (err) {
    return console.error(err);
  }
   console.log(info.result);
  //console.log(JSON.stringify(info.result));
});
