#!/usr/bin/env node
const axios = require("axios");

var filename = process.argv;
filename.splice(0,2);
console.log(filename.join(' '))
filename = encodeURIComponent(filename.join(' '))
console.log(filename)




axios.get(`https://carrybot.rkrao.repl.co/api/moc/songname?name="${filename}"`)