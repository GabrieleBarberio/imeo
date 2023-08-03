export const save = (key, value) => {
  if (!key || typeof key !== "string") throw new Error("key must be a string!");
  if (value === undefined) throw new Error("value must be specified!");
  localStorage.setItem(key, JSON.stringify(value));
};

export const get = (key) => {
  if (!key || typeof key !== "string") throw new Error("key must be a string!");
  return JSON.parse(localStorage.getItem(key));
};

export const remove = (key) => {
  if (!key || typeof key !== "string") throw new Error("key must be a string!");
  localStorage.removeItem(key);
};
