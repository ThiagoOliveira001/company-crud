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
}

export default new CompanyService();
