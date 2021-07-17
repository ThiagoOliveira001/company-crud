/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup';

yup.setLocale({
  mixed: {
    required: '${path} é um campo obrigatório',
    notType: '${path} deve ser do tipo ${type}',
  },
  number: {
    min: '${path} precisa ser igual ou maior que ${min}',
  },
  string: {
    min: '${path} precisa ser igual ou maior que ${min}',
    length: '${path} deve possuir 8 carácteres numéricos',
  },
});

export default yup;
