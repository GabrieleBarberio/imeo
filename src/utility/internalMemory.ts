export const save = (key: string, value: string): void => {
  if (!key || typeof key !== "string") throw new Error("key must be a string!");
  if (value === undefined) throw new Error("value must be specified!");
  localStorage.setItem(key, JSON.stringify(value));
};

export const get = <T>(key: string): T | null => {
  if (!key || typeof key !== "string") throw new Error("key must be a string!");
  const value = localStorage.getItem(key);
  return value !== null ? (JSON.parse(value) as T) : null;
};

export const remove = (key: string): void => {
  if (!key || typeof key !== "string") throw new Error("key must be a string!");
  localStorage.removeItem(key);
};
