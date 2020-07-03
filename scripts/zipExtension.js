var { zip } = require('zip-a-folder');
var path = require('path');

class ZipAFolder {
  static async main() {
    await zip(path.join(__dirname, '../dist/'), path.join(__dirname, '../extension.zip'));
  }
}
 
ZipAFolder.main();