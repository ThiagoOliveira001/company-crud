import swaggerJsDocs from 'swagger-jsdoc';

const host = `${process.env.BASE_HOST}${process.env.BASE_PATH}`;

const swaggerDefinition = {
  info: {
    title: 'API Company CRUD',
    version: '1.0.0',
    description:
      'API criada para realização de um CRUD de empresa e funcionário',
  },
  servers: [
    {
      url: host,
      description: 'API',
    },
  ],
  components: {
    securitySchemes: {
      Auth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    schemas: {
      Http400: {
        description: 'Parametros inválidos, verifique os dados enviados',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
      Http401: {
        description: 'Acesso não autorizado, verifique suas credenciais',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  },
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      scheme: 'bearer',
      description: 'Bearer token_jwt',
    },
  },
};

const options = {
  apis: ['./src/app/routes/*.js'],
  swaggerDefinition,
};
const specs = swaggerJsDocs(options);

export default specs;
