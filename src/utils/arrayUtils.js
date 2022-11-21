export const findItemIndexById = (items, id) => {
  return items.findIndex((item) => item.id === id)
};

export function removeItemAtIndex(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function insertItemAtIndex(array, item, index) {
  return [...array.slice(0, index), item, ...array.slice(index)];
}

export const moveItem = (array, from, to) => {
  const item = array[from];

  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
}