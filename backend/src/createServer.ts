import express from 'express'
import morgan from "morgan";
import logger, { MORGAN_FORMAT } from './utils/logger';

export default async (): Promise<express.Application> => {
    return new Promise<express.Application>(async (resolve, reject) => {
      try {
        logger.info('[START]: Starting server')

        // 1. Create an Express application
        const app = express()
  
        // 2. Setup Generic Middlewares
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(
          morgan(MORGAN_FORMAT, {
            stream: {
              write: (message) => {
                const logObject = {
                  method: message.split(" ")[0],
                  url: message.split(" ")[1],
                  status: message.split(" ")[2],
                  responseTime: message.split(" ")[3],
                };
                logger.info(JSON.stringify(logObject));
              },
            },
          })
        );

        // 4. Add Requests Handlers
        app.get('/', async (req: express.Request, res: express.Response): Promise<any> => {
          return res.send({message: 'Hello World!'})
        });
  
        resolve(app);
  
      } catch (error) {
        logger.error('[END]: Failed to start server')
        reject(error);
      }
    })
  };