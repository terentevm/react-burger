export const checkResponse = async (res) => {
  if (res.ok) {
    const data = await res.json();
    return data;
  }

  throw new Error('Произошла ошибка');

}