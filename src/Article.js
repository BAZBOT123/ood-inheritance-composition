const LibraryItem = require('./LibraryItem')
const Author = require('./Author')

class Article extends LibraryItem {
  constructor(title) {
    super(title)
    this.author = new Author()
  }  
}

module.exports = Article
