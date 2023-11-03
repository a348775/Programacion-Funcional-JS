const fs = require('fs');

class DAO {
  constructor(filePath) {
    this.products = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  getProducts() {
    return this.products;
  }
}

module.exports = DAO;

