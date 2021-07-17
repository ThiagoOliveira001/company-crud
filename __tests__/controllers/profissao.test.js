import Profession from '../../src/app/models/Profession';
import ProfessionController from '../../src/app/controllers/Profession';

const sut = ProfessionController;

describe('Test profession controller', () => {
  it('should return a list of professions', async () => {
    jest.spyOn(Profession, 'findAll').mockResolvedValueOnce([]);

    const res_ok = jest.fn().mockImplementationOnce((data) => data);
    const res = {
      ok: res_ok,
    };
    const result = await sut.list({}, res);

    expect(res_ok).toHaveBeenCalledWith(expect.any(Object));
    expect(Profession.findAll).toHaveBeenCalled();
    expect(result).toHaveProperty('content', expect.any(Array));
  });
});
