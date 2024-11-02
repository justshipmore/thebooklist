import createServer from './createServer'
import logger from './utils/logger';

const runApp = async () => {
  const PORT = process.env.PORT || 9000;
  const app = await createServer();

  app.listen(PORT, () => logger.info(`Server is running on PORT: ${PORT}`));

  return app; 
}

(async () => await runApp())();