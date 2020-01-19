export const pipe = (...fns) => (initialData = null) =>
  fns.reduce((updatedData, fn) => fn(updatedData), initialData);
