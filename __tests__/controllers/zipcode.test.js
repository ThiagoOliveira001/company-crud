import faker from 'faker';
import ZipcodeService from '../../src/app/services/Zipcode';
import ZipcodeController from '../../src/app/controllers/Zipcode';

const sut = ZipcodeController;

describe('Test zipcode controller', () => {
  it('should return a location', async () => {
    jest.spyOn(ZipcodeService, 'find').mockResolvedValueOnce({});
    const zipcode = faker.address.zipCode();

    const req = {
      params: { zipcode },
    };
    const ok = jest.fn().mockImplementationOnce((data) => data);
    const res = { ok };
    const response = await sut.find(req, res);

    expect(ok).toHaveBeenCalled();
    expect(response).toEqual(expect.any(Object));
    expect(ZipcodeService.find).toHaveBeenCalledWith(zipcode);
  });

  it('should return a message', async () => {
    jest.spyOn(ZipcodeService, 'find').mockResolvedValueOnce(null);
    const zipcode = faker.address.zipCode();

    const req = {
      params: { zipcode },
    };
    const notFound = jest.fn().mockImplementationOnce((data) => data);
    const res = { notFound };
    const response = await sut.find(req, res);

    expect(notFound).toHaveBeenCalled();
    expect(response).toEqual(
      expect.objectContaining({
        message: expect.any(String),
      })
    );
    expect(ZipcodeService.find).toHaveBeenCalledWith(zipcode);
  });
});
