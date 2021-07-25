import { yup } from '../helpers';

export default (req, res, next) => {
  const schema = yup.object().shape({
    name: yup.string().required().min(1).max(200),
    profession_id: yup.number().required().min(1),
    company_id: yup.number().required().min(1),
    salary: yup.number().required().min(1),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch(({ errors }) => res.badRequest({ messqge: errors.pop() }));
};
