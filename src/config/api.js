import {REQUEST_TOKEN, APP_API_URL} from './constants'

function getURL(path) {
  return `${
    APP_API_URL || "http://localhost:4000"
  }${path}`;
}

async function fetchAPI(path, options = {}) {
    const defaultOptions = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${REQUEST_TOKEN}`,
        },
      };
      const mergedOptions = {
        ...defaultOptions,
        ...options,
      };
      const requestUrl = getURL(path);
      const response = await fetch(requestUrl, mergedOptions);

      const data = await response.json();
      return data;
}

async function multifetchAPI(path, options = {}) {
    const defaultOptions = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${REQUEST_TOKEN}`,
        },
      };
      const mergedOptions = {
        ...defaultOptions,
        ...options,
      };
      const requestUrl = getURL(path);
      const response = await fetch(requestUrl, mergedOptions);
    

      const data = await response.json();
      return data;
}

export {
    fetchAPI,
    multifetchAPI
}