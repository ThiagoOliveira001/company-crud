import ZipcodeService from '../services/Zipcode';

class ZipcodeController {
  async find(req, res) {
    const { zipcode } = req.params;
    const location = await ZipcodeService.find(zipcode);

    if (!location) {
      return res.notFound({ message: 'CEP não encontrado' });
    }

    return res.ok(location);
  }
}

export default new ZipcodeController();
