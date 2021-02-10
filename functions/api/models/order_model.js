const database = require("../database");

class OrderModel {
  constructor() {
    if (this.instance) return this.instance;
    OrderModel.instance = this;
  }

  get() {
    return database.getList("orderlist");
  }

  getById(id) {
    return database.get("orderlist", id);
  }

  create(quote) {
    return database.create("orderlist", quote);
  }

  delete(id) {
    return database.delete("orderlist", id);
  }

  update(id, quote) {
    return database.set("orderlist", id, quote);
  }
}

module.exports = new OrderModel();