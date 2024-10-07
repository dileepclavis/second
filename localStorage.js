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

// add this one branch dileep_one
// add another code into this branch dileep_one

export { storeData, getData };


