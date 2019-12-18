import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        birth: Sequelize.DATE,
        height: Sequelize.DECIMAL,
        weight: Sequelize.DECIMAL,
      },
      { sequelize }
    );

    return this;
  }
}

export default Student;
