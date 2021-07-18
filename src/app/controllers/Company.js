import CompanyService from '../services/Company';

class CompanyController {
  async create(req, res) {
    const company = {
      name: req.body.name,
      address: req.body.address,
      zipcode: req.body.zipcode,
      neighborhood: req.body.neighborhood,
      number: req.body.number,
      complement: req.body.complement,
      city: req.body.city,
      uf: req.body.uf,
      phone: req.body.phone,
    };
    const created = await CompanyService.create(company);

    if (!created) {
      return res.badRequest({ message: 'Já existe uma empresa com esse nome' });
    }

    return res.created(created);
  }

  async list(req, res) {
    const filter = {
      quantity: req.query.quantity,
      page: req.query.page,
      name: req.query.name,
    };
    const companies = await CompanyService.list(filter);

    return res.ok(companies);
  }

  async update(req, res) {
    const company = {
      id: req.params.id,
      name: req.body.name,
      address: req.body.address,
      zipcode: req.body.zipcode,
      neighborhood: req.body.neighborhood,
      number: req.body.number,
      complement: req.body.complement,
      city: req.body.city,
      uf: req.body.uf,
      phone: req.body.phone,
    };
    const updated = await CompanyService.update(company);

    if (updated) {
      return res.badRequest({ message: 'Já existe uma empresa com esse nome' });
    }

    return res.ok({ message: 'Atualizado com sucesso' });
  }

  async listById(req, res) {
    const company = await CompanyService.listById(req.params.id);

    return res.ok(company);
  }
}

export default new CompanyController();
