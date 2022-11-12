const API_ROOT = 'https://norma.nomoreparties.space/api';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

const getIngredients = async () => {
  let data = [];

  const res = await fetch(`${API_ROOT}/ingredients`, {headers: headers});

  if (res.ok) {
    data =( await res.json()).data;
  }
  else {
    throw new Error('Произошла ошибка');
  }

  return data;
}

const createOrder = async (ingredientIds) => {
  const res = await fetch(`${API_ROOT}/orders`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ingredients: ingredientIds})
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  }

  throw new Error('Произошла ошибка');
}

export { getIngredients, createOrder };
