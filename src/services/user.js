import { httpAxios } from "../helper/httpHelper";

export async function currentUser(data) {
  const result = await httpAxios
    .post("/api/currentUser", { data })
    .then((response) => response.data);
  return result;
}
