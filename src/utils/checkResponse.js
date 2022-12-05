export const checkResponse = async (res) => {
  if (res.ok) {
    const data = await res.json();
    return data;
  }

  const body = await res.json();
  return Promise.reject(body)

}