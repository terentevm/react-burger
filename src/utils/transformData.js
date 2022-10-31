const getIngredientsTypes = () => {
  const map = new Map();
  map.set('bun', 'Булки');
  map.set('sauce', 'Соусы');
  map.set('main', 'Начинки');

  return map;
};
export const transformArrayToTree = (data) =>{
  const ingredientsTypes = getIngredientsTypes();
  const tree = [];

  for (const key of ingredientsTypes.keys()) {
    tree.push({
      type: key,
      title: ingredientsTypes.get(key),
      list: data.filter(item => item.type === key)
    })
  }

  return tree;
}
