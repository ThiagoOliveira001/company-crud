import axios from 'axios';

class ZipcodeService {
  async find(zipcode) {
    try {
      const url = `${process.env.CEP_API}/${zipcode}/json`;
      const response = await axios.get(url);
      const location = {
        address: response.data.logradouro,
        neighborhood: response.data.bairro,
        city: response.data.localidade,
        uf: response.data.uf,
      };

      return location;
    } catch (ex) {
      return null;
    }
  }
}

export default new ZipcodeService();
