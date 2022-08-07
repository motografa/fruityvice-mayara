import http from "./http-common";

class DataService {

  getAll() {
    return http.get("/character");
  }
  get(id) {
    // exemplo romulo27
    return http.get(`/character/${id}`);
  }
//   create(data) {
//     return http.post("/tutorials", data);
//   }
//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }
//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new DataService();
