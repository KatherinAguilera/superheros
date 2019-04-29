const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  heros: {
    list() {
      return callApi('/heros');
    },
    create(hero) {
      return callApi(`/heros`, {
        method: 'POST',
        body: JSON.stringify(hero),
      });
    },
    read(heroId) {
      return callApi(`/heros/${heroId}`);
    },
    update(heroId, updates) {
      return callApi(`/heros/${heroId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(heroId) {
      return callApi(`/heros/${heroId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;