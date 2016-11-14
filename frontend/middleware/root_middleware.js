import createLogger from 'redux-logger';
import { applyMiddleware } from 'redux';

const LoggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
  LoggerMiddleware
);

export default RootMiddleware;
