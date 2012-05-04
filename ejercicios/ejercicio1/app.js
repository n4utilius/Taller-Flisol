var fs = require('fs')
var sys = require('sys')

fs.readFile('source.json', 'utf8', function(err, data) {
	console.log('fichero leído')
	
	fs.writeFile('output.json', data, 'utf8', function(err) {
		console.log('fichero escrito')
	})
})

console.log('hello world')