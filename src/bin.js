if (!process.argv[2]) {
  help()
  process.exit(0)
}

var minimist = require('minimist')
var utp = require('utp-native')
var options = minimist(process.argv.slice(2))

if (options.h) {
  help()
  process.exit(0)
}

if (options.l) {
  listen(options)
} else {
  dial(options)
}

function dial (options) {
  var conn = utp.connect(Number(options._[1] || options.p), options._[0])
  process.stdin
         .pipe(conn)
         .pipe(process.stdout)
}

function listen (options) {
  var server = utp.createServer(function (socket) {
    process.stdin.pipe(socket).pipe(process.stdout)
  })

  server.listen(Number(options.p))
}

function help () {
  console.log(
      '\n' +
      'Usage: \n' +
      '    ucat [options] <destination-IP> <destination-port> \n' +
      '    ucat [options] -l -p <listening-port> \n' +
      '\n' +
      'Options: \n' +
      '    -h          Help \n' +
      '    -d          Debug mode; use multiple times to increase verbosity. \n' +
      '    -l          Listen mode \n' +
      '    -p <port>   Local port \n' +
      '    -s <IP>     Source IP \n' +
      '    -B <size>   Buffer size \n' +
      '    -n          Don\'t resolve hostnames \n' +
      '\n')
}
