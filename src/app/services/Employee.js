import { Op, Sequelize } from 'sequelize';
import Employee from '../models/Employee';
import Profession from '../models/Profession';

class EmployeeService {
  async list(filter) {
    const quantity = +filter.quantity || 5;
    const page = +filter.page || 1;
    const where = { company_id: filter.company_id };

    if (filter.name) {
      where.name = {
        [Op.iLike]: `%${filter.name}%`,
      };
    }

    const { rows, count } = await Employee.findAndCountAll({
      attributes: [
        'id',
        'name',
        [Sequelize.col('Profession.name'), 'profession_name'],
      ],
      raw: true,
      include: [
        {
          model: Profession,
          attributes: [],
        },
      ],
      where,
      limit: quantity,
      offset: (page - 1) * quantity,
    });

    return {
      employees: rows,
      pages: Math.ceil(count / quantity),
      total: count,
    };
  }

  async listById(id) {
    const employee = await Employee.findByPk(id, {
      raw: true,
      attributes: [
        'id',
        'name',
        'profession_id',
        'company_id',
        'salary',
        [Sequelize.col('Profession.name'), 'profession_name'],
      ],
      include: [
        {
          model: Profession,
          attributes: [],
        },
      ],
    });

    return employee;
  }
}

export default new EmployeeService();
