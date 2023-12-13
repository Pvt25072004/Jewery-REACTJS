import axiosApi from "./axiosApi";

const ringApi = {
  getAll(params) {
    const url = "/products_ring";
    return axiosApi.get(url, { params: params });
  },
  get(id) {
    const url = `/products_ring/${id}`;
    return axiosApi.get(url);
  },
  add(data) {
    const url = "/products_ring";
    return axiosApi.post(url, data);
  },
  update(data) {
    const url = `/products_ring/${data.id}`;
    return axiosApi.put(url, data);
  },
  remover(id) {
    const url = `/products_ring/${id}`;
    return axiosApi.delete(url);
  },
};
export default ringApi;
