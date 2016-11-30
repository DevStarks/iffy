import createLogger from 'redux-logger';
import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';

const LoggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  LoggerMiddleware
);

export default RootMiddleware;
