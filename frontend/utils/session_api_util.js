var request = require('xhr-request');

export const signup = (user, success, error) => {
  request('api/users', {
    method: 'POST',
    body: { user },
    json: true
  }, (err, data) => {
    return err ? error(data) : success(data);
  });
};

export const login = (user, success, error) => {
  request('api/session', {
    method: 'POST',
    body: { user },
    json: true
  }, (err, data) => {
    return err ? error(data) : success(data);
  });
};

export const logout = (success, error) => {
  request('api/session', {
    method: 'DELETE',
    json: true
  }, (err, data) => {
    return err ? error(data) : success(data);
  });
};
