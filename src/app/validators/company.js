import { yup } from '../helpers';

export default (req, res, next) => {
  const schema = yup.object().shape({
    name: yup.string().required().min(1),
    zipcode: yup.string().required().min(1),
    number: yup.string().required().min(1),
    complement: yup.string().nullable(),
    phone: yup.string().required().min(1),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch(({ errors }) => res.badRequest({ message: errors.pop() }));
};
