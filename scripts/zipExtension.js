var path = require('path')
var zipFolder = require('zip-folder')

zipFolder(path.join(__dirname, '../dist/'), path.join(__dirname, '../extension.zip'), (err) => {
  if (err) {
    console.log('oh no!', err)
  } else {
    console.log('EXCELLENT')
  }
})
