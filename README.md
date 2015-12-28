ucat
====

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io) [[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs) ![Build Status](https://travis-ci.org/ipfs/js-ucat.svg?style=flat-square)](https://travis-ci.org/ipfs/js-ucat) ![](https://img.shields.io/badge/coverage-%3F-yellow.svg?style=flat-square) [![Dependency Status](https://david-dm.org/ipfs/js-ucat.svg?style=flat-square)](https://david-dm.org/ipfs/js-ucat) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> ucat (uTP cat) implementation is JavaScript to be used with Node.js

# Install

```bash
npm i ucat -g
```

# Usage

```bash
Usage:
    ucat [options] <destination-IP> <destination-port>
    ucat [options] -l -p <listening-port>

Options:
    -h          Help
    -d          Debug mode; use multiple times to increase verbosity.
    -l          Listen mode
    -p <port>   Local port
    -s <IP>     Source IP
    -B <size>   Buffer size
    -n          Don't resolve hostnames
```

# Other implmentations

- C - https://github.com/bittorrent/libutp/blob/master/ucat.c
