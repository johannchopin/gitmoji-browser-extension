import path from 'path'
import zipFolder from 'zip-folder'

zipFolder(path.resolve('../dist/'), path.resolve('../extension.zip'), (err) => {
  if (err) {
    console.log('oh no!', err)
  } else {
    console.log('EXCELLENT')
  }
})
