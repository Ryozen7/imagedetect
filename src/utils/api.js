

export function getURL(path) {
    return `${
      process.env.REACT_APP_API_URL || "http://localhost:4000"
    }${path}`;
}

export async function fetchAPI(path, options = {}) {
    let token = JSON.parse(localStorage.getItem('accessToken'));
    if (!token) token = process.env.REACT_APP_REQUEST_TOKEN;

    let defaultOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    };

    const mergedOptions = {
      ...defaultOptions,
      ...options,
    };
    const requestUrl = getURL(path);
    const response = await fetch(requestUrl, mergedOptions);
    if (!response.ok) {
      console.error(response.statusText);
      throw new Error(`An error occured please try again`);
    }
    const data = await response.json();
    return data;
  }

  