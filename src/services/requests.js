import { httpAxios } from "@/helper/httpHelper";

export async function acceptRequest(data) {
  try {
    const result = await httpAxios
      .post("/api/request", data)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteRequest(data) {
  console.log(data.rid);
  try {
    const result = await httpAxios
      .delete(`/api/request/${data.rid}`)
      .then((response) => response);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
