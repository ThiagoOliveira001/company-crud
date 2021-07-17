import Profession from '../models/Profession';

class ProfessionController {
  async list(req, res) {
    const professions = await Profession.findAll();

    return res.ok({ content: professions });
  }
}

export default new ProfessionController();
