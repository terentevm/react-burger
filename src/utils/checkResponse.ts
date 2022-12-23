import { IResponse } from "../types";

export const checkResponse = async <T>(res: IResponse<T>) : Promise<T> => {
  if (res.ok) {
    const data = await res.json();
    return data;
  }

  const body = await res.json();
  return Promise.reject(body)

}