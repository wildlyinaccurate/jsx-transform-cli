const jsx = require('jsx-transform')
const argv = require('minimist')(process.argv.slice(2))
const factory = argv.f || argv.factory || 'h'

var chunks = []

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    chunks.push(process.stdin.read())
})

process.stdin.on('end', () => {
    process.stdout.write(jsx.fromString(chunks.join(''), { factory }))
})
