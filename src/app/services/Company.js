import { Op } from 'sequelize';
import Company from '../models/Company';

class CompanyService {
  async create(company) {
    const exists = await Company.findOne({
      where: { name: { [Op.iLike]: company.name } },
    });

    if (exists) {
      return null;
    }
    const created = await Company.create(company);

    return created;
  }

  async list(filter) {
    const quantity = +filter.quantity || 5;
    const page = +filter.page || 1;
    const where = {};

    if (filter.name) {
      where.name = {
        [Op.iLike]: `%${filter.name}%`,
      };
    }

    const { rows, count } = await Company.findAndCountAll({
      attributes: ['id', 'name', 'city'],
      where,
      limit: quantity,
      offset: (page - 1) * quantity,
      order: [['name', 'ASC']],
    });

    return {
      companies: rows,
      pages: Math.ceil(count / quantity),
      total: count,
    };
  }

  async update(company) {
    const exists = await Company.findOne({
      where: {
        name: {
          [Op.iLike]: company.name,
        },
        id: {
          [Op.ne]: company.id,
        },
      },
    });

    if (exists) {
      return false;
    }
    await Company.update(company);

    return true;
  }
}

export default new CompanyService();
