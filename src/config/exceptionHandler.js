import { stLogger } from 'sematext-agent-express';

export default async function exceptionHandler(err, req, res, next) {
  const standard_error_message =
    'Ocorreu um erro inesperado no servidor, tente novamente mais tarde';

  // Geração de logs na cloud
  try {
    stLogger.error(err.stack);
  } catch (ex) {
    console.log(ex.stack);
  }

  if (process.env.NODE_ENV != 'PRODUCTION') {
    return res
      .status(500)
      .json({ message: standard_error_message, err: err.stack });
  }

  return res.status(500).json({ message: standard_error_message });
}
