const defaultOnError = (error) => {
  throw error;
};

const storeData = (key, value, onError = defaultOnError) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    onError(e);
  }
};

const getData = (key, onError = defaultOnError) => {
  try {
    const value = localStorage.getItem(key);
    return value;
  } catch (e) {
    onError(e);
  }
};

export { storeData, getData };
