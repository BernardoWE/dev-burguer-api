import { Sequelize } from 'sequelize';
import User from '../app/models/user.js';
import databaseConfig from '../config/database.cjs';
import Product from '../app/models/product.js';
import Category from '../app/models/category.js';

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
