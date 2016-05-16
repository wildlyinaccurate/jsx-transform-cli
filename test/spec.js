const assert = require('assert')
const exec = require('child_process').exec
const fs = require('fs')

exec('cat test/fixture.jsx | node src/index.js', (err, stdout, stderr) => {
  fs.readFile('test/fixture.js', (err, expected) => {
    assert.equal(stdout, expected)
  })
})

exec(`echo '<div>Hello, world!</div>' | node src/index.js --factory React.createElement`, (err, stdout, stderr) => {
  assert.equal(stdout, `React.createElement('div', null, ["Hello, world!"])\n`)
})
