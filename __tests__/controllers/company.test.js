import faker from 'faker';
import CompanyService from '../../src/app/services/Company';
import CompanyController from '../../src/app/controllers/Company';

const sut = CompanyController;

describe('Test company controller', () => {
  it('should be able to create a company', async () => {
    jest.spyOn(CompanyService, 'create').mockResolvedValueOnce({});

    const req = {
      body: {
        name: faker.name.firstName(),
        address: faker.address.streetName(),
        zipcode: faker.address.zipCode(),
        neighborhood: faker.address.county(),
        number: faker.datatype.number(),
        complement: faker.datatype.string(),
        city: faker.address.cityName(),
        uf: faker.datatype.string(2),
        phone: faker.datatype.number({ min: 99999999999, max: 1111111111 }),
      },
    };
    const created = jest.fn().mockImplementationOnce((data) => data);
    const res = { created };
    const response = await sut.create(req, res);

    expect(CompanyService.create).toHaveBeenCalledWith(req.body);
    expect(created).toHaveBeenCalled();
    expect(response).toEqual(expect.any(Object));
  });

  it('should not be able to create a company', async () => {
    jest.spyOn(CompanyService, 'create').mockResolvedValueOnce(null);

    const req = {
      body: {
        name: faker.name.firstName(),
        address: faker.address.streetName(),
        zipcode: faker.address.zipCode(),
        neighborhood: faker.address.county(),
        number: faker.datatype.number(),
        complement: faker.datatype.string(),
        city: faker.address.cityName(),
        uf: faker.datatype.string(2),
        phone: faker.datatype.number({ min: 99999999999, max: 1111111111 }),
      },
    };
    const badRequest = jest.fn().mockImplementationOnce((data) => data);
    const res = { badRequest };
    const response = await sut.create(req, res);

    expect(CompanyService.create).toHaveBeenCalledWith(req.body);
    expect(badRequest).toHaveBeenCalled();
    expect(response).toEqual(
      expect.objectContaining({
        message: expect.any(String),
      })
    );
  });

  it('should be able to list companies', async () => {
    jest.spyOn(CompanyService, 'list').mockResolvedValueOnce([]);

    const req = {
      query: {
        page: faker.datatype.number(),
        quantity: faker.datatype.number(),
        name: faker.name.firstName(),
      },
    };
    const ok = jest.fn().mockImplementationOnce((data) => data);
    const res = { ok };
    const response = await sut.list(req, res);

    expect(ok).toHaveBeenCalled();
    expect(response).toEqual(expect.any(Array));
    expect(CompanyService.list).toHaveBeenCalledWith(req.query);
  });

  it('should be able to update a company', async () => {
    jest.spyOn(CompanyService, 'update').mockResolvedValueOnce(true);

    const req = {
      params: { id: faker.datatype.number() },
      body: {
        name: faker.name.firstName(),
        address: faker.address.streetName(),
        zipcode: faker.address.zipCode(),
        neighborhood: faker.address.county(),
        number: faker.datatype.number(),
        complement: faker.datatype.string(),
        city: faker.address.cityName(),
        uf: faker.datatype.string(2),
        phone: faker.datatype.number({ min: 99999999999, max: 1111111111 }),
      },
    };
    const ok = jest.fn().mockImplementationOnce((data) => data);
    const res = { ok };
    const response = await sut.update(req, res);

    expect(CompanyService.update).toHaveBeenCalledWith({
      ...req.body,
      ...req.params,
    });
    expect(ok).toHaveBeenCalled();
    expect(response).toEqual(
      expect.objectContaining({
        message: expect.any(String),
      })
    );
  });

  it('should not be able to update a company', async () => {
    jest.spyOn(CompanyService, 'update').mockResolvedValueOnce(false);

    const req = {
      params: { id: faker.datatype.number() },
      body: {
        name: faker.name.firstName(),
        address: faker.address.streetName(),
        zipcode: faker.address.zipCode(),
        neighborhood: faker.address.county(),
        number: faker.datatype.number(),
        complement: faker.datatype.string(),
        city: faker.address.cityName(),
        uf: faker.datatype.string(2),
        phone: faker.datatype.number({ min: 99999999999, max: 1111111111 }),
      },
    };
    const badRequest = jest.fn().mockImplementationOnce((data) => data);
    const res = { badRequest };
    const response = await sut.update(req, res);

    expect(CompanyService.update).toHaveBeenCalledWith({
      ...req.body,
      ...req.params,
    });
    expect(badRequest).toHaveBeenCalled();
    expect(response).toEqual(
      expect.objectContaining({
        message: expect.any(String),
      })
    );
  });
});
