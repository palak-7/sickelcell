import { httpAxios } from "../helper/httpHelper";

export async function getAllNews() {
  try {
    const result = await httpAxios
      .get("/api/get_news")
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getRequests() {
  try {
    const result = await httpAxios
      .get("/api/get_requests")
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
