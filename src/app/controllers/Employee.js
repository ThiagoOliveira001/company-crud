import Employee from '../models/Employee';

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
}

export default new EmployeeController();
