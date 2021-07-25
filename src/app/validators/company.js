import { yup } from '../helpers';

export default (req, res, next) => {
  const schema = yup.object().shape({
    name: yup.string().required().min(1).max(200),
    address: yup.string().required().min(1).max(150),
    zipcode: yup.string().required().min(1).max(10),
    neighborhood: yup.string().required().min(1).max(100),
    number: yup.string().required().min(1).max(20),
    complement: yup.string().nullable().max(50),
    city: yup.string().required().min(1).max(50),
    uf: yup.string().required().length(2),
    phone: yup.string().required().min(1),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch(({ errors }) => res.badRequest({ message: errors.pop() }));
};
