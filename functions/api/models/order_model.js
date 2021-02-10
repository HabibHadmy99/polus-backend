const database = require("../database");

class OrderModel {
  constructor() {
    if (this.instance) return this.instance;
    OrderModel.instance = this;
  }

  get() {
    return database.getList("order");
  }

  getById(id) {
    return database.get("order", id);
  }

  create(quote) {
    return database.create("order", quote);
  }

  delete(id) {
    return database.delete("order", id);
  }

  update(id, quote) {
    return database.set("order", id, quote);
  }
}

module.exports = new OrderModel();