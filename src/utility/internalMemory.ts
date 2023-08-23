export const save = (key: string, value: string): void => {
  if (!key || typeof key !== "string") throw new Error("key must be a string!");
  if (value === undefined) throw new Error("value must be specified!");
  localStorage.setItem(key, JSON.stringify(value));
};

export const get = (key: string): any => {
  if (!key || typeof key !== "string") throw new Error("key must be a string!");
  return JSON.parse(localStorage.getItem(key) || "null");
};

export const remove = (key: string): void => {
  if (!key || typeof key !== "string") throw new Error("key must be a string!");
  localStorage.removeItem(key);
};
