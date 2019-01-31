import schema from './schema';

export default (app) => {
  schema.applyMiddleware({
    app,
    path: '/'
  });
};
