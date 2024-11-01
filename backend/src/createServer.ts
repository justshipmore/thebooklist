import express from 'express'

export default async (): Promise<express.Application> => {
    return new Promise<express.Application>(async (resolve, reject) => {
      try {
        console.log('[START]: Starting server')

        // 1. Create an Express application
        const app = express()
  
        // 2. Setup Generic Middlewares
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));

        // 4. Add Requests Handlers
        app.get('/', async (req: express.Request, res: express.Response): Promise<any> => {
          return res.send({message: 'Hello World!'})
        });
  
        resolve(app);
  
      } catch (error) {
        console.log('[END]: Failed to start server')
        reject(error);
      }
    })
  };