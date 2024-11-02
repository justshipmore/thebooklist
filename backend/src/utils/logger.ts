import { createLogger, format, transports } from 'winston';
const { combine, timestamp, json, colorize } = format;

export const MORGAN_FORMAT = ':method :url :status :response-time ms';

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize({ all: true }),
  format.printf((info) => `[${info.timestamp}]: ${info.message}`)
);

// Create a Winston logger
const logger = createLogger({
  level: 'info',
  format: combine(
    colorize(),
    timestamp({ format: 'DD-MMM-YYYY HH:mm:ss' }),
    json()
  ),
  transports: [
    new transports.Console({
      format: consoleLogFormat
    }),
    new transports.File({ filename: 'logs/app.log' })
  ]
});

export default logger;
