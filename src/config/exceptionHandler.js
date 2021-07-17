export default async function exceptionHandler(err, req, res, next) {
  const standard_error_message =
    'Ocorreu um erro inesperado no servidor, tente novamente mais tarde';

  if (process.env.NODE_ENV != 'PRODUCTION') {
    return res.status(500).json({ message: standard_error_message, err });
  }

  return res.status(500).json({ message: standard_error_message });
}
