export const localStorageSetItem = (itemName, data) => {
  localStorage.setItem(`${itemName}`, JSON.stringify(data));
};

export const localStorageGetItem = (itemName) => {
  const local_data = JSON.parse(localStorage.getItem(`${itemName}`));
  return local_data;
};
