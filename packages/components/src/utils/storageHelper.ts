import localforage from 'localforage';

const getFromStorage = (key: string) => {
  return localforage.getItem(key);
};

const setToStorage = (key: string, data: any, callback?: any) => {
  localforage.setItem(key, data, callback);
};

export { getFromStorage, setToStorage };
