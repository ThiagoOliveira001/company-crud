export default (req, res, next) => {
  const response = (status, body) => res.status(status).json(body);

  res.ok = (body) => response(200, body);
  res.created = (body) => response(201, body);
  res.badRequest = (body) => response(400, body);
  res.unauthorized = (body) => response(401, body);
  res.notFound = (body) => response(404, body);
  res.internalError = (body) => response(500, body);

  return next();
};
