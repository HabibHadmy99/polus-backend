const database = require("../database");

class ItemModel {
  constructor() {
    if (this.instance) return this.instance;
    ItemModel.instance = this;
  }

  get() {
    return database.getList("itemlist");
  }

  getById(id) {
    return database.get("itemlist", id);
  }

  create(quote) {
    return database.create("itemlist", quote);
  }

  delete(id) {
    return database.delete("itemlist", id);
  }

  update(id, quote) {
    return database.set("itemlist", id, quote);
  }
}

module.exports = new ItemModel();