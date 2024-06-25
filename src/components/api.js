// api.js

const fetchData = async () => {
  const localStorageKey = 'userData';
  let cachedData = localStorage.getItem(localStorageKey);

  if (cachedData) {
    cachedData = JSON.parse(cachedData);
    return cachedData;
  }

  try {
    const response = await fetch('https://random-data-api.com/api/users/random_user?size=100');
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const result = await response.json();
    localStorage.setItem(localStorageKey, JSON.stringify(result));
    return result;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
  };
  
  export default fetchData;
  