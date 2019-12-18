import Sequelize from 'sequelize';

import Student from '../app/models/student';
import User from '../app/models/user';

import databaseconfig from '../config/database';

const models = [Student, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseconfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
