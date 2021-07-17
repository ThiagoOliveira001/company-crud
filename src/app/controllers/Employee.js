import Employee from '../models/Employee';
import EmployeeService from '../services/Employee';

class EmployeeController {
  async create(req, res) {
    const employee = {
      name: req.body.name,
      profession_id: req.body.profession_id,
      company_id: req.body.company_id,
      salary: req.body.salary,
    };
    const created = await Employee.create(employee);

    return res.created(created);
  }

  async update(req, res) {
    const employee = {
      name: req.body.name,
      profession_id: req.body.profession_id,
      company_id: req.body.company_id,
      salary: req.body.salary,
    };
    await Employee.update(employee, { where: { id: req.params.id } });

    return res.ok({ message: 'Atualizado com sucesso' });
  }

  async listByCompany(req, res) {
    const filter = {
      quantity: req.query.quantity,
      page: req.query.page,
      name: req.query.name,
      company_id: req.query.company_id,
    };
    const employees = await EmployeeService.list(filter);

    return res.ok(employees);
  }

  async listById(req, res) {
    const employee = await EmployeeService.listById(req.params.id);

    return res.ok(employee);
  }

  async remove(req, res) {
    const { id } = req.params;
    await Employee.destroy({ where: { id } });

    return res.ok({ message: 'Excluido com sucesso' });
  }

  async removeByCompany(req, res) {
    const { company_id } = req.params;
    await Employee.destroy({ where: { company_id } });

    return res.ok({ message: 'Excluido com sucesso' });
  }
}

export default new EmployeeController();
