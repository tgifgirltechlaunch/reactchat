import { server } from '../api';

export const onFetchMessages = () => {
  return fetch(server + '/messages', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .catch(err => {
    alert(err.message);
  })
}