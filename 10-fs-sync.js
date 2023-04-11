const fs = require('fs')

// const first = fs.readFileSync('./content/subfolder/test.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8') 
const hey = fs.readFileSync('./hey.txt', 'utf8') 

console.log(hey)

fs.writeFileSync('./result-sync.txt', `Here is the result: ${hey}`)