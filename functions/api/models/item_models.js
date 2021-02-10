const database = require("../database");

class ItemModel {
  constructor() {
    if (this.instance) return this.instance;
    ItemModel.instance = this;
  }

  get() {
    return database.getList("item");
  }

  getById(id) {
    return database.get("item", id);
  }

  create(quote) {
    return database.create("item", quote);
  }

  delete(id) {
    return database.delete("item", id);
  }

  update(id, quote) {
    return database.set("item", id, quote);
  }
}

module.exports = new ItemModel();