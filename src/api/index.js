const API_ROOT = 'https://norma.nomoreparties.space/api';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

const getIngredients = async () => {
  let data = [];
  try {
    const res = await fetch(`${API_ROOT}/ingredients`, {headers: headers});

    if (res.ok) {
      data =( await res.json()).data;
    }
  } catch (e) {
    console.error(e);
  }

  return data;
}

export { getIngredients };
