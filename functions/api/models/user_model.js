const database = require("../database");

class UserModel {
  constructor() {
    if (this.instance) return this.instance;
    UserModel.instance = this;
  }

  get() {
    return database.getList("user");
  }

  getById(id) {
    return database.get("user", id);
  }

  create(quote) {
    return database.create("user", quote);
  }

  delete(id) {
    return database.delete("user", id);
  }

  update(id, quote) {
    return database.set("user", id, quote);
  }
}

module.exports = new UserModel();