const Storage = {
  get: (key) => {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return null;
  },

  set: (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  },

  remove: (key) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },
};

export default Storage;
