import winston from 'winston';

export const MORGAN_FORMAT = ':method :url :status :response-time ms';

const LOG_LEVEL = process.env.NODE_ENV === 'production' ? 'info' : 'debug';

const colorizer = winston.format.colorize();
const logger = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.combine(
    winston.format.timestamp({ format: 'DD-MMM-YYYY HH:mm:ss' }),
    winston.format.align(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console({
      // Custom format for console logging with colors
      format: winston.format.printf((msg) =>
        colorizer.colorize(msg.level, `[${msg.timestamp}] ${msg.level}: ${msg.message}`)
      )
    }),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error'
    }),
    new winston.transports.File({ filename: 'logs/app.log' })
  ]
});

export default logger;
