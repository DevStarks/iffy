import request from 'xhr-request';
import { getCSRFToken } from '../helpers/api_helpers';

export const signup = (user, success, error) => {
  request('api/users', {
    method: 'POST',
    body: { user },
    json: true,
    headers: { 'X-CSRF-Token': getCSRFToken() }
  }, (err, data) => {
    return err ? error(data) : success(data);
  });
};

export const login = (user, success, error) => {
  request('api/session', {
    method: 'POST',
    body: { user },
    json: true,
    headers: { 'X-CSRF-Token': getCSRFToken() }
  }, (err, data) => {
    return err ? error(data) : success(data);
  });
};

export const logout = (success, error) => {
  request('api/session', {
    method: 'DELETE',
    json: true,
    headers: { 'X-CSRF-Token': getCSRFToken() }
  }, (err, data) => {
    return err ? error(data) : success(data);
  });
};
