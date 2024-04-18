import { httpAxios } from "../helper/httpHelper";

export async function currentUser(data) {
  const result = await httpAxios
    .get("/api/currentUser", { data })
    .then((response) => response.data);
  return result;
}

export async function login(loginData) {
  const result = await httpAxios
    .post("/api/login", loginData)
    .then((response) => response.data);
  return result;
}

export async function register(user) {
  const result = await httpAxios
    .post("/api/register", user)
    .then((response) => response.data);

  return result;
}

export async function logout() {
  const result = await httpAxios
    .post("/api/logout")
    .then((response) => response.data);
  return result;
}
